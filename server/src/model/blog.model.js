const mongoose = require('mongoose')
const slugify = require('slugify')

const BlogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    slug: {type: String},
    status: String,
    content: String,
    img: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        require: true
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