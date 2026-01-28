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
    async getAll(){}
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
    async delete(id){}
}

module.exports = new BlogService();