const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const port = 3000;

//Armazenando o banco de dados(usuários)
const usuarios = [];

/* 
criando o CRUD
C (create) = POST
R (read) = GET
U (update) = PUT
D (delete) = DELETE
/ */

app.post("/usuarios", (req, res) => {
    //Adriana cliente fazendo requisição
    const { nome, sobrenome, email } = req.body;
    const usuario = {
        id: randomUUID(),
        nome,
        sobrenome,
        email,
    };

    usuarios.push(usuario);

    //Adriana servidor respondendo

    return res.status(201).json(usuario);
});

app.get("/usuarios", (req, res) => {
    return res.json(usuarios);
});

//http://localhost:3000/rota ou recursos/:parametros
app.put("/usuarios/:id", (req, res) => {
    const { nome, sobrenome, email } = req.body;
    const { id } = req.params;

    const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id);
    usuarios[indexUsuario] = { id, nome, sobrenome, email };
    return res.json(usuarios[indexUsuario]);
});

app.listen(port, () => {
    console.log("Servidor rodando aqui 😃");
});
