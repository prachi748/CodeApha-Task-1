const express = require("express");
const router = express.Router();
const product = require("../controllers/productController");

router.post("/add", product.addProduct);
router.get("/", product.getProducts);

module.exports = router;