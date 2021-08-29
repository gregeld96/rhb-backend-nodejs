const route = require('express').Router();
const cms_user_route = require('./cms_routes/user');
const commission_route = require('./cms_routes/commission');
const penjadwalan_route = require('./cms_routes/penjadwalan');
const room_route = require('./cms_routes/rooms');
const need_route = require('./cms_routes/need');
const pasteur_message_route = require('./cms_routes/shepherd');
const event_route = require('./cms_routes/event');
const registerationRoute = require('./cms_routes/pendataan');
const sunday_school_route = require('./cms_routes/sunday-school');
const news_route = require('./cms_routes/news')
const dedication_route = require('./cms_routes/service-event/dedication')
const baptism_route = require('./cms_routes/service-event/baptism');
const class_service_route = require('./cms_routes/service-event/class-service');
const marriage_route = require('./cms_routes/service-event/marriage');
const dynamic_route = require('./cms_routes/dynamic');
const ChatRoute = require('./cms_routes/chat');

/* Route Login*/
route.use('/', cms_user_route);
route.use('/commission', commission_route);
route.use('/penjadwalan', penjadwalan_route);
route.use('/event', event_route);
route.use('/pendataan-jemaat', registerationRoute);
route.use('/ruangan', room_route);
route.use('/needs', need_route);
route.use('/pasteur-message', pasteur_message_route);
route.use('/sunday-schools', sunday_school_route);
route.use('/news', news_route);
route.use('/dedication', dedication_route);
route.use('/baptism', baptism_route);
route.use('/dynamic-pages', dynamic_route);
route.use('/class', class_service_route);
route.use('/marriage', marriage_route);
route.use('/chat', ChatRoute);

module.exports = route