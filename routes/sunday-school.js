const route = require('express').Router();
const sundaySchoolController = require('../controllers/sunday-school')
const { authentification } = require('../middlewares/authentification');

route.use(authentification)
route.get('/schedule', sundaySchoolController.getSchedule);
route.get('/schedule/:schedule_id/:user_id', sundaySchoolController.getListChildUser);
route.post('/children-join/:schedule_id', sundaySchoolController.childJoin);

module.exports = route;