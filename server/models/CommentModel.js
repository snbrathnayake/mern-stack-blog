const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: { required: true, type: mongoose.Schema.Types.ObjectId , ref:'Post'},
    userId: { required: true, type: mongoose.Schema.Types.ObjectId ,ref:'User' },
    decription: {
        type: String,
        required: true,
        max: 150
    },
    visibility: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);