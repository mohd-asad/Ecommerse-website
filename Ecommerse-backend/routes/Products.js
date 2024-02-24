const express = require("express");
const { createProduct, FetchAllProducts } = require("../controller/Products");
const router = express.Router();

router.post("/", createProduct).get("/", FetchAllProducts);

exports.router = router;
