module.exports = (application)=>{
    application.get('/', (req,res)=>{
        application.src.controllers.news.index(application, req, res);
    });
}