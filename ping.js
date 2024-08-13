const express = require('express');
const cron = require('node-cron');
const axios = require('axios');
const cors = require('cors');
 
const app = express();
app.use(cors());


 
// Schedule a cron job to run every 5 minutes
cron.schedule('*/5 * * * *', async () => {
    console.log('Running a task every 5 minutes');
    try {
        await axios.get('https://stock-server-qag4.onrender.com/ping');
        console.log('Pinged the other server successfully');
  } catch (error) {
        console.error('Error pinging the other server:', error);
  }
});

app.get("/ping-back", async (req, res) => {
  try {
    res.send("ping backed successfully");
  } catch (error) {
    console.error("Error fetching Bitsearch API data:", error.message);
    res.status(500).send("Internal Server Error");
  }
});
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});