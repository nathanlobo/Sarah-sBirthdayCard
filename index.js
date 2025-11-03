const express = require('express');
const http = require('http');
const reload = require('reload');

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.static('public'));

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// start reload after server is up
reload(app).then(() => {
  console.log('Reload server started.');
}).catch(err => {
  console.error('Reload could not start', err);
});