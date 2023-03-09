const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('../routes/api.js');
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/ninjago');
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message });
  next()
});

app.listen(4000, () => {
  console.log('Now listening for requests');
});