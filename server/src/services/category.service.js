const CNAME = "category.service.js ";
const CategoryEntity = require('../model/category.model') 

class CategoryService {
    constructor(parameters) {
        console.log('initial '+CNAME);
    }
    async add(category){
        try {
            const c = new CategoryEntity(category);
            await c.save();
            return true;
        } catch (error) {
            console.log(CNAME, error.message);
            return false;
        }
    }
    async getAll(){
        try {
            const categories = await CategoryEntity.find().lean();
            return categories;
        } catch (error) {
            console.log(CNAME, error.message)
            return [];
        }
    }
    async getBySlug(){}
    async getById(id){
        try {
            const category =await CategoryEntity.findOne({_id: id}).lean();
            return {success: true, cat: category}
        } catch (error) {
            console.log(CNAME, error.message);
            return {success: false, cat: {}}
        }
    }
    async update(category, id){
        try {
            const result = await CategoryEntity.findByIdAndUpdate(
                id,
                {
                    name: category.name,
                    category_root: category.category_root,
                },
                {
                    new: true
                }
            )
            return {success: true, data: result}
        } catch (error) {
            console.log(CNAME, error.message)
            return {success: false, mess: error.message}
        }
    }
    async Delete(id){
        try {
            const result = await CategoryEntity.deleteOne({_id: id});
            return true;
        } catch (error) {
            console.log(CNAME, error.message);
            return false;
        }
    }
}

module.exports = new CategoryService();