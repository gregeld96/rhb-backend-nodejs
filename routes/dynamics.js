const route = require('express').Router();
const DynamicPageController = require('../controllers/dynamic');
const { authentification } = require('../middlewares/authentification');

route.get('/intro', DynamicPageController.getIntro);
route.use(authentification);
route.get('/concom', DynamicPageController.getConcom);
route.get('/criscen', DynamicPageController.getCriscen);
route.get('/news', DynamicPageController.getNews);
route.get('/shepherd-letters', DynamicPageController.getShepherdLetter);
route.get('/shepherd-letters/:id', DynamicPageController.specificShepherdLetter);
route.get('/testimonials', DynamicPageController.getTestimonial);
route.get('/giving', DynamicPageController.getGivingPage);
route.get('/hotline', DynamicPageController.getHotline);
route.get('/home', DynamicPageController.getHomePage);
route.get('/help', DynamicPageController.getHelp);
route.get('/video', DynamicPageController.geVideo);

module.exports = route;