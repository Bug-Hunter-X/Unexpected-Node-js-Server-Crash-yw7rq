const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions to prevent unexpected crashes
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Perform cleanup or graceful shutdown here
});

server.listen(8080);