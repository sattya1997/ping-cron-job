const express = require('express');
const cron = require('node-cron');
 
const app = express();
 
// Schedule a cron job to run every 5 minutes
cron.schedule('*/5 * * * *', () => {
    console.log('Running a task every 5 minutes');
    try {
        await axios.get('https://stock-server-qag4.onrender.com/ping');
        console.log('Pinged the other server successfully');
  } catch (error) {
        console.error('Error pinging the other server:', error);
  }
});
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});