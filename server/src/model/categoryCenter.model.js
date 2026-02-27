const mongoose = require('mongoose');
const slugify = require('slugify');

const categoryCenterSchame = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,    
    },
    image: {type: String}, 
    slug: {
        type: String,
        trim: true,
        unique: true,
        index: true
    }
}, {timestamps: true});

categoryCenterSchame.pre('save', async function(){
    if(!this.slug && this.name){
        this.slug = slugify(this.name,{
            lower: true,
            strict: true,
            locale: 'vi'
        }) 
    }
})

module.exports = mongoose.model('category_center', categoryCenterSchame);