const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// Endpoint Read All - [GET] /herois
app.get("/herois", (req, res) => {
    res.send(herois.filter(Boolean));
});

//Endpoint Read by ID - [GET] /herois/:id
app.get("/herois/:id", (req, res) => {
    const id = req.params.id;

    const item = herois[id - 1];

    res.send(item);
});

// Endpoint Create - [POST] /herois
app.post("/herois", (req, res) => {
    // Acessa o nome do herói no corpo da requisição
    const item = req.body.nome;

    //Insere o nome na lista
    herois.push(item);

    res.send("Item inserido com sucesso");
});

// Endpoint Update - [PUT] /herois/:id
app.put("/herois/:id", (req, res) => {
    //Obtemos ID pela rota
    const id = req.params.id;

    //Pegamos o nome que foi enviado para o corpo da requisição
    const item = req.body.nome;

    //Atualizamos a lisra, na posição id - 1, pelo novo item
    herois[item - 1] = item;

    res.send("Item atualizado com sucesso");
});

//Endpoint Delete - [DELETE] /herois/:id
app.delete("/herois/:id", (req, res) => {
    const id = req.params.id;

    delete herois[id - 1];

    res.send("Item removido com sucesso");
});

app.listen(3000, () => {
    console.log("Funcionando 😍");
});
