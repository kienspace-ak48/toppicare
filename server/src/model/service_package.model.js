const mongoose = require('mongoose');
const slugify = require('slugify');

const servicePackageSchema =new mongoose.Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    features: [String],
    is_popular: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        // enum: ['active', "inactive"],
        default: 1
    }
}, {timestamps: true})
//auto slug
// servicePackageSchema.pre("save", async function(){
//     // if(!this.slu)
// })

module.exports = mongoose.model('service_package', servicePackageSchema);