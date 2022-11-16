const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const port = 3030;

// CRUD
//! C create (post)
//? id, nome , raca, peso
const cachorros = [];

app.post("/cachorros", (request, response) => {
    // request.body;
    const { nome, raca, peso } = request.body;
    const cachorro = {
        id: randomUUID(),
        nome,
        raca,
        peso,
    };

    cachorros.push(cachorro);

    return response.status(201).json(cachorro);
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} 😜`);
});
