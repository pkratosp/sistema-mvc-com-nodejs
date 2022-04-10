//responsável pela leitura, escrita e validação dos dados. Nesta camada são implementadas as regras de negócio
var fs = require('fs');

function home(){}

home.prototype.getLastHome = (callback)=>{
    //vai ler o arquivo json
    fs.readFile('./data/infoClientes.json','utf8', (err,result)=>{

        var data = [];
        
        if(!err){
            var obj = JSON.parse(result);
            console.log(obj)
                if(obj.infoClientes.length > 3){
                    var i = 4;
                }else{
                    var i = (obj.infoClientes.length - 1);
                }

            obj.infoClientes.forEach((infoClientes)=>{
                if(i >= 0){
                    data[i] = infoClientes;
                    i--;
                }
            });

        }

        callback(err,data);

    })
}

module.exports = ()=>{
    return home;
}