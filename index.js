const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use(express.static('public')); // optional to se static files by current directory

app.use('/macro', require('./routes/macroRouter'));

module.exports = {
  app,
  PORT,
};
