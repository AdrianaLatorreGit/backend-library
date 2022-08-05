const { Sequelize } = require("sequelize");

// Primeiro parimetro é o nome do banco, segundo username, terceiro senha do mysql
const sequelize = new Sequelize("usuarios", "root", "***", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
