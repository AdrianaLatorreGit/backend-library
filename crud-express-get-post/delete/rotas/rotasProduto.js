// const { application } = require("express");
// const express = require("express");
// const produtoController = require("../controllers/produtoController");

// let app = express();

// app.get("/", (req, res) => res.send("Olá Mundo!"));
// app.get("/produtos/:id?", (req, res) => {
//     let { id } = req.params;
//     res.send(`Tenho um produto com id ${id}`);
// });

const express = require("express");
const router = express.Router();
const app = express();

router.get("/criar", (req, res) => {
    res.send("Criando um produto");
});
router.get("/deletar", (req, res) => {
    res.send("Deletando um produto");
});

module.exports = router;
