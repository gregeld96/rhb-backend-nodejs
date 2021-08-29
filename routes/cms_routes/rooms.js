const route = require('express').Router();
const roomController = require('../../controllers/cms/rooms');
const { authentification_cms } = require('../../middlewares/cms_authentification');

route.use(authentification_cms);
route.get('/calendar', roomController.showCalendar);
route.post('/edit/:need_id', roomController.editRuangan)
route.post('/:need_id', roomController.addEventRoom);

module.exports = route;