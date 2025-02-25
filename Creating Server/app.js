import 'dotenv/config';
import express from 'express';
import { PORT } from './env.js';

const app =express();

app.get("/",(req,res)=>{
        res.send("<h1>Hello Nikhil</h1>");
});


app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});

app.get("/contact",(req,res)=>{
    return res.send(`<div class="container">
        <h1>Short You URL Here 🤏</h1>
        <form action="" id="shorten-form">
            <div>
                <label for="url">Enter Your URL:</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Enter Your Shorten URL:</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Short Here</button>
        </form>

        <h2>Congratulations Your Short URL is Here</h2>
        <ul id="shortened-urls"></ul>
    </div>`);
});



// const PORT=process.env.PORT ||3005;

app.listen(PORT,()=>{
        console.log(`Server is Running at Port: ${PORT}`);
})






