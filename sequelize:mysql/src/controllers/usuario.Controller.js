const { request } = require("express");
const Usuario = require("../models/Usuario");

//Homepage
const home = (req, res) => {
    return res.render("index");
};

// forms
const form = (req, res) => {
    return res.render("form");
};

//Cadastrar novo usuário
const cadastrarNovoUsuario = async (req, res) => {
    const image = req.file.filename;
    const { nome, email } = req.body;

    const usuario = {
        nome,
        email,
        image,
    };

    await Usuario.create(usuario);

    return res.redirect("/");
};

//Listar todos os usuários
const listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();

    return res.render("usuarios", { usuarios });
};

//Listar usuário pelo ID
const listarUsuarioID = async (req, res) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return res.render("usuario", {
            erro: "Usuário não encontrado",
            usuario,
        });
    }

    return res.render("usuario", { usuario });
};

module.exports = {
    home,
    form,
    cadastrarNovoUsuario,
    listarUsuarios,
    listarUsuarioID,
};
