const jwt= require("jsonwebtoken");
const contactService = require("../services/contact.service");
const userModel = require("../model/user.model");

const CNAME = 'auth.middleware.js ';


async function auth(req, res, next){
    // const count = await contactService.countNewNotPartner();
    // res.locals.count = count;
    res.locals.user = {email: "admin@gmail.com",username: "kien_vu", name:"KienVu"};
    return next();
    const token = req.cookies.token ||(req.headers.authorization && req.headers.authorization.split(' ')[1]);
    // console.log('nho comment doan nay di khi deploy');
    // console.log('token ',token)
    // next();

    if(!token){
        return res.redirect('/auth/admin/login')
        // return res.status(401).json({success: false, data: 'chua dang nhap'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const getInfoLogin =await userModel.findById(decoded.id).select("_id name username email role").lean();
        req.user = getInfoLogin;
         // 👇 cho EJS dùng global
        res.locals.user = getInfoLogin;

        next();
    } catch (error) {
        console.log(CNAME, error.message);
        // return res.status(401).json({success: false, data: 'Token loi'});
        return res.redirect('/auth/admin/login', {layout: false, mess: 'token is expired'})

    }
}

module.exports = auth;