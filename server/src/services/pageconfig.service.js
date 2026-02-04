const CNAME ="pageconfig.service.js "; 
const PageConfigEntity = require('../model/pageConfig.model');


class PageConfigService {
    constructor(parameters) {
        console.log('initial '+CNAME);
    }
    async add(data){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        news: data
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
        } catch (error) {
            console.log(CNAME, error);
        }
    }
    async get(){}
    async getById(){}
    async getBySlug(){}
    async delete(){}
    async getPageConfig(){
        try {
            const pc = await PageConfigEntity.findOne({}).lean();
            return {success: true, data: pc}
        } catch (error) {
            console.log(CNAME, error.message);
            return {success: false, mess: error.message}
        }
    }
    async getNewsSection(){
        try {
            const data = await PageConfigEntity.findOne();
            return {success: true, data};
        } catch (error) {
            console.log(CNAME, error.message)
            return {success: false, mess: error.message}
        }
    }
    async updateNewsSection(newsData){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        news: newsData
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
            return {success: true, data: result};
        } catch (error) {
            console.log(CNAME, error);
            return {success: false, mess: error.message}
        }
    }
    async updateAboutSection(aboutData){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        about: aboutData
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
            return {success: true, data: result};
        } catch (error) {
            console.log(CNAME, error);
            return {success: false, mess: error.message}
        }
    }
    async updateServiceSection(serviceData){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        service: serviceData
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
            return {success: true, data: result};
        } catch (error) {
            console.log(CNAME, error);
            return {success: false, mess: error.message}
        }
    }
    async updateTrainingSection(traniningData){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        news: traniningData
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
            return {success: true, data: result};
        } catch (error) {
            console.log(CNAME, error);
            return {success: false, mess: error.message}
        }
    }
    async updateContactSection(newsData){
        try {
            const result = await PageConfigEntity.findOneAndUpdate(
                {},
                {
                    $set: {
                        news: newsData
                    }
                },
                {
                    new: true, // tra ve document moi tao
                    upsert: true// chua co thi tao moi
                }
            )
            return {success: true, data: result};
        } catch (error) {
            console.log(CNAME, error);
            return {success: false, mess: error.message}
        }
    }

}

module.exports = new PageConfigService();