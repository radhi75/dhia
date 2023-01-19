const mongoose = require("mongoose");

const connectDB= async()=>{
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb+srv://dhiya:dhiya123@cluster0.f96au3q.mongodb.net/?retryWrites=true&w=majority");
        console.log("db is connecting");
    } catch (error) {
        console.log("db is not connecting");
    }
}
module.exports=connectDB;