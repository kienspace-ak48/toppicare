const mongoose = require('mongoose');
const slugify = require('slugify');

const servicePackageSchema =new mongoose.Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    features: [String],
    isPopular: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['active', "inactive"],
        default: 'active'
    }
}, {timestamps: true})

module.exports = mongoose.model('service_package', servicePackageSchema);