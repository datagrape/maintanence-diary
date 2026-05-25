const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const prisma = require('../prismaClient');
const { generateResetToken } = require('./notificationService');

const OTP_EXPIRY_MS = 10 * 60 * 1000;
const RESET_TOKEN_EXPIRY_MS = 10 * 60 * 1000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function getEnabledUserByEmail(email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) {
    const err = new Error('Email is required');
    err.status = 400;
    throw err;
  }

  const user = await prisma.user.findFirst({
    where: { email: { equals: normalizedEmail, mode: 'insensitive' } },
  });

  if (!user) {
    const err = new Error('User with that email not found');
    err.status = 404;
    throw err;
  }

  if (user.isDisabled) {
    const err = new Error('User is deactivated');
    err.status = 401;
    throw err;
  }

  return user;
}

exports.sendOtp = async (email) => {
  const user = await getEnabledUserByEmail(email);
  const otp = generateOtp();
  const otpExpiration = new Date(Date.now() + OTP_EXPIRY_MS);

  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otpExpiration }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Your password reset OTP',
    text: `Your OTP is ${otp}. It is valid for 10 minutes.`
  });

  return 'OTP sent to email';
};

exports.verifyOtp = async (email, otp) => {
  if (!otp) {
    const err = new Error('OTP is required');
    err.status = 400;
    throw err;
  }

  const user = await getEnabledUserByEmail(email);

  if (!user.otp || user.otp !== String(otp) || !user.otpExpiration || user.otpExpiration < new Date()) {
    const err = new Error('Invalid or expired OTP');
    err.status = 400;
    throw err;
  }

  const resetToken = generateResetToken();
  const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY_MS);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordResetToken: resetToken,
      passwordResetTokenExpiresAt: expiresAt
    }
  });

  return {
    resetToken,
    expiresAt
  };
};

exports.resetPassword = async (email, newPassword, resetToken) => {
  if (!newPassword || !resetToken) {
    const err = new Error('email, newPassword and resetToken are required');
    err.status = 400;
    throw err;
  }

  if (String(newPassword).length < 8) {
    const err = new Error('Password must be at least 8 characters long.');
    err.status = 400;
    throw err;
  }

  const user = await getEnabledUserByEmail(email);

  if (!user.passwordResetToken || user.passwordResetToken !== String(resetToken)) {
    const err = new Error('Invalid reset token');
    err.status = 400;
    throw err;
  }

  if (!user.passwordResetTokenExpiresAt || user.passwordResetTokenExpiresAt < new Date()) {
    const err = new Error('Expired reset token');
    err.status = 400;
    throw err;
  }

  const hashed = await bcrypt.hash(String(newPassword), 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashed,
      otp: null,
      otpExpiration: null,
      passwordResetToken: null,
      passwordResetTokenExpiresAt: null
    }
  });

  return 'Password reset successful';
};
