// IMPORTA E USA
const express = require("express");
const ProductsController = require("./controllers/ProductsController");
const router = require("./routes/ProductsRoutes");
const ProductsRouter = require("./routes/ProductsRoutes");
const app = express();

app.use(express.json());

const port = 3000;

router.get("/", ProductsController.index);
router.get("/delete", ProductsController.destroy);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
