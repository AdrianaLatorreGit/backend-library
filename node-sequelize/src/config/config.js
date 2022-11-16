const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    database: process.env.DATABASE,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
};
