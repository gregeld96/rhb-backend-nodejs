const route = require('express').Router();
const EventController = require('../../controllers/cms/event');
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')

route.use(authentification_cms);
route.get('/', EventController.renderListEvent);
route.get('/list', EventController.getAllEvent);
route.get('/add-event', EventController.renderAddEvent);
route.get('/add-banner', EventController.renderBannerEvent);
route.get('/edit/:need_id', EventController.renderEditEvent);
route.post('/edit/:need_id', EventController.editEvent);
route.post('/add-banner/:need_id', generalUpload.any(), EventController.addBanner);
route.post('/add-event', EventController.createEvent);
route.post('/delete', EventController.needDelete)


module.exports = route;