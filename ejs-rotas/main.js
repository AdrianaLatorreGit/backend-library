const express = require("express");
const path = require("path");
const produtos = require("../ejs/data/produtos.json");
console.log(produtos);
const app = express();

app.use(express.json());

// pra entender independentemente do sistema operacional
app.use(express.static(path.join(__dirname, "public")));  

// console.log(path.join(__dirname, "public"));

app.set("view engine", "ejs");

const port = 3000;

// const produtos = [];

app.get("/", (req, res) => {
    return res.render("index", { h1: "home" });
});
app.get("/about", (req, res) => {
    return res.render("about", { h1: "about" });
});
app.get("/produtos", (req, res) => {
    return res.render("produtos", { h1: "produtos", produtos });
});

app.post("/criar/produtos", (req, res) => {
    const { nome, marca, preco } = req.body;
    const produto = {
        nome,
        marca,
        preco,
    };
    produtos.push(produto);

    return res.json(produto);
});

app.listen(port, () => {
    console.log("rodando e cantando");
});
