const route = require('express').Router();
const HotlineController = require('../../../controllers/cms/hotline');

route.get('/', HotlineController.renderHotline);
route.get('/add', HotlineController.renderAddHotline);
route.post('/add', HotlineController.addHotline);
route.get('/edit/:id', HotlineController.renderEditHotline);
route.post('/edit/:id', HotlineController.editHotline);
route.post('/delete', HotlineController.deleteHotline);

module.exports = route;