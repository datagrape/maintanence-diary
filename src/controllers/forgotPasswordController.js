const forgotPasswordService = require('../services/forgotPasswordService');

exports.sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body || {};
    const message = await forgotPasswordService.sendOtp(email);

    return res.status(200).json({
      success: true,
      message
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body || {};
    const result = await forgotPasswordService.verifyOtp(email, otp);

    return res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      resetToken: result.resetToken,
      expiresAt: result.expiresAt
    });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, newPassword, resetToken } = req.body || {};
    const message = await forgotPasswordService.resetPassword(email, newPassword, resetToken);

    return res.status(200).json({
      success: true,
      message
    });
  } catch (error) {
    next(error);
  }
};
