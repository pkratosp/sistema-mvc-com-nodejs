function home(){}

home.prototype.getLastHome = (callback)=>{
    //vai ler o arquivo json
    var data = [];
    callback(data);
}

module.exports = ()=>{
    return home;
}