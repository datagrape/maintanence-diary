const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.loginUser = async (email) => {
  // Find user by username
  return prisma.user.findUnique({
    where: { email },
  });
};
