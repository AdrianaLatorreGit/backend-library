"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("./dao/mysql");
const model_1 = require("./model");
class Pessoa extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = "pessoa";
        this.nome = "";
        this.idade = 0;
        this.altura = 0;
    }
}
class Client extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = "cliente";
        this.nome = "";
        this.endereco = "";
        this.email = "";
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_1.connectON)({
        host: '127.0.0.1',
        user: 'root',
        password: "1234",
        database: "min_orm"
    });
    // let p1 = new Pessoa()
    // await p1.findOne(1)
    // console.log("Meu nome é: ", p1.nome)
    let c1 = new Client();
    yield c1.findOne(1);
    console.log(c1);
    yield (0, mysql_1.connectOFF)();
}))();
