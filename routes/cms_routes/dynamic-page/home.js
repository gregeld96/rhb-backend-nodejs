const route = require('express').Router();
const HomeController = require('../../../controllers/cms/home');

route.get('/', HomeController.renderHome);
route.get('/add', HomeController.renderAddHome);
route.post('/add', HomeController.addHome);
route.get('/edit/:id', HomeController.renderEditHome);
route.post('/edit/:id', HomeController.editHome);
route.post('/delete', HomeController.deleteHome);

module.exports = route;