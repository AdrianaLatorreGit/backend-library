
import { connectOFF, connectON } from "./dao/mysql";
import {Base} from "./model"

class Pessoa extends Base{
    nome_tabela: string = "pessoa";
    nome:string = "";
    idade:number = 0;
    altura:number = 0
}

class Client extends Base{
    nome_tabela: string = "cliente";
    nome:string = "";
    endereco : string = "";
    email= ""
}

(async()=>{
   await connectON({
    host: '127.0.0.1',
    user:'root',
    password:"1234",
    database:"min_orm"
   })
    // let p1 = new Pessoa()
    // await p1.findOne(1)
    // console.log("Meu nome é: ", p1.nome)
    let c1 = new Client()
    await c1.findOne(1)
    console.log(c1)

    await connectOFF()

})();