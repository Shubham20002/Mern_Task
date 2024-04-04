const express=require('express');
const port=8000;
var cors = require('cors');
const app=express();
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.listen(port,(err)=>{
    if(err){
        console.log('error while server starting');
    }
    else{
        console.log("server start on port no"+port);
    }
});

var arr=[];

app.post('/addnumber',(req,res)=>{
    console.log(req.body);
    arr.push(req.body.number);
  res.send(arr);
});

app.post('/arrange',(req,res)=>{
    console.log(req.body);
    if(req.body.assending===true){
        console.log("true");
        arr.sort(function (a, b) { return a - b });
    }
    else{
        arr.sort(function (a, b) { return b -a });
    }
    
    res.send(arr);
});

app.get('/restart',(req,res)=>{
   arr=[];
   res.send(arr);
});

app.get('/getarray',(req,res)=>{
    res.send(arr);
})
