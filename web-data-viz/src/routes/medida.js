var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/medidaController");

router.get("/ultimos/:id", function (req, res) {
    dadosController.buscarUltimasMedidas(req, res);
});

module.exports = router;
