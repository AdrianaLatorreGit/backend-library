//Importando Express
const { request } = require("express");
const express = require("express");
//Iniciando Express
const app = express();
//Indicando que express irá usar o formato JSON
app.use(express.json());
//Definindo a porta que a requisição ficará "ouvindo"
const port = process.env.PORT || 3000;

//=========== GRUD ==========
const usuarios = [];
//postando
app.post("/usuario", (req, res) => {
    const { titulo, descricao, tipo } = req.body;

    const usuario = {
        id: Math.floor(Math.random() * 501),
        titulo,
        descricao,
        tipo,
    };
    usuarios.push(usuario);
    return res.json(usuarios);
});

// lendo
app.get("/usuario", (req, res) => {
    return res.json(usuarios);
});

// alterando
app.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, tipo } = req.body;
    const usuario = usuarios.filter((usuario) => usuario.id === Number(id));
    console.log(usuario, id);

    if (!usuario.length) {
        return res.status(400).json({ mensage: "Usuário não encontrado" });
    }
    usuario[0].titulo = titulo;
    usuario[0].descricao = descricao;
    usuario.tipo = tipo;

    return res.json(usuarios);
});

//deletando
app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const indexUsuario = usuarios.findIndex(
        (usuario) => usuario.id === Number(id)
    );
    usuarios.splice(indexUsuario, 1);
    return res.status(204).send();
});

//Ouvindo a porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😃`);
});
