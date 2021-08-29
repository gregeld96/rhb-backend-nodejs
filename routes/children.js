const route = require('express').Router();
const ChildrenController = require('../controllers/children');
const { userUpload, generalUpload } = require('../helpers/multer_image');
const { authentification } = require('../middlewares/authentification');

route.use(authentification);
route.get('/user/:user_id', ChildrenController.getChildren);
route.post('/add', userUpload.any(), ChildrenController.addChild);
route.put('/profile-pic/:id', generalUpload.any(), ChildrenController.updateProfPic)
route.put('/update/:id', userUpload.any(), ChildrenController.updateData);
route.put('/remove-child/:id', ChildrenController.removeChild);
route.delete('/profile-pic/:id', ChildrenController.removeProfilePicture);

module.exports = route;