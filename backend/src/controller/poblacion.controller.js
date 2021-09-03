//const connect = dbConnection();
const { dbConnection } = require('../config/database');
let getPoblacion = async(req,res)=>{
    await connection.query("select pais.nombre, idPoblacion, TotalCases  from poblacion inner join pais  on poblacion.idPoblacion= pais.continente_idcontinente order by TotalCases desc limit 5",(err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });

}
module.exports ={
    getPoblacion
}