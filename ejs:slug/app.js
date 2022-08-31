const express = require('express')
const ProductsRoutes = require('./routes/ProductsRoutes')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/products', ProductsRoutes)

app.get('/', (req, res) => {
    res.send('ola mundo')
})

app.listen(3030, () => {
    console.log("Servidor rodando...")
})




