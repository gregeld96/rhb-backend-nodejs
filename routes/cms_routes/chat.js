const route = require('express').Router();
const ChatCmsController = require('../../controllers/cms/chat');
const { authentification_cms } = require('../../middlewares/cms_authentification');

route.use(authentification_cms);
route.get('/', ChatCmsController.renderChatScreen);
route.get('/detail', ChatCmsController.renderUserChatDetail);
route.post('/reply', ChatCmsController.replyMessage);

module.exports = route; 