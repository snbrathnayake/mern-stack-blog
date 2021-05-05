const express = require('express');
const { isAuth } = require('../controllers/authCtrl');
const router = express.Router();

const {
    findUserProfile,
    updateUserProfile,
    findUserProfileById
} = require('../controllers/userCtrl');


router.get('/profile', isAuth, findUserProfile);
router.put('/profile', isAuth, updateUserProfile);
router.get('/profile/:id', isAuth, findUserProfileById);


module.exports = router;