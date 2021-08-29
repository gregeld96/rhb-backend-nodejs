const route = require('express').Router();
const VideoController = require('../../../controllers/cms/video');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', VideoController.renderVideoPage);
route.get('/add', VideoController.renderAddVideoPage);
route.post('/add', generalUpload.any(), VideoController.addVideo);
route.get('/edit/:id', VideoController.renderEditVideoPage);
route.post('/edit/:id', generalUpload.any(), VideoController.editVideo);
route.post('/delete', VideoController.deleteVideo);

module.exports = route;