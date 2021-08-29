const { Notification, Log } = require('../../models');

class HotlineController {
    static async renderHotline(req, res) {
        try {
            let completeList = [];

            let list = await Notification.findAll({
                attributes: [
                    'id',
                    'address',
                    'city',
                    'code_post',
                    'hotline',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        address: detail.address ? `${detail.address},${detail.city},${detail.code_post}` : 'N/A',
                        hotline: detail.hotline,
                        section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('hotline', {
                title: 'List of Hotline',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                hotline_list_active: 'active',
                data: completeList
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddHotline(req, res) {
        try {
            res.render('hotline/add', {
                title: 'Hotline',
                legend: 'Add Hotline',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                hotline_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render hotline add page`);
            res.redirect('/cms/dynamic-pages/hotline/')
        }
    }

    static async addHotline(req, res) {
        const data = req.session;
        let request = req.body;

        try {
            let newData = {
                address: request.address,
                city: request.city,
                code_post: request.code_post,
                hotline: request.hotline,
                section: request.section
            }

            await Notification.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - HOTLINE`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Hotline successful created');
            res.redirect('/cms/dynamic-pages/hotline/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create hotline`);
            res.redirect('/cms/dynamic-pages/hotline/add');
        }
    }

    static async renderEditHotline(req, res) {
        const { id } = req.params;

        try {
            let data = await Notification.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'address',
                    'city',
                    'code_post',
                    'hotline',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                address: data.address,
                city: data.city,
                code_post: data.code_post,
                hotline: data.hotline,
                section: data.section
            }

            res.render('hotline/edit', {
                title: `Hotline`,
                legend: 'Edit Hotline',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                hotline_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit hotline page`);
            res.redirect('/cms/dynamic-pages/hotline/');
        }
    }

    static async editHotline(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;

        try {
            let oldData = await Notification.findOne({ where: { id: id } });

            let updatedData = {
                address: request.address ? request.address : oldData.address,
                hotline: request.hotline ? request.hotline : oldData.hotline,
                city: request.city ? request.city : oldData.city,
                code_post: request.code_post ? request.code_post : oldData.code_post,
                section: request.section ? request.section : oldData.section,
            }

            let response = await Notification.update(updatedData, { where: { id: id } });

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Hotline`,
                user: data.name,
            }

            await Log.create(log);

            req.flash('msg_info', 'Hotline successful updated');
            res.redirect('/cms/dynamic-pages/hotline/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit hotline`);
            res.redirect(`/cms/dynamic-pages/hotline/edit/${id}`);
        }
    }

    static async deleteHotline(req, res) {
        const { hotline_id } = req.body;
        const data = req.session

        try {
            await Notification.destroy({ where: { id: hotline_id } })

            let log = {
                log: JSON.stringify(hotline_id),
                method: `DELETE - Hotline`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/hotline/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete hotline`);
            res.redirect(`/cms/dynamic-pages/hotline/`);
        }
    }
}

module.exports = HotlineController;