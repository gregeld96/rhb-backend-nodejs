const route = require('express').Router();
const ServiceClassController = require('../../../controllers/cms/class-service')

route.get('/list/:section/:id', ServiceClassController.listSectionClass);
route.get('/add/:section/:id', ServiceClassController.renderAddClass);
route.post('/add/:section/:id', ServiceClassController.addClass);
route.get('/participant', ServiceClassController.renderClassParticipant);
route.post('/participant/:section/:event_id', ServiceClassController.statusParticipantClass);
route.get('/participant/list', ServiceClassController.getParticipantList);
route.get('/user-class/:user_id', ServiceClassController.renderParticipantClass);
route.post('/delete/:section/:id', ServiceClassController.deleteClass);

module.exports = route;