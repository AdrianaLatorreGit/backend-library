const express = require('express')
const ProductController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/delete/:id',ProductController.deleteView)
router.delete('/delete/:id',ProductController.delete)

router.get('/create',ProductController.createView)
router.post('/create',ProductController.create)

router.put('/edit/:id',ProductController.edit)

router.get('/:slug', ProductController.show)
router.get('/', ProductController.index)

module.exports = router