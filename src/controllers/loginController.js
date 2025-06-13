const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
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

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {
    });

    res.json({
      success: true, token, user: {
        name: user.name,
        email: user.email,
        userType: user.userType,
        subscriptionType: user.subscriptionType,
        userId: user.id,
      }
    });
  } catch (error) {
    next(error);
  }
};