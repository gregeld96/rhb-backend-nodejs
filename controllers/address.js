const { Province, City, District, Subdistrict } = require('../models');

class AddressController {
    static async getProvinceList(req, res, next) {
        try {
            let list = await Province.findAll({
                order: [
                    ["provinsi", "ASC"]
                ],
                attributes: ['id', 'provinsi']
            });

            res.status(200).json(list);
        } catch (error) {
            next({error});
        }
    }

    static async getCityList(req, res, next) {
        let request = req.body;

        try {
            let selectedProvince = await Province.findOne({where: {provinsi: request.province}})
            
            let list = await City.findAll({
                where: {
                    provinsi_id: selectedProvince.id
                },
                order: [
                    ["kabupaten_kota", "ASC"]
                ],
                attributes: ['id', 'kabupaten_kota']
            });

            res.status(200).json(list);
        } catch (error) {
            next({error});
        }
    }

    static async getDistrictList(req, res, next) {
        let request = req.body;

        try {
            let selectedCity = await City.findOne({where: {kabupaten_kota: request.city}})
            let list = await District.findAll({
                where: {
                    kabkot_id: selectedCity.id
                },
                order: [
                    ["kecamatan", "ASC"]
                ],
                attributes: ['id', 'kecamatan']
            });

            res.status(200).json(list);
        } catch (error) {
            next({error});
        }
    }

    static async getSubdistrictList(req, res, next) {
        let request = req.body;

        try {
            let codePost = [], filter = [];

            let selectedDistrict = await District.findOne({where: {kecamatan: request.district}})

            let list = await Subdistrict.findAll({
                where: {
                    kecamatan_id: selectedDistrict.id
                },
                order: [
                    ["kelurahan", "ASC"]
                ],
                attributes: ['id', 'kelurahan', 'kd_pos']
            });

            list.map(x => {
                if (!filter.includes(x.kd_pos)) {
                    filter.push(x.kd_pos);
                }
            });

            filter.map(x => {
                codePost.push({ kd_pos: String(x) });
            });

            res.status(200).json({ kelurahan: list, kode_post: codePost.sort() });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AddressController;