const route = require('express').Router();
const ParishUserController = require('../controllers/parish-service');
const { authentification } = require('../middlewares/authentification');
const { userUpload } = require('../helpers/multer_image')

route.use(authentification);
route.get('/list', ParishUserController.listUserEvent);
route.get('/section/:section', ParishUserController.listEventSpecificSection);
route.get('/user-child/:user_id', ParishUserController.getUserChildAvailable);
route.post('/event/:section/:event_id', userUpload.any(), ParishUserController.joinSpecificEvent);

module.exports = route;