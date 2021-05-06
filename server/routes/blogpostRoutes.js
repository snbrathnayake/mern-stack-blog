const express = require('express');
const router = express.Router();

const { isAuth } = require('../controllers/authCtrl');
const {
    getPostComments,
    editPostComment,
    addPostComment,
    removePostComment
} = require('../controllers/commentCtrl');
const {
    fetchBlogPosts,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postCtrl');


router.get('/', fetchBlogPosts);
router.post('/create', isAuth, createPost);
router.put('/update', isAuth, updatePost);
router.delete('/delete/:id', isAuth, deletePost);

// comments[] for a post
router.get('/comment/get/:id', getPostComments);
router.post('/comment/add', addPostComment);
router.put('/comment/update', editPostComment);
router.delete('/comment/delete/:id', removePostComment);


module.exports = router;