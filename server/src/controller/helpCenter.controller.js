const articleService = require("../services/article.service");
const categoryCenterService = require("../services/categoryCenter.service");

const CNAME = "helpCenter.controller.js ";
const VNAME ="admin/helpcenter";

const helpCenterController = ()=>{
    return {
        CategoryIndex: async(req, res)=>{
            try {
                res.render(VNAME+'/category');
            } catch (error) {
                console.log(CNAME, error.message);
                res.render(VNAME+'/category');
            }
        },
        //ajax
        CategoryEdit: async(req, res)=>{
            try {
                const id = req.params.id;
                console.log(id);
                const category = await categoryCenterService.getbyId(id);
                res.json({success: true, data: category})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: true, data: {}})
            }
        },
        // ajax
        CategoryUpdate: async(req, res)=>{
            try {
                const _id = req.params.id;
                const {name, slug} = req.body;
                const cDTO = {
                    name,
                    slug
                }
                const task1 = await categoryCenterService.update(cDTO, _id);
                if(!task1.success){
                    return res.status(500).json({success: false})
                }
                res.json({success: true})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, mess: "Server error"})
            }
        },
        // ajax
        CategoryGetAll: async(req, res)=>{
            try {
                const categories = await categoryCenterService.getAll();
                res.json({success: true, data: categories})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, data: []})

            }
        },
        // ajax 
        CategoryAdd: async(req, res)=>{
            try {
                const data = req.body;
                const cDTO={
                    name: data.name
                };
                console.log('data ',cDTO);
                const task1 = await categoryCenterService.create(cDTO);
                if(!task1){
                    return res.status(400).json({success: false, mess:'Created failed'})
                }
                res.json({success: true})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, mess: 'Server error'})

            }
        },
        CategoryDelete: async(req, res)=>{
            try {
                const id= req.params.id;
                const task1 = await categoryCenterService.delete(id);
                if(!task1) {
                    return res.status(400).json({success: false, mess: 'delete is faield'})
                }
                res.json({success: true})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, mess: 'Server error'})


            }
        },
        // ==================== Article
        ArticleIndex: async(req, res)=>{
            try {
                res.render(VNAME+'/article');
            } catch (error) {
                console.log(CNAME, error.message);
                res.render(VNAME+'/article');
            }
        },
        ArticleFormAdd: async(req, res)=>{
            try {
                const menu = await categoryCenterService.getMenu();
                // console.log(menu)
                res.render(VNAME+'/article_form_add', {menu});
            } catch (error) {
                console.log(CANME, error.message);
                res.render(VNAME+'/article_form_add', {menu: []});
            }
        },
        //ajax
        ArticleGetAll: async(req, res)=>{
            try {
                const articles = await articleService.getAll();
                return res.json({success: true, data: articles})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, data: []});
            }
        },
        //ajax
        ArticleAdd: async(req, res)=>{
            try {
                const {category, desc,content, img, slug, status, title, type, tags} = req.body;
                const flagCheck = await categoryCenterService.getbyId(category);
                if(!flagCheck){
                    return res.status(400).json({success: false, mess: 'input is not correct'})
                }
                const aDTO = {
                    title,
                    content,
                    desc,
                    image_url: img,
                    status: status==='0'? false: true,
                    slug,
                    tags,
                    categoryId: category,
                    type: type==='0'?'customer':'teachnician'
                }
                console.log(aDTO);
                const task1 = await articleService.create(aDTO);
                if(!task1){
                    return res.status(400).json({success: false, mess: 'created failed'})
                }
                res.json({success: true})
            } catch (error) {
                console.log(CANME, error.message);
                res.status(500).json({success: false, mess: 'Server error'})
            }
        },
        ArticleEdit: async(req, res)=>{
            try {
                const id = req.params.id;
                console.log(id);
                const menu = await categoryCenterService.getMenu();
                const article = await articleService.getbyId(id);
                console.log(article)
                res.render(VNAME+'/article_form_edit',{menu, article});
            } catch (error) {
                console.log(CNAME, error.message)
            }
        }
    }
}

module.exports = helpCenterController;