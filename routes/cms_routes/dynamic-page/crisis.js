const route = require('express').Router();
const criscenController = require('../../../controllers/cms/crisis');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', criscenController.renderCriscenPage);
route.get('/list', criscenController.getList);
route.get('/add', criscenController.renderAddCriscenPage);
route.post('/add', generalUpload.any(), criscenController.addCriscen);
route.get('/edit/:id', criscenController.renderEditCriscenPage);
route.post('/edit/:id', generalUpload.any(), criscenController.editCriscen);
route.post('/delete', criscenController.deleteCriscen);

module.exports = route;