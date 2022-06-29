const express = require("express");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Só Sucesso");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🙃`);
});
