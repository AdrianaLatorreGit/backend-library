const express = require("express");

const app = express();

app.use(express.json());

const port = 3030;

app.get("/flordodia", (request, response) => {
    return response.json({ mensagem: "Bom dia flor do dia" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
