const route = require('express').Router();
const addressController = require('../controllers/address');

route.get('/province', addressController.getProvinceList);
route.post('/cities', addressController.getCityList);
route.post('/districts', addressController.getDistrictList);
route.post('/subdistricts', addressController.getSubdistrictList);

module.exports = route;