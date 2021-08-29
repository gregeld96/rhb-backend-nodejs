const route = require('express').Router();
const testimonial_route = require('./dynamic-page/testimonial');
const concom_route = require('./dynamic-page/contact');
const criscen_route = require('./dynamic-page/crisis');
const giving_route = require('./dynamic-page/giving');
const flash_route = require('./dynamic-page/flash');
const home_route = require('./dynamic-page/home');
const help_route = require('./dynamic-page/help');
const hotline_route = require('./dynamic-page/hotline');
const video_route = require('./dynamic-page/video');

route.use('/contact-commissions', concom_route);
route.use('/crisis-center', criscen_route);
route.use('/testimonial', testimonial_route);
route.use('/giving', giving_route);
route.use('/flash', flash_route);
route.use('/home', home_route);
route.use('/help', help_route);
route.use('/hotline', hotline_route);
route.use('/video', video_route);

module.exports = route;