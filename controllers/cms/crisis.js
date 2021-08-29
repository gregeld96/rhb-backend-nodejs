const { Crisis_Center, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class CrisisCenterController {
    static async renderCriscenPage(req, res) {
        try {
            res.render('crisis_center', {
                title: 'Crisis Center',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                criscen_list_active: 'active'
            })
        } catch (error) {
            res.redirect('/cms/home')
        }
    }

    static async renderAddCriscenPage(req, res) {
        try {
            res.render('crisis_center/add', {
                title: 'Crisis Center',
                legend: 'Add Crisis Center',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                criscen_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render create crisis center`);
            res.redirect('/cms/dynamic-pages/crisis-center/')
        }
    }

    static async addCriscen(req, res) {
        const { name, phone_number } = req.body
        const data = req.session;

        try {
            let newData = {
                name,
                profile_pic: req.files[0].filename,
                phone_number,
            }

            await Crisis_Center.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Crisis Center`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Crisis Center successful created');
            res.redirect('/cms/dynamic-pages/crisis-center/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create crisis center`);
            res.redirect('/cms/dynamic-pages/crisis-center/add');
        }
    }

    static async renderEditCriscenPage(req, res) {
        const { id } = req.params;

        try {
            let data;
            let info = await Crisis_Center.findOne({ where: { id: id } })

            if (info.id) {
                data = {
                    id: info.id,
                    name: info.name,
                    phone_number: info.phone_number,
                    profile_pic: info.profile_pic,
                }
            }

            res.render('crisis_center/edit', {
                title: `Crisis Center`,
                legend: 'Edit Crisis Center',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                criscen_list_active: 'active',
                data: data
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit crisis center`);
            res.redirect('/cms/dynamic-pages/crisis-center/');
        }
    }

    static async getList(req, res) {
        let { length, draw, start, order, columns } = req.query;

        try {
            let selected, list;

            columns.forEach((column) => {
                column.data == order[0].column ? selected = column.name : ''
            })

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            list = await Crisis_Center.findAndCountAll({
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                table.data.push([
                    list.rows[key]['name'],
                    list.rows[key]['phone_number'],
                    list.rows[key]['profile_pic'],
                    list.rows[key]['id']
                ]);
            }

            res.json(table);
        } catch (error) {
            console.log(error)
            res.redirect('/cms/home')
        }
    }

    static async editCriscen(req, res) {
        const { name, phone_number } = req.body
        const { id } = req.params
        const data = req.session;
        let files = req.files;

        try {
            let oldData = await Crisis_Center.findOne({ where: { id: id } });

            let updatedData = {
                name,
                phone_number,
                profile_pic: req.files.length > 0 ? req.files[0].filename : oldData.profile_pic,
            }

            await Crisis_Center.update(updatedData, { where: { id: id } });

            if (files.length > 0) {
                let path = 'Public/photos/public/crisis_center/'
                if (files[0].fieldname == 'criscen_pic' && oldData.profile_pic) {
                    removePhoto(path + oldData.profile_pic);
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Crisis Center`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Crisis center successful updated');
            res.redirect('/cms/dynamic-pages/crisis-center/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit crisis center`);
            res.redirect(`/cms/dynamic-pages/crisis-center/edit/${id}`);
        }
    }

    static async deleteCriscen(req, res) {
        const { criscen_id } = req.body;
        const data = req.session

        try {
            let response = await CrisisCenterService.deleteCriscen({ id: criscen_id, username: data.name });

            if (response.status == 200) {
                req.flash('msg_info', response.message);
                res.redirect('/cms/dynamic-pages/crisis-center/')
            } else {
                throw ({
                    message: response.error.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete crisis center`);
            res.redirect(`/cms/dynamic-pages/crisis-center/`);
        }
    }
}

module.exports = CrisisCenterController;