let bro = " brother";
console.log(`you are  my best${bro}`)
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Route to fetch trading info
app.get('/trading-info', async (req, res) => {
    try {
        // Example API endpoint - replace with your actual trading API
        const response = await axios.get('https://api.example.com/trading-data');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch trading data' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Trading server running on port ${port}`);
});

