const route = require('express').Router();
const concomController = require('../../../controllers/cms/contact');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', concomController.renderConcomPage);
route.get('/list', concomController.getList);
route.get('/add', concomController.renderAddConcomPage);
route.post('/add', generalUpload.any(), concomController.addConcom);
route.get('/edit/:id', concomController.renderEditConcomPage);
route.post('/edit/:id', generalUpload.any(), concomController.editConcom);
route.post('/delete', concomController.deleteConcom);

module.exports = route;