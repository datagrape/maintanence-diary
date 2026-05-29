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

// -----------------------------
// GROUP SERVICES
// -----------------------------

exports.createGroup = async (name, userId, guid) => {
    const scope = buildScope({ userId, guid });
    if (scope.userId !== undefined) await ensureUserEnabled(scope.userId);

    return prisma.group.create({
        data: { 
            name, 
            userId: scope.userId ?? null,
            guid: scope.guid ?? null
        },
    });
};

exports.getGroupByUser = async (userId, guid) => {
    const scope = buildScope({ userId, guid });
    if (scope.userId !== undefined) await ensureUserEnabled(scope.userId);

    const groups = await prisma.group.findMany({
        where: scope,
    });

    return groups;
};

exports.deleteGroupById = async (id, userId, guid) => {
    const scope = buildScope({ userId, guid });
    const groupId = parseInt(id, 10);

    const group = await prisma.group.findUnique({
        where: { id: groupId },
    });

    if (!group) {
        const err = new Error('Group not found');
        err.status = 404;
        err.body = { message: 'Group not found' };
        throw err;
    }

    if (scope.userId !== undefined && group.userId !== scope.userId) {
        const err = new Error('Group does not belong to userId');
        err.status = 403;
        throw err;
    }
    if (scope.guid !== undefined && group.guid !== scope.guid) {
        const err = new Error('Group does not belong to guid');
        err.status = 403;
        throw err;
    }
    if (group.userId) await ensureUserEnabled(group.userId);

    await prisma.group.delete({
        where: { id: groupId },
    });
};
