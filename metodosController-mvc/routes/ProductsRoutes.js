// COLOCA NO SISTEMA EXPRESS
const express = require("express");
const ProductsController = require("../controllers/ProductsController");
const router = express.Router();

router.get("/", ProductsController.index);

module.exports = router;
