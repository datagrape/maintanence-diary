const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Generate 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP and Save to DB
exports.sendOtp = async (email) => {
    const otp = generateOtp();
    const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes

    // Save to DB
    console.log(otp)
    console.log(otpExpiration)
    console.log(email)
    await prisma.user.update({
        where: { email },
        data: { otp, otpExpiration },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
};

