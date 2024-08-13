const express = require('express');
const cron = require('node-cron');
 
const app = express();
 
// Schedule a cron job to run every 5 minutes
cron.schedule('*/5 * * * *', () => {
    console.log('Running a task every 5 minutes');
});
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});