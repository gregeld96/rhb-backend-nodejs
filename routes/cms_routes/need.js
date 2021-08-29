const route = require('express').Router();
const needController = require('../../controllers/cms/need');
const { authentification_cms } = require('../../middlewares/cms_authentification');
const { generalUpload } = require('../../helpers/multer_image')

route.use(authentification_cms);
route.get('/', needController.requestAll);
route.get('/task/', needController.renderTask);
route.get('/task/:section', needController.getTask);
route.get('/additional', needController.getAdditionalMember)
route.get('/task/upload/:section/:job_id', needController.renderUpload);
route.post('/task/upload/:section/:job_id', generalUpload.any(), needController.upload);
route.get('/add-need/:need_id', needController.renderAddNeed);
route.post('/add-need/:need_id', needController.addNeed);
route.get('/detail/:need_id', needController.renderDetailEventNeed);
route.get('/edit-members/:need_id', needController.renderEditMember);
route.post('/edit-members/:need_id', needController.editMemberNeed)
route.get('/edit/:need_id', needController.renderEditNeed);
route.post('/edit/:need_id', needController.editNeed);
route.get('/approved/:need_id', needController.approvedPasteur);
route.get('/:event_id/:need_id', needController.renderAssignNeeds);
route.post('/:event_id/:need_id', needController.assignNeed);
route.get('/request', needController.renderRequest);
route.get('/:need_id', needController.renderAssignMemberDetail);
route.post('/job/delete/:need_id', needController.deleteJob);

module.exports = route;