"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectOFF = exports.connectON = exports._Pool = void 0;
const mysql_1 = require("mysql");
function connectON(config) {
    return new Promise((resolve) => {
        exports._Pool = (0, mysql_1.createPool)({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
        exports._Pool.getConnection((err, conexao) => {
            if (err) {
                console.log('Conexão falhou');
                resolve(false);
            }
            else {
                console.log('Conexão realizada com sucesso');
                resolve(true);
            }
        });
    });
}
exports.connectON = connectON;
function connectOFF() {
    return new Promise((resolve) => {
        if (exports._Pool) {
            console.log('Conexão encerrada');
            exports._Pool.end();
        }
        resolve(true);
    });
}
exports.connectOFF = connectOFF;
