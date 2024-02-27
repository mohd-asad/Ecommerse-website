const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Products");
const productRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const cors = require("cors");

//middleware
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json()); //to parse req.body
server.use("/products", productRouter.router);
server.use("/brands", brandsRouter.router);
server.use("/categories", categoriesRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommercedb");
  console.log("Database Connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("server started on port 8080");
});
