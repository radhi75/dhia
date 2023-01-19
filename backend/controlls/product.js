const product = require("../models/product");

 exports.Addproduct = async(req,res)=>{
    try {
        const prod = new product(req.body);
        await prod.save();
        res.status(200).send({msg:"product added",prod});
    } catch (error) {
        res.status(500).send("couldn't added product");
    };
 };

 exports.Getproducts = async(req,res)=>{
    try {
        const prod = await product.find();
        res.status(200).send({msg:"list of product",prod});
    } catch (error) {
        res.status(500).send("couldn't get product");
    };
 };

 exports.Delproduct = async(req,res)=>{
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).send({msg:"deleted product"});
    } catch (error) {
        res.status(500).send("couldn't delete product");
    };
 };

 exports.Editproduct = async(req , res)=>{
    try {
        const prod = await product.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true});
        res.status(200).send({msg:"updated product" ,prod});
    } catch (error) {
        res.status(500).send("couldn't update product");
    };
 };

 exports.GetOneProduct = async(req,res)=>{
    try {
        const prod = await product.findById(req.params.id);
        res.status(200).send({ msg: "my product", prod });
    } catch (error) {
        res.status(500).send("couldn't get my product");
    };
 };