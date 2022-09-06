const express = require("express");

const app = express();

const port = process.env.PORT || 3030;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/adriana", (req, res) => {
    const usuarios = [
        {
            id: 1,
            nome: "Adriana",
            pets: [
                {
                    id: 1,
                    nome: "Frida",
                    brinquedos: ["bolinha", "ossinho"],
                },
                {
                    id: 2,
                    nome: "Margareth",
                    brinquedos: ["lixo", "cadarço"],
                },
            ],
        },
        {
            id: 2,
            nome: "Dari",
            pets: [
                {
                    id: 1,
                    nome: "Renzo",
                    brinquedos: ["bolinha", "gatinha", "ossinho"],
                },
            ],
        },
    ];
    res.render("adriana", { usuarios });
});

app.get("/dari", (req, res) => {
    res.render("dari");
});

app.listen(port, () => {
    console.log("porta funcionando 😁");
});
