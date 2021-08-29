const route = require('express').Router();
const WorshipController = require('../controllers/worship');
const { authentification } = require('../middlewares/authentification');

route.use(authentification)
route.get('/sections', WorshipController.getSections);
route.post('/user', WorshipController.joinSchedule);
route.get('/ongoing-event', WorshipController.ongoingEvent);
route.get('/incoming-events', WorshipController.incomingEvent);
route.get('/history', WorshipController.getHistoryList);
route.get('/:category_id', WorshipController.getWorshipList);

module.exports = route