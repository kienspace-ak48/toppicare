const contactService = require("../services/contact.service");

const CNAME = "contact.controller.js ";
const VNAME = "admin/contact";
const { Parser } = require("json2csv");
const XLSX = require("xlsx");

const contactController = () => {
  return {
    //ajax get-all
    GetAllAjax: async (req, res) => {
      try {
        const type = req.query.type;
        var _notType = null;
        if (type === "customer") {
          _notType = "partner";
        } else {
          _notType = "customer";
        }
        const task1 = await contactService.getByNotType(_notType);
        // console.log(task1);
        res.json({ success: true, data: task1 });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, data: [] });
      }
    },
    PartnerIndex: async (req, res) => {
      try {
        const type = "customer";
        const task1 = await contactService.getByNotType(type);
        console.log(task1);
        res.render(VNAME + "/partner", { data: task1 });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(CNAME + "partner", { data: [] });
      }
    },
    GetAll: async (req, res) => {
      try {
        //mac dinh 2 type
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
        const { from, to, type } = req.query;
        // console.log(type, from, to);

        let filter = {};
        // filter type trước
        if (type) {
          filter.type = type;
        }
        filter.type = type;
        // Nếu có chọn date range
        if (from || to) {
          filter.createdAt = {};

          if (from) {
            filter.createdAt.$gte = new Date(from);
          }

          if (to) {
            filter.createdAt.$lte = new Date(to + "T23:59:59");
          }
        }
        const data = await contactService.getByRangeFromTo(filter);
        //test
        // res.json({success: true, data: data})
        // Format lại dữ liệu cho đẹp
        //phan loai type
        let formattedData = null;
        if (type === "customer") {
          formattedData = data.map((item) => ({
            Name: item.name,
            Email: item.email,
            Phone: item.phone,
            // Subject: item.subject,
            Message: item.message,
            Status: item.status,
            "Created At": new Date(item.createdAt).toLocaleDateString("vi-VN"),
          }));
        } else if (type === "partner") {
          formattedData = data.map((item) => ({
          Name: item.name,
          Email: item.email,
          Phone: item.phone,
          Age: item.age,
          Gender: item.gender,
          Status: item.status,
          "Created At": new Date(item.createdAt).toLocaleDateString("vi-VN"),
        }));
        }

        // Tạo worksheet
        const worksheet = XLSX.utils.json_to_sheet(formattedData);

        // Tạo workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

        // Tạo buffer
        const buffer = XLSX.write(workbook, {
          type: "buffer",
          bookType: "xlsx",
        });

        const filename = `contacts-${Date.now()}.xlsx`;

        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        );

        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${filename}`,
        );

        return res.send(buffer);
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
        const { ids } = req.body;
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
    CountMess: async (req, res) => {
      try {
        const type = req.query.type;
        // console.log('type ',type);
        const task1 = await contactService.countNewNotPartner("partner");
        const task2 = await contactService.countNewNotPartner("customer");

        res.json({ success: true, data: { partner: task2, customer: task1 } });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: "Server error" });
      }
    },
  };
};

module.exports = contactController;
