const Comment = require('../models/CommentModel');

exports.getPostComments = (req, res) => {
    const query = Comment.where({ postId: req.params.id });
    // Comment.find({key: 1} , function(err, data){
    query.find({}, function (err, commentList) {
        if (err) {
            return res.status(404).json({ error: 'not found' })
        }
        res.json(commentList);
    });
};

exports.addPostComment = (req, res) => {
    const { userId, postId, decription, visibility = true } = req.body;
    let newComment = new Comment({ userId, postId, decription, visibility });

    newComment.save((err, data) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({
            comment: data,
            status: 201,
            message: 'new comment successfully added!.'
        })
    });
};

exports.editPostComment = (req, res) => {
    Comment.findById(req.body._id).exec((err, commnet) => {
        if (err || !commnet) {
            return res.status(400).json({ error: err });
        }
        if (commnet) {
            commnet.decription = req.body.decription || commnet.decription;
            commnet.save();
        }
        res.json({ status: 204, data: commnet });

    });
};

exports.removePostComment = (req, res) => {
    Comment.findById(req.params.id).exec((err, comment) => {
        if (err || !comment) {
            return res.status(400).json({ error: err });
        }
        const data = comment.deleteOne({ _id: req.params.id });
        res.json(data);
    });
};