const route = require('express').Router();
const sundaySchoolCMSController = require('../../controllers/cms/sunday-school')
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')


route.use(authentification_cms)
route.get('/', sundaySchoolCMSController.renderListCategory);
route.get('/list', sundaySchoolCMSController.getScheduleSundaySchool);
route.get('/add-category', sundaySchoolCMSController.renderAddCategory);
route.get('/add-schedule', sundaySchoolCMSController.renderAddSchedule);
route.get('/edit-category/:category_id', sundaySchoolCMSController.renderEditCategory);
route.get('/edit-schedule/:id', sundaySchoolCMSController.renderEditSchedule)
route.get('/:id', sundaySchoolCMSController.renderListSchedule);
route.post('/category/delete', sundaySchoolCMSController.deleteCategory);
route.post('/schedule/delete', sundaySchoolCMSController.deleteSchedule);
route.get('/schedule/:id', sundaySchoolCMSController.getChildSunday)
route.post('/add-category', generalUpload.any(), sundaySchoolCMSController.addCategory);
route.post('/add-schedule', sundaySchoolCMSController.addSchedule);
route.post('/edit-category/:category_id', generalUpload.any(), sundaySchoolCMSController.editCategory)
route.post('/edit-schedule/:id', sundaySchoolCMSController.editSchedule)

module.exports = route;