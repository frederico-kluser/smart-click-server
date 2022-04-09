const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static('public')); // optional to se static files by current directory

app.use('/macro', require('./routes/macroRouter'));

module.exports = {
  app,
  PORT,
};
