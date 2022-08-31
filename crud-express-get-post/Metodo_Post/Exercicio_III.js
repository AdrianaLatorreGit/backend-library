const express = require('express');
const router = express.Router();

const app = express()
app.use(express.json());

let produto = {
    nome: null,
    preco: null,
    descricao: "Essa descrição é essa mesmo"
};

router.post('/criar/produto', (req, res) => {
    // produto = {
    //     ...produto,
    //     nome: req.body.nome,
    //     preco: req.body.preco
    // }

    produto.nome = req.body.nome
    produto.preco = req.body.preco
    
    res.send(produto)
})

app.use('/', router)

app.listen(3000, () => {
    console.log("Servidor rodando...")
})