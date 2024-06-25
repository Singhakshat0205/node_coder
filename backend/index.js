const express = require("express");

const server = express();
const mongoose= require('mongoose');
const path= require('path');

const {schema}= mongoose;
server.use(express.json());
const productRouter= require('./routes/product')
const userRouter= require('./routes/user');
const { env } = require("process");

server.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
    next();
  }
});


//db connection


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://akshatsingh52002:HKPZqpqpL8BNisy1@cluster0.rmovj9z.mongodb.net/ecommmerceDatabase?retryWrites=true&w=majority&appName=Cluster0');
  
  //  await mongoose.connect('mongodb://127.0.0.1:27017/userData');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//server.use(express.static(process.env.PUBLIC_DIR));

//server.use(express.static(  env + 'build'));

server.use('/products', productRouter.router);

server.use('/users', userRouter.router);

// server.use('*', (req,res)=>{
//   res.sendFile(path.resolve( __dirname,'build','public','index.html'));
// })
// server.use("*", (req,res)=>{
//   res.sendFile(path.resolve(__dirname, './build/index.html'));
// })
// server.use(express.static("public"));

//password                                                          
//mLf25h0UtJGLX7E5



//password2 
//HKPZqpqpL8BNisy1
//user2
//akshatsingh52002

server.listen(3000);
