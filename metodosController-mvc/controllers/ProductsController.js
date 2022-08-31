// METODOS

const ProductsController = {
    index: (request, response) => {
        return response.json({ mensagem: "Listando Produtos" });
    },
    destroy: (request, response) => {
        return response.json({ mensagem: "Deletando Produtos" });
    },
};

module.exports = ProductsController;
