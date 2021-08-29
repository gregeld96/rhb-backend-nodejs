const route = require('express').Router();
const GivingController = require('../../../controllers/cms/giving');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', GivingController.renderGivingPage);
route.get('/add', GivingController.renderAddGivingPage);
route.post('/add', generalUpload.any(), GivingController.addGiving);
route.get('/edit/:id', GivingController.renderEditGivingPage);
route.post('/edit/:id', generalUpload.any(), GivingController.editGiving);
route.post('/delete', GivingController.deleteGiving);

module.exports = route;