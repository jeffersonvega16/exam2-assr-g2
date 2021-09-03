//const connect = dbConnection();
const { dbConnection } = require('../config/database');
let getPais = async(req,res)=>{
    await connection.query("query 2********",(err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });

}
module.exports ={
    getPais
}