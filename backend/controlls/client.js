const client = require("../models/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await client.findOne({ email });
    if (found) {
      res
        .status(400)
        .send({ erros: [{ msg: "client already have a account" }] });
    } else {
      const clients = new client(req.body);
      const salt = 10;
      const hashPassWord = bcrypt.hashSync(password, salt);
      clients.password = hashPassWord;
      const payload = { id: clients._id };
      const token = jwt.sign(payload, "hello");
      await clients.save();
      res.status(200).send({ msg: "client added", clients, token });
    }
  } catch (error) {
    res.status(500).send({ msg: "could not added client" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const clients = await client.findOne({ email });
    if (!clients) {
      return res.status(400).send({ erros: [{ msg: "client not found" }] });
    } else {
      const match = await bcrypt.compare(password, clients.password);
      if (!match) {
        return res.status(400).send({ erros: [{ msg: "client not found" }] });
      } else {
        const payload = { id: clients._id };
        const token = jwt.sign(payload, "hello");
        res.status(200).send({ msg: "login", clients, token });
      }
    }
  } catch (error) {
    res.status(500).send({ erros: [{ msg: "could not login" }] });
  }
};

exports.Deluser = async (req, res) => {
  try {
    await client.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted client" });
  } catch (error) {
    res.status(500).send("couldn't delete client");
  }
};

exports.EditUser = async (req, res) => {
  try {
    const clients = await client.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated client", clients });
  } catch (error) {
    res.status(500).send("couldn't update client");
  }
};
