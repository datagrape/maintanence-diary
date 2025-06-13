const otpVerifyService = require('../services/otpVerifyService');

exports.verifyOtp = async (req, res, next) => {
    try {
      const { email, otp } = req.body;
      if (!email || !otp) {
        return res.status(400).json({ success: false, message: 'Email and OTP are required' });
      }
  
      const user = await otpVerifyService.verifyOtp(email);
  
      if (!user || user.otp !== otp || user.otpExpiration < Date.now()) {
        return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    res.json({ message: 'OTP verified successfully' });
    } catch (error) {
      next(error);
    }
  };