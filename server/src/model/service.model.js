const mongoose = require('mongoose');
const slugify = require('slugify');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug:{
        type: String,
        unique: true
    },
    shortDesc: String,
    desc: String,
    thumbnail: String,
    icon: String,

    benefits: [Stirng],// loi ich ring cua dich vu
    isFeatured: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        eneum: ['active', 'inactive'],
        default: 'active'
    }
}, {timestamps: true})

module.exports = mongoose.model('service', serviceSchema);