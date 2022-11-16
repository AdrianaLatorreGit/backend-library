const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

const myPool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "aulas",
});

app.get("/", (request, response) => {
    myPool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("SELECT * FROM alunos", (err, alunos) => {
            connection.release(); // Devolve minha conexão para a pool

            if (err) throw err;

            return response.render("index", { alunos });
        });
    });
});

app.post("/", (request, response) => {
    myPool.getConnection((err, connection) => {
        if (err) throw err;

        console.log(`Estamos conectados! 😎`);

        const body = request.body;

        connection.query("INSERT INTO alunos SET ?", body, (err, users) => {
            connection.release(); // Devolve a minha conexão para a pool.

            if (err) throw err;

            return response.status(201).send();
        });
    });
});

app.listen(port, () => {
    console.log("Está rodando 🤣");
});
