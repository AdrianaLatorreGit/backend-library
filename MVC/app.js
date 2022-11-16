const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const port = process.env.PORT || 3333;

app.get("/", (request, response) => {
    return response.render("index");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🙃`);
});
