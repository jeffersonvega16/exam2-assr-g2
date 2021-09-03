const {Router} = require("express");
const router = Router();
const{ getPoblacion } = require("../controller/poblacion.controller");
router.get('/',getPoblacion);
module.exports = router