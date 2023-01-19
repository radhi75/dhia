const express = require("express");
const {
  Addproduct,
  Getproducts,
  Delproduct,
  Editproduct,
  GetOneProduct,
} = require("../controlls/product");

const ProductRoute = express.Router();

ProductRoute.post("/addproduct", Addproduct);
ProductRoute.get("/getproduct", Getproducts);
ProductRoute.delete("/delproduct/:id", Delproduct);
ProductRoute.put("/editproduct/:id", Editproduct);
ProductRoute.get("/getOneproduct/:id", GetOneProduct);

module.exports = ProductRoute;