const route = require('express').Router();
const BaptismController = require('../../../controllers/cms/baptism');
const { authentification_cms } = require('../../../middlewares/cms_authentification');

route.use(authentification_cms);
route.get('/', BaptismController.renderListSchedule);
route.get('/list', BaptismController.getScheduleBaptism);
route.get('/list/participant', BaptismController.getParticipant)
route.get('/add', BaptismController.renderAddSchedule);
route.get('/edit/:id', BaptismController.renderEditSchedule)
route.post('/schedule/delete', BaptismController.deleteSchedule);
route.get('/participant', BaptismController.renderListParticipant);
route.post('/participant', BaptismController.statusParticipant);
route.get('/participant/:user_id/:event_id', BaptismController.getSpecificParticipant);
route.post('/add', BaptismController.addSchedule);
route.post('/edit/:need_id', BaptismController.editSchedule)

module.exports = route;