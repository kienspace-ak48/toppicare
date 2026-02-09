const CNAME ="contact.api.js ";
const contactApi = ()=>{
    return {
        UserSendEmail: (req, res)=>{
            try {
                const {email, message, name, phone, subject} = req.body;
                console.log(email, message, name, phone, subject);
                // const contact = await 
                return res.json({success: true})
            } catch (error) {
                console.log(CNAME, error.message);
                return res.status(500).json({success: false, mess: 'Server error'})
            }
        }
    }
}

module.exports = contactApi;