const route = require('express').Router();
const pendataanController = require('../../controllers/cms/pendataan');
const { userUpload } = require('../../helpers/multer_image')
const { authentification_cms } = require('../../middlewares/cms_authentification');

route.use(authentification_cms)
route.get('/list', pendataanController.renderListUser)
route.get('/', pendataanController.getAllUser);
route.get('/edit/:id', pendataanController.renderEditFileUser);
route.post('/file/:id', userUpload.any(), pendataanController.updateFilesUser);
route.get('/:id', pendataanController.updateStatusUser);

module.exports = route;