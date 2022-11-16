const express = require("express");
const { send } = require("express/lib/response");

const app = express();
// para express entender que será usado formato JSON
app.use(express.json());

const port = 3333;

// http://sitedaadriana/produtos(rota)/1(parametro)/descricao(rota)?page=2(query)
// query para fazer paginação, filtro

// ======CRUDE==========
// * Create - POST (quando quer criar algo)
// ? READ - GET (quando quer listar algo)
// + Update - PUT (alterar informações)
// ! Delete - DELETE (para deletar)

// Simular um BANCO DE DADOS

const superHerois = [];

// Criando um Super Herói

app.post("/superherois", (request, response) => {
    const { nome, identidade } = request.body;
    // console.log(nome);
    // console.log(identidade);
    // para armazenar no array
    const superHeroi = {
        // Match.floor para arrendondar até numero inteiro mais próximo
        // Match.random cria um numeto aleatório entre 0 e 1, com a multiplicação ele vai até o numero indicado
        id: Math.floor(Math.random() * 501),
        nome,
        identidade,
    };
    superHerois.push(superHeroi);

    // Para indicar a resposta e parar a requisição
    // código 201 indica que foi criado com sucesso
    return response.status(201).json(superHeroi);
});

// Para listar a resposta do super Herois --GET

app.get("/superherois", (request, response) => {
    return response.json(superHerois);
});

// app.get("/", (request, response) => {
//     return response.json({ mensagem: "Olá para todos" });
// });

// Fazer alteração de um super herói específico
app.put("/superherois/:id", (request, response) => {
    const { id } = request.params;
    const { nome, identidade } = request.body;
    const superHeroi = superHerois.find(
        (superHeroi) => superHeroi.id === Number(id)
    );

    if (!superHeroi) {
        return response
            .status(400)
            .json({ mensagem: "Super Herói não encontrado" });
    }

    superHeroi.nome = nome;
    superHeroi.identidade = identidade;

    return response.json(superHeroi);
});

// Deletar super herói

app.delete("/superherois/:id", (request, response) => {
    const { id } = request.params;
    const indexSuperHeroi = superHerois.findIndex(
        (superHeroi) => superHeroi.id === Number(id)
    );
    // Ainda sem validação para que eu não exploda
    superHerois.splice(indexSuperHeroi, 1);
    return response.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
