require('dotenv').config();

const http = require('http');
const mongoose = require('./mongoDB');
const app = require('./app');

const server = http.createServer(app);
const port = process.env.PORT || 5000;

// error handlers
server.on('error', (error) => {
  if (error.syscall !== 'listen') throw error;
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
