import express from 'express';
import {PORT} from './Creating Server/env.js';
import path from 'path';
const app=express();

app.get("/",(req,res)=>{

    // console.log(__dirname);//this will not work when we are working with ES Module.
    // console.log(__filename);//this will not work when we are working with ES Module.

    // console.log(import.meta.dirname);
    // console.log(import.meta.url);

    //! To get the absolute path

    // const __dirname=new URL(import.meta.url).pathname;
    // console.log(__dirname);

    // res.send("Hii Nikhil Good Morning !!")

//? if we want to  send a file like html or CSS

const loginPagePath=path.join(import.meta.dirname,"practice","index.html")

res.sendFile(loginPagePath);

})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})