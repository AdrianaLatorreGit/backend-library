const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

const myPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// Cadastrar novo usuário
app.post("/usuario", (request, response) => {
    myPool.getConnection((err, connection) => {
        if (err) throw err;

        console.log("Conectado 😉");

        const body = request.body;

        connection.query("INSERT INTO usuario SET ?", body, (err, usuario) => {
            connection.release(); //  Devolve a conexão para a pool
            if (err) throw err;

            return response.status(201).json({ message: "Usuário cadastrado" });
        });
    });
});

// Listar todos os usuários
app.get("/usuarios", (request, response) => {
    myPool.getConnection((err, connection) => {
        if (err) throw err;

        console.log("Conectado 😉");

        connection.query("SELECT * FROM usuario", (err, usuarios) => {
            connection.release(); //  Devolve a conexão para a pool
            if (err) throw err;

            return response.render("usuarios", { usuarios });
        });
    });
});

app.get("/", (request, response) => {
    return response.render("index");
});

// Listar um usuario específico
app.get("/usuario/:id", (request, response) => {
    myPool.getConnection((err, connection) => {
        if (err) throw err;

        console.log("Conectado 😉");

        const { id } = request.params;

        connection.query(
            "SELECT * FROM usuario WHERE id = ?",
            id,
            (err, usuario) => {
                connection.release(); //  Devolve a conexão para a pool
                if (err) throw err;
                return response.render("usuario", { usuario: usuario[0] });
            }
        );
    });
});

app.listen(port, () => {
    console.log("Servidor rodando 🤣");
});
