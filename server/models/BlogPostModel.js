const mongoose = require('mongoose');


const blogPostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: {
        type: String,
        required: true,
        max: 120
    },
    decription: {
        type: String,
        required: true,
        max: 500
    },
    category: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: false,
        default: 0
    },
    published: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', blogPostSchema);