var express = require("express");
var router = express.Router();

var campeaoController = require("../controllers/campeaoController");
// var partidaController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    campeaoController.cadastrar(req, res);
});

module.exports = router;
