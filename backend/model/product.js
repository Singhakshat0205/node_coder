
const mongoose= require('mongoose');
const {Schema}= mongoose;


const productSchema = new Schema({
    title: String,
    price: {type:Number, required:false , min:[0, 'wrong price']},
    description: String,
    category: String,
    image: String,
   
      
  });

exports.Product=mongoose.model('Product', productSchema)

