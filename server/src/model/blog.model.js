const mongoose = require('mongoose')
const slugify = require('slugify')

const BlogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    slug: {type: String, unique: true, index: true},
    status: {type: Boolean, default: false},
    content: String,
    img: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    author: String,
    deletedAt: Date
}, {timestamps: true})

module.exports = mongoose.model('blog', BlogSchema);