const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const CampoController = require('./controllers/CampoController');
const JogadorController = require('./controllers/JogadorController');
const PeladaController = require('./controllers/PeladaController');
const TimeController = require('./controllers/TimeController');

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/field/create', CampoController.create);
routes.get('/fields', CampoController.read);
routes.put('/field/update/:id', CampoController.update);
routes.delete('/field/delete/:id', CampoController.delete);

routes.post('/player/create', upload.single('avatar_url'), JogadorController.create);
routes.get('/players', JogadorController.read);
routes.put('/player/update/:id', JogadorController.update);
routes.delete('/player/delete/:id', JogadorController.delete); 

routes.post('/game/create', PeladaController.create);
routes.get('/games', PeladaController.read);
routes.put('/game/update/:id', PeladaController.update);
routes.delete('/game/delete/:id', PeladaController.delete);
routes.delete('/game/deleteAll', PeladaController.deleteAll);

routes.post('/team/create', TimeController.create);
routes.get('/teams', TimeController.read);
routes.put('/team/update/:id', TimeController.update);
routes.delete('/team/delete/:id', TimeController.delete);

module.exports = routes;