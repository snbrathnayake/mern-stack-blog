const Post = require('../models/BlogPostModel');


exports.createPost = (req, res) => {
    const {
        userId,
        title,
        decription,
        category,
        image_url,
        published = true
    } = req.body;

    let newPost = new Post({
        userId,
        title,
        decription,
        category,
        image_url,
        published
    });

    newPost.save((err, data) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json({
            post: data,
            status: 201,
            message: 'new post successfully created!.'
        })
    });
};

exports.updatePost = (req, res) => {
    console.log(req.body)
    Post.findById(req.body._id).exec((err, post) => {
        if (err || !post) {
            return res.status(400).json({ error: err });
        }

        if (post) {
            post.title = req.body.title || post.title;
            post.decription = req.body.decription || post.decription;
            post.category = req.body.category || post.category;
            post.image_url = req.body.image_url || post.image_url;
            post.published = req.body.published || post.published;

            post.save();
        }
        res.json({ status: 204, data: post });
    });
};

exports.deletePost = (req, res) => {
    Post.findById(req.params.id).exec((err, post) => {
        if (err || !post) {
            return res.status(400).json({ error: err });
        }
        const data = post.deleteOne({ _id: req.params.id });
        res.json(data);
    });
};

exports.fetchBlogPosts = (req, res) => {
    Post.find({}, function (err, posts) {
        if (err) {
            return res.status(500).json({ error: 'request error ', err });
        }
        res.json(posts);
    });
};

exports.updatePostVoteCount = (req, res) => {

};

exports.findPostsByCategoryType = (req, res) => {

};

exports.findPostsById = (req, res) => {

}


exports.findPostsByUserId = (req, res) => { }