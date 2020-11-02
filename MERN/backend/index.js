const  mongoose =  require('mongoose'); 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/reactdb",{
	useNewUrlParser:true,
	useUnifiedTopology: true
}).then(() => {
	console.log("Database Connected");
}, err => {
	console.log("Not Connected to Database :"+JSON.stringnify(err,undefined,2));
});

const express=require('express'); 
const bodyparser=require('body-parser');
const cors=require('cors');
var app=express(); 
const studentRoute = require('./Routes/studentRoute.js');
var createError = require('createerror');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true,
}));
app.use(cors()); 
app.use('/students',studentRoute);
 
app.listen(8080,()=>{
    console.log('Server started at 8080');
}); 

// 404 Error
app.use((req, res, next) => {
	next.createError(404);
  });
  
  app.use(function (err, req, res, next) {
	console.err(err.message);
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode).send(err.message);
  });