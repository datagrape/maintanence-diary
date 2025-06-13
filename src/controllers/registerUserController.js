const bcrypt = require("bcrypt");
const registerUserService = require('../services/registerUserService');

exports.createUser = async (req, res, next) => {
    const {email, password } = req.body;
    if (!email || !password ) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if (password.length < 8) {
        return res
            .status(400)
            .json({ error: "Password must be at least 8 characters long" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await registerUserService.createUser(email, hashedPassword, 'User', 'Free');
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};
