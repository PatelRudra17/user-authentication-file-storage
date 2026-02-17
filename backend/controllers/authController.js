const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const offlineStore = require('../utils/offlineStore');

const isDbConnected = () => mongoose.connection.readyState === 1;

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        if (isDbConnected()) {
            // ONLINE MODE (MongoDB)
            const userExists = await User.findOne({ email });
            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const user = await User.create({ name, email, password, role });
            if (user) {
                return res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user._id),
                    mode: 'online'
                });
            }
        } else {
            // OFFLINE MODE (JSON Fallback)
            console.log('🚨 Database offline: Using offline registration storage');
            const userExists = offlineStore.findUserByEmail(email);
            if (userExists) {
                return res.status(400).json({ message: 'User already exists (offline storage)' });
            }

            // Hash password manually for offline storage
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = offlineStore.addUser({
                name,
                email,
                password: hashedPassword,
                role
            });

            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
                mode: 'offline'
            });
        }

        res.status(400).json({ message: 'Invalid user data' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: err.message });
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (isDbConnected()) {
            // ONLINE MODE (MongoDB)
            const user = await User.findOne({ email }).select('+password');
            if (user && (await user.matchPassword(password))) {
                return res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user._id),
                    mode: 'online'
                });
            }
        } else {
            // OFFLINE MODE (JSON Fallback)
            console.log('🚨 Database offline: Using offline login verification');
            const user = offlineStore.findUserByEmail(email);
            if (user && (await bcrypt.compare(password, user.password))) {
                return res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user._id),
                    mode: 'offline'
                });
            }
        }

        res.status(401).json({ message: 'Invalid email or password' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: err.message });
    }
};

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d',
    });
};

module.exports = {
    registerUser,
    loginUser,
};
