const Router = require("express");
const router = new Router();
const dataController = require("../controller/data.controller");

router.get("/sale", dataController.getData);
router.get("/sale/pages", dataController.getPages);

module.exports = router;
