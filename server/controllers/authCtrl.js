require('dotenv/config');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/UserModel');
const { generateToken } = require('../utils/createToken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({ error: `${req.body.email} address is already taken` })
        }
        const { name, email, password, role = 101 } = req.body;
        let username = shortId.generate();// username:[dDFDFg!2$&fDF] or [name]
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;
        let newUser = new User({ name, email, password, profile, username, role });

        newUser.save((err, data) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            res.json({
                user: data,
                status: 201,
                message: 'New account successfully created!.'
            })
        })
    });
};

exports.signin = (req, res) => {

    const { email, password } = req.body;
    User.findOne({ email }).exec((err, userInfo) => {
        if (err || !userInfo) {
            return res.send({ error: `User with ${req.body.email} does not exist. Please signup.` });
        }
        // authenticate userInfo
        if (!userInfo.authenticated(password)) {
            // return res.status(403).json({ error: `${req.body.email} and ${req.body.password} do not mathch.` });
            return res.send({ error: `${req.body.email} and password do not mathch.` });
        }
        //generate a token & send to client.
        // const token = jwt.sign({ _id: userInfo._id }, process.env.JWT_SECRET, { expiresIn: '7h' });
        const token = generateToken(userInfo);
        res.cookie('token', token, { expiresIn: process.env.EXPIRATION_TIME });

        const { _id, username, name, email, role } = userInfo;
        res.json({ token, user: { _id, username, name, email, role } });
    });
};

// private route()
exports.isAuth = expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['sha1', 'HS256'] });

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: `Sign out successful` });
};