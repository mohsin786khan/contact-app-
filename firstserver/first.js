const http=require('http');
const port=8000;
const fs=require('fs');

function requesthandler(req,res){
  //  console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});


    let filepath;
    switch(req.url){
       case '/':
           filepath='./first.html'
           break;
           case '/profile':
               filepath='./profile.html'
               break;
               default:
                   filepath='./404.html' 
    }

    fs.readFile(filepath,function(err,data){
        if(err){
    console.log('error',err);
    return res.end('<h1>EORROR!</h1>');
        }
        
       return res.end(data);
    });



  // fs.readFile('./first.html',function(err,data){
    //   if(err){
      //     console.log('error',err);
        //   return res.end('<h1>error!</h>');
       //}

      // return res.end(data);
   //});
   
}

const server=http.createServer(requesthandler);

server.listen(port,function(err){
if(err)
{
    console.log('err');
    return;
}

console.log("server is set up running very fast",port);
});