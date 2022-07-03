const express = require("express");
const {
    home,
    form,
    cadastrarNovoUsuario,
    listarUsuarios,
    listarUsuarioID,
} = require("../controllers/usuario.Controller");
const upload = require("../middlewares/upload");
const router = express.Router();

router.get("/", home);
router.get("/usuario/cadastro", form);
router.post("/usuario", upload.single("image"), cadastrarNovoUsuario);
router.get("/usuarios", listarUsuarios);
router.get("/usuario/:id", listarUsuarioID);

module.exports = router;
