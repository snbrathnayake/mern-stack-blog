const { validationResult } = require('express-validator');

exports.securityRequestMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next(); // continue the request(no errors)
};