const express=require("express");
const app=express();
app.get('/',function(req,resp)
{
   resp.send("Hello World");
 
});
app.listen(8081,function(){
    console.log("server running on 8081")
});