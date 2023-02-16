const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.body);
    next();
  });
app.use('/api', require('./routes/api.js'));

app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
})