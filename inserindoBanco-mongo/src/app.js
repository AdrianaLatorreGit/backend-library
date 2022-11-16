import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const port = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);

app.set("view engine", "ejs");
app.set("views", path.join(__filename, "../views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const databaseName = "inserindoBanco";

async function main() {
    //Conexão com Mongo atlas
    await client.connect();
    console.log(`Estamos conectados 😍`);
    const db = client.db(databaseName);

    app.get("/", async (req, res) => {
        const query = {};
        const sort = { nome: 1 };
        const colecao = await db.collection("usuario");
        const usuarios = await colecao.find(query).sort(sort).toArray();

        return res.render("index", { usuarios });
    });

    app.post("/", async (req, res) => {
        const { nome } = req.body;

        const usuario = await db.collection("usuario").insertOne({ nome });

        return res.redirect("/");
    });

    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
}

main();
