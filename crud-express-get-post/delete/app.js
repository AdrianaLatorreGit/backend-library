const express = require("express");
const { append } = require("express/lib/response");
const app = express();
const port = 3000;
const rotasProdutos = require("./rotas/rotasProduto");

app.use("/produtos", rotasProdutos);

app.listen(port, () =>{
    console.log(`Servidor rodando 😃`)
})
