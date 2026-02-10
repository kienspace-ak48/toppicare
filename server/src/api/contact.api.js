const ContactEntity = require("../model/contact.model");
const CNAME = "contact.api.js ";
const contactApi = () => {
  async function verifyCaptcha(token) {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET,
          response: token,
        }),
      },
    );

    const data = await res.json();
    console.log(data);
    return data.success;
  }

  return {
    UserSendEmail: async (req, res) => {
      try {
        const { email, message, name, phone, subject, token } = req.body;
        if (!token)
          return res.status(400).json({ success: false, mess: "no captcha" });
        const flagCheck = await verifyCaptcha(token);
        if (!flagCheck) {
          return res.status(400).json({ success: false, mess: "bot detected" });
        }
        if (!email || !message)
          return res.status(400).json({ success: false, mess: "thieu input" });
        if (message.length > 50)
          return res
            .status(400)
            .json({ success: false, mess: "noi dung qua ngan" });
        console.log(email, message, name, phone, subject, token);
        const cDTO = { email, message, name, phone, subject };
        const task1 = await ContactEntity.create(cDTO);
        console.log(typeof task1);
        console.log(task1);
        return res.json({ success: true, data: "ok" });
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({ success: false, mess: "Server error" });
      }
    },
  };
};

module.exports = contactApi;
