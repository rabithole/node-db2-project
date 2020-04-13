const express = require('express');

const carsRouter = require('./routers/carsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Screw your middleware!</h2>`);
});

module.exports = server;
