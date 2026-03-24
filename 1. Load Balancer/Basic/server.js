// server.js
const express = require('express');
const app = express();
const port = process.argv[2] || 3001;
app.get('/', (req, res) => {
    console.log(`Request received on port: ${port}`);
    res.send(`Hello from Server running on Port: ${port}\n`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});