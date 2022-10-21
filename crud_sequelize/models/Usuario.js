const { STRING } = require("sequelize");
const { sequelize, DataTypes } = require("../database/connection");

const Usuario = sequelize.define("usuarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poder: {
        type: DataTypes.STRING,
    },
});

module.exports = Usuario;
