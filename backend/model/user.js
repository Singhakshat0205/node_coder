
const mongoose= require('mongoose')
const {Schema}= mongoose;


const addressSchema= new Schema({
        street: String,
        suite: String,
        city: String,
        zipcode: String,
    
});

const userSchema= new Schema({
       name: String,
      username: String,
      email: String,
      address:addressSchema,
      phone: String,
      website: String,
})

exports.User= mongoose.model('User', userSchema);

exports.Address= mongoose.model('Address', addressSchema);