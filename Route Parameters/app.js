import express from 'express';
import path from 'path';



const app=express();


app.get("/",(req,res)=>{
    res.send("Hello");
});

app.get("/contact",(req,res)=>{
    res.send("Contact us at 1234567890");
});

// app.get('/profile/:name',(req,res)=>{
//     console.log(res.params);
//     res.send(`<h1>My Name is ${req.params.name}</h1>`)
// });

app.get('/profile/:username/article/:slug',(req,res)=>{
   
    // for space we are getting %20 in url to fix it we can write it like using regex

    const formattedName=req.params.username.replace(/-/g," ");

    const formattedSlug=req.params.slug.replace(/-/g," ");

    res.send(`<h1>My Name is ${formattedName} learning Article ${formattedSlug}</h1>`)
})


app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
