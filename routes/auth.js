const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;