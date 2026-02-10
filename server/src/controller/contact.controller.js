const contactService = require("../services/contact.service");

const CNAME ="contact.controller.js ";
const VNAME = "admin/contact";
const {Parser} = require('json2csv');
const contactController = ()=>{
    return {
        //ajax get-all
        GetAllAjax: async(req, res)=>{
            try {
                const task1 = await contactService.getAll();
                console.log(task1)
                res.json({success: true, data: task1});
            } catch (error) {
                console.log(CANME, error.message)
                res.status(500).json({success: false, data: []});
            }
        },
        GetAll: async(req, res)=>{
            try {
                const task1 = await contactService.getAll();
                
                res.render(VNAME+'/index', {data: task1});
            } catch (error) {
                console.log(CNAME, error.message);
                res.render(VNAME+'index', {data: []});
            }
        },
        ExportCSV: async(req, res)=>{
            try {
                const data = await contactService.getAll();

                const fields =[
                    'name',
                    'email',
                    'phone',
                    'subject',
                    'message',
                    'status',
                    'createdAt'
                ];
                const parser = new Parser({fields});
                const csv = parser.parse(data);
                res.header('Content-Type','text/csv');
                res.attachment('contacts.csv');
                return res.send(csv)
            } catch (error) {
                console.log(CNAME, error.message)
                res.status(500).json({success: false, mess: 'Server error'})
            }
        }
    }
}

module.exports = contactController;