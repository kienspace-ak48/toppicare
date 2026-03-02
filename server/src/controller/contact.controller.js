const contactService = require("../services/contact.service");

const CNAME = "contact.controller.js ";
const VNAME = "admin/contact";
const { Parser } = require("json2csv");
const contactController = () => {
  return {
    //ajax get-all
    GetAllAjax: async (req, res) => {
      try {
        const type = req.query.type;
        var _notType = null; 
        if(type==='customer'){
          _notType = 'partner'
        }else{
          _notType = 'customer'
        }
        const task1 = await contactService.getByNotType(_notType);
        // console.log(task1);
        res.json({ success: true, data: task1 });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, data: [] });
      }
    },
    PartnerIndex: async(req, res)=>{
      try {
        const type = 'customer';
        const task1 = await contactService.getByNotType(type);
        console.log(task1);
        res.render(VNAME+'/partner', {data: task1});
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(CNAME+'partner',{data: []} )
      }
    },
    GetAll: async (req, res) => {
      try {//mac dinh 2 type
        const type = req.query?.type;
        const task1 = await contactService.getByNotType(type);

        res.render(VNAME + "/index", { data: task1 });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "index", { data: [] });
      }
    },
    ExportCSV: async (req, res) => {
      try {
        const data = await contactService.getAll();

        const fields = [
          "name",
          "email",
          "phone",
          "subject",
          "message",
          "status",
          "createdAt",
        ];
        const parser = new Parser({ fields });
        const csv = parser.parse(data);
        res.header("Content-Type", "text/csv");
        const prefix= Date.now();
        res.attachment(`contacts-${prefix}.csv`);
        return res.send(csv);
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: "Server error" });
      }
    },
    ChangeStatus: async (req, res) => {
      try {
        const { ids, status } = req.body;
        // console.log(ids, status);
        if (!ids || !ids.length)
          return res
            .status(400)
            .json({ success: false, mess: "No IDs provided" });

        const task1 = await contactService.changeStatus(ids, status);
        console.log(task1);
        if (!task1) {
          res.status(500).json({ success: false, mess: "Server error" });
        }
        res.json({ success: true, mess: "updated successfully" });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: "Server error" });
      }
    },
    DeleteByIds: async (req, res) => {
      try {
        const {ids} = req.body;
        // console.log(ids);
        if (!ids || !ids.length)
          return res
            .status(400)
            .json({ success: false, mess: "delete failed" });
        const task1 = await contactService.deleteByIds(ids);
        if (!task1)
          return res
            .status(400)
            .json({ success: false, mess: "processing delete failed" });
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: true, mess: "Server error" });
      }
    },
    // ajax
    CountMess: async(req, res)=>{
      try {
        const type = req.query.type;
        // console.log('type ',type);
        const task1 = await contactService.countNewNotPartner('partner');
        const task2 = await contactService.countNewNotPartner('customer');

        res.json({success: true, data: {partner:task2, customer: task1}});
      } catch (error) {
        console.log(CNAME, error.message)
        res.status(500).json({success: false, mess: 'Server error'})
      }
    }
  };
};

module.exports = contactController;
