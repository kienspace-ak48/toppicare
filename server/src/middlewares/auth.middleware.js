const jwt= require("jsonwebtoken");

const CNAME = 'auth.middleware.js ';


function auth(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({success: false, data: 'chua dang nhap'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(CNAME, error.message);
        return res.status(401).json({success: false, data: 'Token loi'});
    }
}

module.exports = auth;