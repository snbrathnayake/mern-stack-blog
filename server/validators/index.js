const { validationResult } = require('express-validator');

exports.securityRequestMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ status: 403, error: errors.array()[0].msg }) // forbidden 403
    }
    next(); 
};