var express = require("express");
var router = express.Router();

var campeaoControllers = require("../controllers/campeaoController");

router.get("/:idCampeao", function (req, res) {
    campeaoControllers.buscarCampeaoPorPartida(req, res);
});

router.post("/cadastrar", function (req, res) {
  campeaoControllers.cadastrar(req, res);
})

module.exports = router;
