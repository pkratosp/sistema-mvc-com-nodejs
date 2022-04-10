module.exports = (application)=>{
    application.get('/home',(req,res)=>{
        application.src.controllers.home.index(application,req,res)
    })
}