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
exports.Base = void 0;
const daoMysql_1 = require("../dao/daoMysql");
class Base {
    constructor() {
        this._id = 0;
    }
    populate(value) {
        Object.assign(this, value);
    }
    findOne(id) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            let obj = yield (0, daoMysql_1.selectOne)(this, id);
            this.populate(obj);
            resolve();
        }));
    }
}
exports.Base = Base;
