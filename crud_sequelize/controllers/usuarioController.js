const Usuario = require("../models/Usuario");

const listarUsuarios = async (request, response) => {
    const usuarios = await Usuario.findAll();
    console.log(usuarios);

    return response.render("index", { usuarios });
};

const listarUsuario = async (request, response) => {
    const { id } = await request.params;
    const usuario = await Usuario.findByPk(id);

    return response.render("usuario", { usuario });
};

module.exports = {
    listarUsuarios,
    listarUsuario,
};
