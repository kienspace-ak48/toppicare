const adminRoute = require('./admin.route');
const apiRoute = require('./api.route');
function routes(app){
    app.use('/admin', adminRoute);
    app.use('/api', apiRoute);
}

module.exports = routes;