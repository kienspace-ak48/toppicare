const warrantyService = require("../services/warranty.service");

module.exports = () => ({
  Lookup: async (req, res) => {
    try {
      const result = await warrantyService.publicLookup(req.body.serialNumber, req.body.phone);
      if (!result.ok) {
        return res.json({ success: false, mess: result.message });
      }
      return res.json({ success: true, data: result.data });
    } catch (e) {
      console.error("warranty.api Lookup", e.message);
      return res.status(500).json({ success: false, mess: "Đã xảy ra lỗi. Vui lòng thử lại sau." });
    }
  },
});
