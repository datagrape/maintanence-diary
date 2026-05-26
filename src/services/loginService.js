const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.loginUser = async (email) => {
  // Find user by username
  return prisma.user.findUnique({
    where: { email },
  });
};

exports.saveDeviceToken = async (userId, deviceToken) => {
  const token = typeof deviceToken === 'string' ? deviceToken.trim() : '';
  if (!token) return;

  await prisma.user.update({
    where: { id: userId },
    data: { deviceToken: token }
  });

  await prisma.deviceToken.upsert({
    where: { token },
    update: {
      userId,
      isActive: true,
      platform: 'unknown'
    },
    create: {
      userId,
      token,
      isActive: true,
      platform: 'unknown'
    }
  });
};
