const route = require('express').Router();
const MarriageController = require('../../../controllers/cms/marriage');
const { authentification_cms } = require('../../../middlewares/cms_authentification');
const { userUpload } = require('../../../helpers/multer_image')

route.use(authentification_cms);
route.get('/', MarriageController.renderListSchedule);
route.get('/list', MarriageController.getScheduleMarriage);
route.get('/list/participant', MarriageController.getParticipant)
route.get('/add', MarriageController.renderAddSchedule);
// route.get('/edit/:id', MarriageController.renderEditSchedule);
// route.post('/edit/:id', MarriageController.editSchedule)
// route.get('/requirement', MarriageController.renderRequirement)
// route.post('/requirement/:marriage_id', MarriageController.requirementMarriage);
route.get('/participant', MarriageController.renderListParticipant);
route.post('/upload-photo/participant', userUpload.any(), MarriageController.uploadParticipantPhoto);
route.post('/status-participant', MarriageController.statusParticipant);
route.get('/participant/:marriage_id', MarriageController.getSpecificParticipant);
route.get('/participant-blessing', MarriageController.renderBlessingSchedule);
route.post('/participant-blessing/:need_id', MarriageController.blessingSchedule);
route.post('/add', MarriageController.addSchedule);
route.post('/schedule/delete', MarriageController.deleteSchedule);

module.exports = route;