var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/buscarMedia", function (req, res) {
    usuarioController.buscarMedia(req, res);
});

router.get("/ultimo2Partidas/:id", function (req, res) {
    usuarioController.buscar2UltimasPartidas(req, res)
});
module.exports = router;
