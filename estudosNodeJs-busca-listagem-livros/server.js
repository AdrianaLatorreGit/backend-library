const express = require("express");
const { request } = require("https");
const path = require("path");
const livros = require("./data/produtos.json");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// SETAR EJS
app.set("view engine", "ejs");

// PASTAS PUBLICAS, ARQUIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "public")));

// SETAR BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("index", { title: "Homepage" });
});

// LISTAR LIVROS
app.get("/livros", (req, res) => {
    return res.render("livros", { livros, title: "Livros" });
});

// DESCRICAO DE UM LIVRO
app.get("/livros/descricao/:id", (req, res) => {
    const { id } = req.params;

    return res.render("descricao", {
        livro: livros[id - 1],
        title: "Descrição",
    });
});

// BUSCAR LIVRO
app.post("/", (req, res) => {
    const { buscar } = req.body;

    const livrosFiltrados = livros.filter((livro) =>
        livro.titulo.includes(buscar)
    );

    if (livrosFiltrados.length === 0) {
        return res.render("buscarLivro", { livros: null, title: "Filtro" });
    }

    return res.render("buscarLivro", {
        livros: livrosFiltrados,
        title: "Filtro",
    });
});

app.listen(port, () => {
    console.log("Rodou! 🤣");
});
