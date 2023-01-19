const express = require("express");
const { Register, login, Deluser, EditUser } = require("../controlls/client");
const {isAuth} =require("../midllewear/isAuth")
const {registerValidator, validation,loginValidator}=require("../midllewear/validation")
const clientRoute = express.Router();

clientRoute.post("/register", registerValidator, validation, Register);
clientRoute.post("/login", loginValidator, validation, login);
clientRoute.get("/current", isAuth, (req, res) => {
  res.send({ client: req.user });
});
clientRoute.delete("/delclient/:id", Deluser);
clientRoute.put("/edit/:id", EditUser);
module.exports = clientRoute;