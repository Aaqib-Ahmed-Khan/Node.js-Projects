// console.log("hello to backend");
import express from "express";
const app=express();
const PORT =3000;

app.get('/',(req,res)=>{
  // console.log("req=>",req);
  res.send('Hello world ')

}

)
app.listen(PORT,()=>console.log("server is running on port"+PORT));