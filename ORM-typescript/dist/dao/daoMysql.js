"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectOne = void 0;
const mysql_1 = require("./mysql");
function selectOne(classe, id) {
    return new Promise((resolve) => {
        mysql_1._Pool.getConnection((err, conexao) => {
            if (err) {
                // resolve()
            }
            else {
                conexao.query(`SELECT * FROM ${classe.nome_tabela} WHERE _id = ${id}`, function (err, result) {
                    if (err) {
                        // resolve()
                    }
                    else {
                        resolve(result[0]);
                    }
                });
            }
        });
    });
}
exports.selectOne = selectOne;
