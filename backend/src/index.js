const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


app.listen(3333, function () {
    console.log(' Porta: 3333');
});





