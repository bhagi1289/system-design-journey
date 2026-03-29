const express = require('express');
const app = express();
const port = process.argv[2] || 3001;

// app.get('/', (req, res) => {
//     // 3002 (Simulating Heavy Load intentionally) vs 3001 (Light Load)
//     if (port == 3002) {
//         console.log(`Heavy request received on ${port}. Processing...`);
//         setTimeout(() => {
//             res.send(`🐢 Slow Response from Server on Port: ${port}\n`);
//         }, 5000); // 5 seconds delay
//     } else {
//         console.log(`Request handled quickly by ${port}`);
//         res.send(`⚡ Fast Response from Server on Port: ${port}\n`);
//     }
// });

app.get(/.*/, (req, res) => {
    if (port == 3002) {
        setTimeout(() => {
            res.send(`🐢 Slow Response from Port: ${port} | URL: ${req.url}\n`);
        }, 5000); 
    } else {
        res.send(`⚡ Fast Response from Port: ${port} | URL: ${req.url}\n`);
    }
});

app.listen(port, () => console.log(`Server live on ${port}`));