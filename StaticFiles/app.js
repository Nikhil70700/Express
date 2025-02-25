import express from 'express';
import {PORT} from '../Creating Server/env.js';
import path from 'path';


const app=express();

//absolute Path
const homePagePath=path.join(import.meta.dirname,"public");

app.use(express.static(homePagePath));

app.get("/",(req,res)=>{
res.sendFile(homePagePath);

})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})