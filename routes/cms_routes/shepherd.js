const route = require('express').Router();
const pasteurController = require('../../controllers/cms/shepherd');
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')

route.use(authentification_cms);
route.get('/', pasteurController.renderListMessage);
route.get('/list', pasteurController.getListMessage);
route.get('/add-message', pasteurController.renderAddMessage);
route.get('/detail/:id', pasteurController.renderDetailMessage);
route.get('/edit/:id', pasteurController.renderEditMessage);
route.post('/delete/', pasteurController.deleteLetter);
route.post('/add-message', generalUpload.any(), pasteurController.addLetter);
route.post('/edit/:id', generalUpload.any(), pasteurController.updateLetter);


module.exports = route;