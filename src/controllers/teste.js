module.exports.index = function(application, req,res){
    var newsModel = new application.src.models.teste();

    newsModel.getLastTeste(function(err,result){
        res.render("teste/index", {news : result});
    })
}
