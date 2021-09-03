const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    //Con variables de entorno
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'covid19'
});

dbConnection.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = dbConnection;