
const model= require('../model/user');
const User= model.User;
const Address= model.Address;

  exports.getAllUsers =async (req, res) => {

    const users= await User.find();
    try{
      res.status(200).json(users);
    }
    catch(err){
      res.status(400).json(err);
    }
  };
  
  exports.getUser =async (req, res) => {
    const id = req.params.id;
    try{
      const user=await User.findById(id);
      res.status(200).json(user);
      
    }
    catch(err){
      res.status(400).json(err);
    }
  };
  
  exports.createUser = (req, res) => {
     
     const user= new User();
     user.name=req.body.name;
     user.username=req.body.username
     user.email=req.body.email
     user.address= new Address();
     user.address.suite=req.body.address.suite
     user.address.street=req.body.address.street
     user.address.city=req.body.address.city
     user.address.zipcode=req.body.address.zipcode
     user.phone=req.body.phone
     user.website=req.body.website

     user.save();
     res.status(201).json('user created');


  };
  
  exports.replaceUser =async (req, res) => {
    const id = req.params.id;
    try{
      const user=await User.findOneAndReplace({_id:id},req.body);
      res.status(200).json(user);
      
    }
    catch(err){
      res.status(400).json(err);
    }

  };
  
  exports.updateUser =async (req, res) => {
    const id = req.params.id;
    try{
      const user=await User.findOneAndUpdate({_id:id},req.body, {new:true});
      res.status(200).json(user);
    }
    catch(err){
      res.status(400).json(err);
    }

  };
  
  exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try{
      const user=await User.findOneAndDelete(id);
      res.status(200).json(user);
    }
    catch(err){
      res.status(400).json(err);
    }
    
  };