const express = require("express");
const { fetchCategories, createCategory } = require("../controller/Category");
const router = express.Router();

// /categories is included in base path
router.post("/", createCategory).get("/", fetchCategories);

exports.router = router;
