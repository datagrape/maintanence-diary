const { Prisma } = require('@prisma/client');
const prisma = require('../prismaClient');

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

exports.createActivity = async (name, userId, guid) => {
    const scope = buildScope({ userId, guid });
    if (scope.userId !== undefined) await ensureUserEnabled(scope.userId);
    return prisma.activity.create({
        data: { name, userId: scope.userId ?? null, guid: scope.guid ?? null },
    });
};

exports.getActivityByUser = async (userId, guid) => {
    const scope = buildScope({ userId, guid });
    if (scope.userId !== undefined) await ensureUserEnabled(scope.userId);
    const activities = await prisma.activity.findMany({
        where: scope,
    });

    return activities;
};

exports.deleteActivityById = async (id, userId, guid) => {
    const scope = buildScope({ userId, guid });
    const activityId = parseInt(id, 10);
    const activity = await prisma.activity.findUnique({
        where: { id: activityId },
    });
    if (!activity) {
        const err = new Error('Activity not found');
        err.status = 404;
        err.body = { message: 'Activity not found' };
        throw err;
    }

    if (scope.userId !== undefined && activity.userId !== scope.userId) {
        const err = new Error('Activity does not belong to userId');
        err.status = 403;
        throw err;
    }
    if (scope.guid !== undefined && activity.guid !== scope.guid) {
        const err = new Error('Activity does not belong to guid');
        err.status = 403;
        throw err;
    }
    if (activity.userId) await ensureUserEnabled(activity.userId);

    await prisma.activity.delete({
        where: { id: activityId },
    });
};
