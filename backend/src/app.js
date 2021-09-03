const express = require('express');
const app = express();
const cors = require('cors');
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.set('port', process.env.PORT | 8080);
app.get('/',(req,res) =>{
 res.send("Bienvenido a mi APi");
});
app.use("/api/continente",require('./routes/continente'));
app.use("api/pais",require('./routes/pais'));
app.use("api/poblacion",require('./routes/poblacion'));
app.listen(app.get('port'), () =>{
 console.log('server on port ', app.get('port'));
});
