const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
dotenv.config();

const usuariosRoutes = require("./routes/usuariosRoutes");
const Usuario = require("./models/Usuario");
const sequelize = require("./config/database/db");

const port = process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usuariosRoutes);

async function main() {
    try {
        await sequelize.authenticate();
        // await Usuario.sync({ force: true });

        console.log("Conexão com sucesso 😙");

        app.listen(port, () => {
            console.log(`Porta rodando 😀`);
        });
    } catch (err) {
        console.error("Errou!", err);
    }
}

main();
