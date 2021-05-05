require('dotenv/config');
const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET || 'secretext',
        {
            expiresIn: process.env.EXPIRATION_TIME
        }
    );
};

// jwt.sign({ _id: userInfo._id }, process.env.JWT_SECRET, { expiresIn: '7h' });