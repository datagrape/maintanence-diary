const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

/* Configure email transport */
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

exports.sendOtp = async (email) => {
    if (!email) throw new Error('Email is required');

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP in database
    await prisma.user.updateMany({
        where: { email },
        data: { 
            otp,
            otpExpiration
        }
    });

    // Send OTP email
    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: "Account Delete Verification OTP",
        text: `Your OTP for account deletion is: ${otp}`,
    });

    return "OTP has been sent to your email for delete confirmation.";
};


exports.verifyOtp = async (email, otp) => {
    const user = await prisma.user.findFirst({
        where: { email }
    });

    if (!user || !user.otp || !user.otpExpiration) {
        throw new Error('OTP not generated or expired.');
    }

    if (new Date() > user.otpExpiration) {
        throw new Error('OTP has expired.');
    }

    if (user.otp !== otp) {
        throw new Error('Invalid OTP.');
    }

    // Delete or disable account and clear OTP
    await prisma.user.updateMany({
        where: { email },
        data: { 
            isDisabled: true,
            otp: null,
            otpExpiration: null
        }
    });

    return "Your account has been successfully disabled.";
};
