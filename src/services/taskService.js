const { Prisma } = require('@prisma/client');
const prisma = require('../prismaClient');
const ALLOWED_TASK_STATUS = new Set(['created', 'assigned', 'completed']);

const normalizeIntOrNull = (value) => {
    if (value === undefined || value === null || value === '') return null;
    const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
    return Number.isInteger(parsed) ? parsed : null;
};

const normalizeGuidOrNull = (value) => {
    if (value === undefined || value === null) return null;
    const trimmed = String(value).trim();
    return trimmed || null;
};

const buildScope = ({ userId, guid }) => {
    const uid = normalizeIntOrNull(userId);
    const guidValue = normalizeGuidOrNull(guid);
    if (uid !== null && guidValue) {
        const err = new Error('Provide only one of userId or guid');
        err.status = 400;
        throw err;
    }
    if (uid !== null) return { userId: uid };
    if (guidValue) return { guid: guidValue };
    const err = new Error('userId or guid is required');
    err.status = 400;
    throw err;
};

const ensureUserEnabled = async (userId) => {
    const uid = typeof userId === 'string' ? parseInt(userId, 10) : userId;

    const user = await prisma.user.findUnique({
        where: { id: uid },
        select: { id: true, isDisabled: true }
    });

    if (!user) {
        const err = new Error('User not found');
        err.status = 404;
        err.body = { message: 'User not found' };
        throw err;
    }

    if (user.isDisabled) {
        const err = new Error('User is deactivated');
        err.status = 401;
        err.body = { message: 'User is deactivated' };
        throw err;
    }

    return user;
};

// ----------------------------------------------------
// CREATE TASK
// ----------------------------------------------------
exports.createTask = async (payload) => {
    const {
        name,
        userId,
        guid,
        groupName,
        groupId,
        activityName,
        activityId,
        member,
        dueDate,
        type,
        status,
        location,
        taskId,
        link,
        completeddate,
        updatedBy,
        url
    } = payload;

    const normalizeLocation = (value) =>
        typeof value === 'object' && value !== null ? JSON.stringify(value) : value ?? null;
    const normalizeStatus = (value) => {
        const normalized = String(value || '').trim().toLowerCase();
        if (!normalized) return type === 'assigned' ? 'assigned' : 'created';
        if (!ALLOWED_TASK_STATUS.has(normalized)) {
            const err = new Error('status must be one of: created, assigned, completed');
            err.status = 400;
            throw err;
        }
        return normalized;
    };

    const normalizedUserId = normalizeIntOrNull(userId);
    const normalizedGuid = normalizeGuidOrNull(guid);
    if (normalizedUserId !== null && normalizedGuid) {
        const err = new Error('Provide only one of userId or guid');
        err.status = 400;
        throw err;
    }
    const normalizedGroupId = normalizeIntOrNull(groupId);
    const normalizedActivityId = normalizeIntOrNull(activityId);
    const normalizedLocation = normalizeLocation(location);
    const normalizedStatus = normalizeStatus(status);

    if (normalizedUserId !== null) {
        await ensureUserEnabled(normalizedUserId);
    } else if (!normalizedGuid) {
        const err = new Error('userId or guid is required');
        err.status = 400;
        throw err;
    }

    return prisma.$transaction(async (tx) => {
        const taskIdValue = String(taskId);
        const identityWhere = normalizedUserId !== null
            ? { taskId: taskIdValue, userId: normalizedUserId }
            : { taskId: taskIdValue, guid: normalizedGuid };

        const existingTask = await tx.task.findFirst({ where: identityWhere });

        const baseData = {
            taskId: taskIdValue,
            name,
            userId: normalizedUserId,
            guid: normalizedGuid,
            groupName,
            groupId: normalizedGroupId,
            activityName,
            activityId: normalizedActivityId,
            member,
            dueDate,
            type,
            status: normalizedStatus,
            location: normalizedLocation,
            link: link || null,
            completeddate: completeddate || null,
            updatedBy: updatedBy || null,
            url: url || null
        };

        const task = existingTask
            ? await tx.task.update({ where: { id: existingTask.id }, data: baseData })
            : await tx.task.create({ data: baseData });

        const linkValue = link ? String(link) : null;

        if (linkValue) {
            const existingLink = await tx.link.findUnique({ where: { link: linkValue } });
            const existingByTaskId = existingLink ? null : await tx.link.findFirst({ where: { taskId: taskIdValue } });

            if (existingLink || existingByTaskId) {
                await tx.link.update({
                    where: { id: (existingLink || existingByTaskId).id },
                    data: {
                        taskId: taskIdValue,
                        link: linkValue,
                        owner: normalizedUserId !== null ? String(normalizedUserId) : null,
                        userId: normalizedUserId,
                        guid: normalizedGuid,
                        duedate: dueDate,
                        group: groupName,
                        member,
                        taskname: name,
                        completeddate: completeddate || null,
                        location: normalizedLocation,
                        updatedBy: updatedBy || null,
                        status: normalizedStatus
                    }
                });
            } else {
                await tx.link.create({
                    data: {
                        taskId: taskIdValue,
                        link: linkValue,
                        owner: normalizedUserId !== null ? String(normalizedUserId) : null,
                        userId: normalizedUserId,
                        guid: normalizedGuid,
                        duedate: dueDate,
                        group: groupName,
                        member,
                        taskname: name,
                        completeddate: completeddate || null,
                        location: normalizedLocation,
                        updatedBy: updatedBy || null,
                        subscription: 'free',
                        status: normalizedStatus
                    }
                });
            }
        }

        return task;
    });
};

// ----------------------------------------------------
// GET TASKS BY USER
// ----------------------------------------------------
exports.getTaskByUser = async (userId, guid) => {
    const scope = buildScope({ userId, guid });
    if (scope.userId !== undefined) await ensureUserEnabled(scope.userId);

    const tasks = await prisma.task.findMany({
        where: scope,
    });

    return tasks;
};
