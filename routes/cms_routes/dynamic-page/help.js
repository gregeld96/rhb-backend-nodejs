const route = require('express').Router();
const HelpController = require('../../../controllers/cms/help');

route.get('/', HelpController.renderHelp);
route.get('/add', HelpController.renderAddHelp);
route.post('/add', HelpController.addHelp);
route.get('/edit/:id', HelpController.renderEditHelp);
route.post('/edit/:id', HelpController.editHelp);
route.post('/delete', HelpController.deleteHelp);

module.exports = route;