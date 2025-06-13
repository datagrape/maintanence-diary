const otpService = require('../services/otpService');

exports.sendOtp = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        await otpService.sendOtp(email);

        res.json({ message: 'OTP sent to email' });
    } catch (error) {
        next(error);
    }
};