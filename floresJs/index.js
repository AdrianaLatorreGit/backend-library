const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

const flores = [];

app.post("/flores", (request, response) => {
    const { nome, cor } = request.body;

    const flor = {
        id: Math.floor(Math.random() * 501),
        nome,
        cor,
    };
    flores.push(flor);

    return response.status(201).json(flor);
});

app.get("/flores", (request, response) => {
    return response.json(flores);
});

app.put("/flores/:id", (request, response) => {
    const { id } = request.params;
    const { nome, cor } = request.body;
    const flor = flores.find((flor) => flor.id === Number(id));

    if (!flor) {
        return response.status(400).json({ mensagem: "Flor não encontrada" });
    }

    flor.nome = nome;
    flor.cor = cor;

    return response.json(flor);
});

app.delete("/flores/:id", (request, response) => {
    const { id } = request.params;
    const indexFlor = flores.findIndex((flor) => flor.id === Number(id));
    flores.splice(indexFlor, 1);
    return response.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
