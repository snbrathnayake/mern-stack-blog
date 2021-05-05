const express = require('express');
const router = express.Router();

const { signup, signin, signout, isAuth } = require('../controllers/authCtrl');
const { securityRequestMiddleware } = require('../validators');
const { userSignupValidator, userSigninValidator } = require('../validators/auth');

router.post('/signup', userSignupValidator, securityRequestMiddleware, signup);
router.post('/signin', userSigninValidator, securityRequestMiddleware, signin);
router.get('/signout', signout);

router.get('/secret', isAuth, (req, res) => res.json({ message: "can access secret page" }));


module.exports = router;