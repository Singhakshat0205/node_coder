
const mongoose= require('mongoose');

const model= require('../model/product');
const Product= model.Product;

  exports.getAllProducts = async (req, res) => {

    const products=await Product.find();

    res.json(products);
  };
  
  exports.getProduct =async (req, res) => {
    const id = req.params.id;
    const product=await Product.findById(id);

      res.json(product);
  };
  
  exports.createProduct = (req, res) => {
       const product= new Product();
       product.title= req.body.title;
       product.price= req.body.price;
       product.description= req.body.description;
       product.image= req.body.image;
       product.category= req.body.category;
       product.save();

       res.status(201).json({
        msg:"prouct added successfully"
       })
  };
  
  exports.replaceProduct = async(req, res) => {
    const id = req.params.id; 
    
    const doc=await Product.findOneAndReplace({_id:id}, req.body )
  
    res.status(201).json(doc);
  };
  
  exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    
    try{
      const doc= await Product.findOneAndUpdate({_id:id},req.body, {new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
    
  };
  
  exports.deleteProduct =async (req, res) => {
    const id = req.params.id;
   
    try{
      const doc= await Product.findByIdAndDelete(id);
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  
  
  };