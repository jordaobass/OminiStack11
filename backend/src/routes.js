const express = require('express');
const OngController = require('./controller/OngController');
const casosController = require('./controller/incidentController');
const profileCOntroller = require('./controller/ProfileCOntroller');
const SessionController = require('./controller/SessionController');

const route = express.Router();

route.get('/', async (req, res) => {
    console.log("aaa");
    res.send('src hello');
});


route.post('/sessao', SessionController.create);

route.get('/profile', profileCOntroller.index);

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/casos', casosController.index);
route.post('/casos', casosController.create);
route.delete('/casos/:id', casosController.delete);



module.exports = route;
