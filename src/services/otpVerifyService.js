const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Verify OTP from DB
exports.verifyOtp = async (email) => {
    return prisma.user.findUnique({ where: { email } });
};
