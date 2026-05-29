const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

exports.loginUser = async (req, res, next) => {
  const { email, password, deviceToken } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  try {

    const user = await loginService.loginUser(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.isDisabled) {
      return res.status(401).json({ error: 'Account Not Found or Disabled' });
    }

    if (deviceToken) {
      await loginService.saveDeviceToken(user.id, deviceToken);
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {
    });

    res.json({
      success: true, token, user: {
        name: user.name,
        email: user.email,
        userType: user.userType,
        subscriptionType: user.subscriptionType,
        accountPlan: user.subscriptionType === 'Free' ? 'free' : 'paid',
        isPaidUser: user.subscriptionType !== 'Free',
        userId: user.id,
      }
    });
  } catch (error) {
    next(error);
  }
};
