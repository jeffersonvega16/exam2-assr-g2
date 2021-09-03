const {Router} = require("express");
const router = Router();
const{ getContinente } = require("../controller/continente.controller");
router.get('/',getContinente);
module.exports = router;
