const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async ( email, hashedPassword, userType, subscriptionType) => {
  return prisma.user.create({
    data: { email, password: hashedPassword, userType, subscriptionType },
  });
};
