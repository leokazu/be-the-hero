const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/**listar ongs */
routes.get('/ongs', OngController.index);

/**cadastrar ongs */
routes.post('/ongs', OngController.create);

/**cadastrar casos */
routes.post('/incidents', IncidentController.create);

/**listar casos */
routes.get('/incidents', IncidentController.index);

/**deletar casos */
routes.delete('/incidents/:id', IncidentController.delete);

/**listar */
routes.get('/profile', ProfileController.index);

/**login */
routes.post('/sessions', SessionController.create);


module.exports = routes;