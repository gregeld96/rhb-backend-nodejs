const route = require('express').Router();
const cmsController = require('../../controllers/cms/cms');
const { authentification_cms } = require('../../middlewares/cms_authentification');

route.get('/login', cmsController.renderLogin);
route.post('/login', cmsController.login);
route.get('/logout', cmsController.logout);
route.use(authentification_cms);
route.get('/home', cmsController.renderHomePage);
route.get('/list', cmsController.getAllUser);
route.get('/cms-admin', cmsController.renderAdminList);
route.get('/add-admin', cmsController.renderAddAdmin);
route.post('/add-admin', cmsController.addAdmin);
route.post('/member/delete', cmsController.deleteMember)
route.get('/edit-admin/:commission_role_id', cmsController.renderEditAdmin);
route.post('/edit-admin/:commission_role_id', cmsController.editAdmin)
route.post('/notif', cmsController.updateNotif)

module.exports = route;