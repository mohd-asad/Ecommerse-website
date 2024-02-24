const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brands");
const router = express.Router();

// /brands is included in base path
router.post("/", createBrand).get("/", fetchBrands);

exports.router = router;
