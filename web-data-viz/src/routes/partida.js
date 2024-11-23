var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/exibir", function (req, res) {
    usuarioController.exibir(req, res);
});
module.exports = router;
