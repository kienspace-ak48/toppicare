const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    category_root: {
        type: String,
        enum: ["training","service", "news"],
        require: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    DeletedAt: Date
}, {timestamps: true})

// Chỉ giữ lại 1 middleware pre('save')
CategorySchema.pre('save', async function(){
    if(!this.slug && this.name){
        this.slug = slugify(this.name,{
            lower: true,
            strict: true,
            locale: 'vi'
        });
    }
})
module.exports = mongoose.model("category", CategorySchema);