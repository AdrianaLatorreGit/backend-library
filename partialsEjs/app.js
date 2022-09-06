const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
});

app.get("/pets", (req, res) => {
    return res.render("about", { h1: "about" });
});

app.get("/dari", (req, res) => {
    return res.render("dari");
});
app.get("/adriana", (req, res) => {
    return res.render("adriana");
});

app.listen(port, () => {
    console.log("rodando! 😍");
});
