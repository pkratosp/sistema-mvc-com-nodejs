var fs = require('fs');

function teste(){}

teste.prototype.getLastTeste = (callback)=>{
    //vai ler o arquivo json
    var data = [];
    callback(data);
}

module.exports = ()=>{
    return teste;
}