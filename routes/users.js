const route = require('express').Router();
const UserController = require('../controllers/user');
const { userUpload, generalUpload } = require('../helpers/multer_image')
const { authentification } = require('../middlewares/authentification');


route.post('/login', UserController.login);
route.post('/register', userUpload.any(), UserController.register);
route.post('/otp/request', UserController.otp);
route.post('/otp/verification', UserController.verificationOTP)
route.put('/update-password', UserController.updatePassword);
route.post('/check-email', UserController.emailCheck);

route.use(authentification);
route.get('/fetch', UserController.fetchData);
route.put('/verify-password', UserController.verificationPassword);
route.put('/change-password', UserController.changePassword);
route.put('/update-data', UserController.updateUser);
route.put('/profile-pic', generalUpload.any(), UserController.updateProfilePicture);
route.delete('/profile-pic', UserController.removeProfilePicture);
route.get('/role', UserController.roleList);
route.get('/job', UserController.jobHistory);
route.get('/job-request', UserController.jobRequest);
route.put('/job-response/:job_id', UserController.acceptJobRequest);
route.get('/ongoing-request', UserController.ongoingRequest);
route.get('/emergency-data', UserController.emergencyData);
route.put('/logout', UserController.logout);


module.exports = route; 