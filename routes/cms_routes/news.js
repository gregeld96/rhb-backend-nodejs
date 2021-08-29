const route = require('express').Router();
const newsController = require('../../controllers/cms/news');
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')

route.use(authentification_cms);
route.get('/', newsController.renderListNews);
route.get('/list', newsController.getListNews);
route.get('/add', newsController.renderAddNews);
route.post('/add', generalUpload.any(), newsController.addNews);
route.get('/edit/:id', newsController.renderEditNews);
route.post('/edit/:id', generalUpload.any(), newsController.editNews);
route.post('/delete', newsController.deleteNews)


module.exports = route;