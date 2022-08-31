const express = require('express')
const ProductController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/', ProductController.index)
router.get('/:slug', ProductController.show)

module.exports = router