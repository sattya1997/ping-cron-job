const axios = require('axios');
 
const pingServer = async () => {
  try {
    await axios.get('https://stock-server-qag4.onrender.com/ping');
    console.log('Pinged the other server successfully');
  } catch (error) {
    console.error('Error pinging the other server:', error);
  }
};
 
// Ping every 5 minutes
setInterval(pingServer, 5 * 60 * 1000);
