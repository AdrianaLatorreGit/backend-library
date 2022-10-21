const express = require("express");
const {
    listarUsuarios,
    listarUsuario,
} = require("../controllers/usuarioController");
const router = express.Router();

router.get("/", listarUsuarios);
router.get("/usuario/:id", listarUsuario);

module.exports = router;
