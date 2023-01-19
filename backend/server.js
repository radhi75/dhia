const express = require("express");
const connectDB = require("./config/connectDB");
const clientRoute = require("./routes/client");
const ProductRoute = require("./routes/product");
const app = express();

app.use(express.json());
const port = 5005;
connectDB();
app.use("/api/client",clientRoute);
app.use("/api/product",ProductRoute);
app.listen(port , console.log(`app is running on port ${port}`));