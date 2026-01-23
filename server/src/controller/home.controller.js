const CNAME = "homeController.js "
const VNAME = "admin/";
const PageConfigEntity = require('../model/pageConfig.model');

const homeController = ()=>{
    return {
        Index: (req, res)=>{
            // res.json({success: true, data: 'hi'});
            res.render(VNAME+'dashboard');
        },
        PageConfig:async (req, res)=>{
            try {
                const pc = await PageConfigEntity.findOne().lean(); 
                res.render('admin/pageConfig', {pc})
            } catch (error) {
                console.log(CNAME, error.message);
                res.render('admin/pageConfig', {pc: []})
            }
        },
        CreatePageConfig: async (req, res)=>{
            try {
                console.log('running')
                const data = req.body;
                const pcDTO = data;
                const result = await PageConfigEntity.findOneAndUpdate(
                    {},
                    pcDTO,
                    {
                        upsert: true,
                        new: true
                    }
                );
                res.json({success: true, result})

            } catch (error) {
                console.log(CNAME, error.message);   
                res.status(500).json({success: false, mess: error.message})
            }
        }
    }
}

module.exports = homeController;