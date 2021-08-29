const route = require('express').Router();
const userRoute = require('./users');
const dynamicRoute = require('./dynamics');
const sundayRoute = require('./sunday-school');
const cmsRoute = require('./cms');
const worshipRoute = require('./worship');
const parishServiceRoute = require('./parish-service');
const addressRoute = require('./address');
const ChildrenRoute = require('./children');
const ChatRoute = require('./chat');
const { authentification } = require('../middlewares/authentification');
const prefix = process.env.PREFIX_URL


route.use('/cms', cmsRoute);
route.use(`/${prefix}/users`, userRoute);
route.use(`/${prefix}/children`, ChildrenRoute);
route.use(`/${prefix}/dynamic-pages`, dynamicRoute);
route.use(`/${prefix}/sunday-schools`, sundayRoute);
route.use(`/${prefix}/worships`, worshipRoute);
route.use(`/${prefix}/parish-services`, parishServiceRoute);
route.use(`/${prefix}/addresses`, addressRoute);
route.use(`/${prefix}/chat`, ChatRoute);
route.get('/photos/private/*', authentification, (req, res) => {
    try {
        next();  
    } catch (error) {
        res.send("403 Not Authorized");
    }
});
route.get('/*', (req, res) => {
    res.send("404 Page not found");
});

module.exports = route;