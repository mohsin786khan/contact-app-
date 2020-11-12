const express=require('express');
const port=7000;
const app=express();


app.get('/profile',function(req,res){
res.send('it is running');
});


app.listen(port,function(err){
if(err){
    console.log('error in running up server',err);
    return ;
}

console.log('express is running on port',port);
});