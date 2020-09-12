const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});


app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2 ;

  var h = Number(req.body.height);
  var w = Number(req.body.weight);
  var bmi = Math.floor(w/(Math.pow(h,2)));
  // if(!result==NaN){
  //     res.send("The sum of two given number is "+result);
  // }
  // if(!bmi==NaN){

    res.send("Your BMI is "+bmi);
  // }

});

app.listen(3000,function(){
  console.log("The server started at port :3000");
});
