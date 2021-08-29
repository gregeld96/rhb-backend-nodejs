const route = require('express').Router();
const TestimonialController = require('../../../controllers/cms/testimonial');
const { generalUpload } = require('../../../helpers/multer_image');

route.get('/', TestimonialController.renderTestiPage);
route.get('/add', TestimonialController.renderAddTestiPage);
route.post('/add', generalUpload.any(), TestimonialController.addTesti);
route.get('/edit/:id', TestimonialController.renderEditTestiPage);
route.post('/edit/:id', generalUpload.any(), TestimonialController.editTesti);
route.post('/delete', TestimonialController.deleteTesti);

module.exports = route;