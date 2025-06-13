const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createGroup = async (name, userId) => {
    return prisma.group.create({
        data: { name, userId },
    });
};

exports.getGroupByUser = async (userId) => {
    const groups = await prisma.group.findMany({
        where: {
            userId: userId,
        },
    });

    return groups;
};

exports.deleteGroupById = async (id) => {
    await prisma.group.delete({
        where: { id: parseInt(id) },
    });
};