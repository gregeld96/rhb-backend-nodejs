const route = require('express').Router();
const DedicationController = require('../../../controllers/cms/dedication');
const { authentification_cms } = require('../../../middlewares/cms_authentification');

route.use(authentification_cms);
route.get('/', DedicationController.renderListSchedule);
route.get('/list', DedicationController.getScheduleDedication);
route.get('/list/participant', DedicationController.getParticipant)
route.get('/add', DedicationController.renderAddSchedule);
route.get('/edit/:id', DedicationController.renderEditSchedule)
route.post('/schedule/delete', DedicationController.deleteSchedule);
route.get('/participant/', DedicationController.renderListParticipant);
route.post('/participant', DedicationController.statusParticipant);
route.get('/participant/:user_id/:event_id', DedicationController.getSpecificParticipant)
route.post('/add', DedicationController.addSchedule);
route.post('/edit/:need_id', DedicationController.editSchedule)

module.exports = route;