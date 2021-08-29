const route = require('express').Router();
const ChatController = require('../controllers/chat');
const { authentification } = require('../middlewares/authentification');

route.use(authentification);
route.get('/user', ChatController.checkFirebaseUser);
route.post('/message', ChatController.startChat);
route.put('/seen', ChatController.updateSeenChat);

module.exports = route;