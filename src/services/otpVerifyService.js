const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Verify OTP from DB
exports.verifyOtp = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email: { equals: email, mode: 'insensitive' } },
    });

    if (!user) {
        throw new Error('User with that email not found');
    }
    return prisma.user.findUnique({ where: { id: user.id } });
};

