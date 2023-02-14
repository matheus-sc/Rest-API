const express = require('express');

const app = express();

app.use('/api', require('./routes/api.js'));

app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
})