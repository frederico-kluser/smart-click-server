const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public')); // optional to se static files by current directory

app.use('/macro', require('./routes/macroRouter'));

module.exports = {
  app,
  PORT,
};
