const products = require("../database/products.json")

const ProductController = {
    index: (req, res) => {
        return res.render('products', {products, title: "Listagem de produtos"})
    },

    show: (req, res) => {
        const {slug} = req.params

        const product = products.find(product => product.slug === slug)

        if(product){

            // LÓGICA OLHANDO ID DE PRODUTOS RELACIONADOS
            const relationedProductsFull = product.relationedProducts.reduce((prev, curr) => {
                const relationedProduct = products.find(product => product.id === curr)
                
                if (relationedProduct){
                    prev.push(relationedProduct)
                }

                return prev
            }, [])

            //Lógica olhando por marca
            // const relationedProductsFull = products.reduce((prev, curr) => {
            //     const isRelationedProduct = curr.id !== product.id && curr.brand === product.brand
                
            //     if (isRelationedProduct){
            //         prev.push(curr)
            //     }

            //     return prev
            // }, [])

            product.relationedProductsFull = relationedProductsFull

            return res.render('product', product)
        }
        else {
            res.status(404).send()
        }
        
    }
}

module.exports = ProductController