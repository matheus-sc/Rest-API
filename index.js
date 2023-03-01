const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api.js'));
app.use(function(err, req, res, next) {
  res.status(422).send({error: err._message});
});

app.listen(process.env.port || 4000, () => {
    console.log('Now listening for requests');
});