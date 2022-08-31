const produtoController = {
    criarProduto: (req, res) => {
        res.send("criando um produto");
    },
    deletarProduto: (req, res) => {
        const { id } = req.params;
        res.send(`Deletando o produto com id ${id}`);
    },
};

module.exports = produtoController;
