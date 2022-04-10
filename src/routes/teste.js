module.exports = (application)=>{
    application.get('/teste', (req,res)=>{
        application.src.controllers.teste.index(application, req, res);
    });
}