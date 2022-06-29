// importando Express
const express = require("express");
// Iniciando express
const app = express();
// indicando que express vai usar JSON
app.use(express.json());
// Definindo porta que a requisição vai ficar ouvindo
const port = 3000;

// acessar a rota http://localhost:3000 e resposta em json
// app.get("/", (request, response) => {
//     return response.json({ mensagem: "Sucesso" });
// });

// ===========Insominia========

const usuarios = [];
app.post("/usuario", (request, response) => {
    const { nome, idade } = request.body;

    const usuario = {
        id: Math.floor(Math.random() * 501),
        nome,
        idade,
    };

    usuarios.push(usuario);
    return response.json(usuarios);
});

app.get("/usuario", (request, response) => {
    return response.json(usuarios);
});

app.put("/usuario/:id", (request, response) => {
    const { id } = request.params;
    const { nome, idade } = request.body;
    const usuario = usuarios.filter((usuario) => usuario.id === Number(id));
    console.log(usuario, id);
    if (!usuario.length) {
        return response
            .status(400)
            .json({ mensagem: "Usuário não encontrado" });
    }
    usuario[0].nome = nome;
    usuario[0].idade = idade;

    return response.json(usuarios);
});

// ouvindo a porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
