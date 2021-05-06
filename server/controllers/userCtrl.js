const User = require('../models/UserModel');

exports.findUserProfile = (req, res) => {
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).json({ error: 'request error ', err });
        }
        res.json(users);
    });
};

exports.findUserProfileById = (req, res) => {
    const query = User.where({ _id: req.params.id }); // <-- Use the correct param name
    query.findOne(function (err, user) {
        if (err) {
            return res.status(404).json({ error: 'not found' })
        }
        res.json(user);
    });
};


exports.updateUserProfile = (req, res) => {
    // const user = await User.findById(req.user._id);
    User.findById(req.body._id).exec((err, userInfo) => {
        if (err || !userInfo) {
            return res.status(400).json({ error: err });
        }

        if (userInfo) {
            userInfo.name = req.body.name || userInfo.name;
            userInfo.email = req.body.email || userInfo.email;
            if (req.body.password) {
                userInfo.password = userInfo.encryptPassword(req.body.password)
            }
            userInfo.save();
        }
        res.json({ status: 204, data: userInfo });
    });

};
