const route = require('express').Router();
const commissionController = require('../../controllers/cms/commission');
const { authentification_cms } = require('../../middlewares/cms_authentification');

route.use(authentification_cms);
route.get('/member-list', commissionController.renderListMember);
route.get('/registered', commissionController.registeredMember);
route.get('/members', commissionController.getAllMember);
route.get('/commission-list', commissionController.renderCommissionList);
route.get('/add-commission', commissionController.renderAddCommission);
route.post('/add-commission', commissionController.addCommission);
route.get('/edit-commission/:commission_id', commissionController.renderEditCommission);
route.post('/edit-commission/:commission_id', commissionController.editCommission);
route.post('/delete', commissionController.deleteCommission)
route.get('/add', commissionController.renderAddMember);
route.post('/add', commissionController.addMember);
route.post('/:need_id', commissionController.assignMember);


module.exports = route;