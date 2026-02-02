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

    benefits: [String],// loi ich ring cua dich vu
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

//auto slug
serviceSchema.pre("save", async function(){
  if(!this.slug){
    this.slug = slugify(this.name, {lower: true, strict: true, locale: 'vi'});
  }
});
module.exports = mongoose.model('service', serviceSchema);