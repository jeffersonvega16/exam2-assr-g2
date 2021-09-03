const {Router} = require("express");
const router = Router();
const{ getPais } = require("../controller/pais.controller");
router.get('/',getPais);
module.exports = router