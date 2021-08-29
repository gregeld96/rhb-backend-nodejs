const route = require('express').Router();
const penjadwalanController = require('../../controllers/cms/penjadwalan');
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')

route.use(authentification_cms);
route.get('/add-category', penjadwalanController.renderAddCategory);
route.get('/add-section', penjadwalanController.renderAddSection);
route.get('/section', penjadwalanController.getSections);
route.get('/category', penjadwalanController.getCategories);
route.get('/list', penjadwalanController.getList);
route.get('/edit-category/:id', penjadwalanController.renderEditCategory);
route.get('/edit-section/:id', penjadwalanController.renderEditSection);
route.get('/:category_id', penjadwalanController.renderListSchedule);
route.post('/add-category', generalUpload.any(), penjadwalanController.createCategory);
route.post('/add-section', penjadwalanController.createSection);
route.post('/edit-category/:id', generalUpload.any(), penjadwalanController.editCategory);
route.post('/edit-section/:id', penjadwalanController.editSection);
route.post('/section/delete', penjadwalanController.deleteSection)

module.exports = route;