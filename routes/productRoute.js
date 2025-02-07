const express = require("express");
const Product = require("../module/product.module.js");
const { getProducts, getProductById, findByIdAndUpdate, Create, findByIdAndDelete } = require("../controller/productController.js");
const router = express.Router();


router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", findByIdAndUpdate);
router.post("/", Create);
router.delete("/:id", findByIdAndDelete);


module.exports = router;