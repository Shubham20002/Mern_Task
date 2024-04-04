const express=require('express');
const port=8000;

const app=express();
app.use(express.urlencoded());

app.listen(port,(err)=>{
    if(err){
        console.log('error while server starting');
    }
    else{
        console.log("server start on port no"+port);
    }
});

const arr=[];

app.post('/addnumber',(req,res)=>{
    console.log(req.body.number);
    arr.push(req.body.number);
  res.send(arr);
});

app.get('/arrange',(req,res)=>{
    console.log(req.body.assending);
    if(req.body.assending==="true"){
        arr.sort(function (a, b) { return a - b });
    }
    else{
        arr.sort(function (a, b) { return b -a });
    }
    
    res.send(arr);
});