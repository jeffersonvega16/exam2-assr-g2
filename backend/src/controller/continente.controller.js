//const connect = dbConnection();
const { dbConnection } = require('../config/database');
let getContinente = async(req,res)=>{
    await connection.query("query 1********",(err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });

}
module.exports ={
    getContinente
}