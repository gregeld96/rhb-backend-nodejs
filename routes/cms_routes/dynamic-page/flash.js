const route = require('express').Router();
const FlashController = require('../../../controllers/cms/flash');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', FlashController.renderFlash);
route.get('/add', FlashController.renderAddFlash);
route.post('/add', generalUpload.any(), FlashController.addFlash);
route.get('/edit/:id', FlashController.renderEditFlash);
route.post('/edit/:id', generalUpload.any(), FlashController.editFlash);
route.post('/delete', FlashController.deleteFlash);

module.exports = route;