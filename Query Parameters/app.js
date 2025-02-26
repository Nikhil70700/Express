import express from 'express';

const app = express();


app.get("/search", (req, res) => {
    const { query, limit } = req.query;  // Extract query parameters
    res.send(`Searching for: ${query}, Limit: ${limit}`);
    console.log(req.query)
});


app.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
});
