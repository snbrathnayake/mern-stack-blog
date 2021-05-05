const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required field'),
    check('email').isEmail().withMessage('Email must be a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

exports.userSigninValidator = [
    check('email').isEmail().withMessage('Email must be a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
 ];