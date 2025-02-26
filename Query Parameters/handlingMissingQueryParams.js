import express from 'express';

const app = express();
app.get("/search", (req, res) => {
    const { query, limit = 10 } = req.query;  // Default limit to 10 if not provided

    if (!query) {
        return res.send("❌ Error: Please provide a search query.");
    }

    res.send(`Searching for: ${query}, Limit: ${limit}`);
    console.log(req.query)
});


app.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
});
