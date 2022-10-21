const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");
const { sequelize } = require("./database/connection");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/", usuarioRoutes);

// Testar conexão banco dados
sequelize.authenticate();
try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} 😆`);
});
