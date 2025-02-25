import express from 'express';
import {PORT} from '../Creating Server/env.js';
import path from 'path';


const app=express();

//? In Newer Versions of Node.js (14.8+),you can use top-level await without needing to wrp it in an async function.

// const response=await fetch('https://jsonplaceholder.typicode.com/posts');
// const json=await response.json();
// console.log(json);

//? In Common js ,__dirname(current directory) and __filename(current file path ) are available  by default but In ES module they don't exist.
// console.log(__filename);
// console.log(__filename);

console.log(import.meta.dirname);
console.log(import.meta.filename);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})