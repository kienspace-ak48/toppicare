const CNAME ="blog.service.js ";
const BlogEntity = require('../model/blog.model')

class BlogService {
    constructor(parameters) {
        console.log('initial blog.service.js')
    }
    async add(data){
        try {
            const b = new BlogEntity(data);
            await b.save();
            return true;
        } catch (error) {
            console.log(CNAME, error.message);
            return false;
        }
    }
    async getAllMergeCaregory(){
        try {
            const blogs = await BlogEntity.find().populate('category_id', 'name slug category_root' ).sort({updatedAt: -1});
            return blogs;
        } catch (error) {
            console.log(CNAME, error.message);
            return []
        }
    }
    async getAll(){
        try {
            const result = await BlogEntity.find().sort({updatedAt: -1});
            result.forEach(b=>{
                console.log(b.title +' '+b.updatedAt);
            })
            return result;
        } catch (error) {
            console.log(CNAME, error.message);
            return [];
        }
    }
    async getById(id){
        try {
            const b = await BlogEntity.findById(id);
            return b;
        } catch (error) {
            console.log(CNAME, error.message);
            return {}
        }
    }
    async getBySlug(slug){}
    async update(id, data){
        try {
            const result = await BlogEntity.findByIdAndUpdate(
                id,
                data,
                {new: true}
            )
            return {success: true, data: result}
        } catch (error) {
            console.log(CNAME, error.message);
            return {success: false, mess: error.message}
        }
    }
    async delete(id){
        try {
            const result = await BlogEntity.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log(CNAME, error.message);
            return false;
        }
    }
    
}

module.exports = new BlogService();