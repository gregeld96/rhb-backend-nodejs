const { Giving, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class GivingController {
    static async renderGivingPage(req, res) {
        try {
            let completeList = [];

            let list = await Giving.findAll({
                attributes: [
                    'id',
                    'bank',
                    'holder',
                    'no_rek',
                    'qr'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        bank: detail.bank,
                        holder: detail.holder,
                        no_rek: detail.no_rek,
                        qr: detail.qr,
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('giving', {
                title: 'List of Giving',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                giving_list_active: 'active',
                data: completeList
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddGivingPage(req, res) {
        try {
            res.render('giving/add', {
                title: 'Giving',
                legend: 'Add Giving',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                giving_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render giving add page`);
            res.redirect('/cms/dynamic-pages/giving/')
        }
    }

    static async addGiving(req, res) {
        const data = req.session;
        let request = req.body;
        let files = req.files;

        try {
            let newData = {
                bank: request.name,
                holder: request.holder,
                no_rek: request.no_rek,
                qr: files[0].filename,
            }

            await Giving.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Giving`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Giving successful created');
            res.redirect('/cms/dynamic-pages/giving/')
        } catch (error) {
            if (files.length > 0) {
                let path = 'Public/photos/public/giving/'
                removePhoto(path + files[0].filename);
            }
            req.flash('msg_error', error.message || `Got problem during create giving`);
            res.redirect('/cms/dynamic-pages/giving/add');
        }
    }

    static async renderEditGivingPage(req, res) {
        const { id } = req.params;

        try {
            let data = await Giving.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'bank',
                    'holder',
                    'no_rek',
                    'qr'
                ]
            });

            let temp = {
                id: data.id,
                bank: data.bank,
                holder: data.holder,
                no_rek: data.no_rek,
                qr: data.qr,
            }

            res.render('giving/edit', {
                title: `Giving`,
                legend: 'Edit Giving',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                giving_list_active: 'active',
                data: temp
            })

        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit giving page`);
            res.redirect('/cms/dynamic-pages/giving/');
        }
    }

    static async editGiving(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;
        let files = req.files;

        try {
            let oldData = await Giving.findOne({ where: { id: id } });

            let updatedData = {
                bank: request.name ? request.name : oldData.bank,
                holder: request.holder ? request.holder : oldData.holder,
                no_rek: request.no_rek ? request.no_rek : oldData.no_rek,
                qr: files.length > 0 ? files[0].filename : oldData.qr,
            }

            await Giving.update(updatedData, { where: { id: id } });

            if (files.length > 0) {
                let path = 'Public/photos/public/giving/'
                if (oldData.qr) {
                    removePhoto(path + oldData.qr);
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Giving`,
                user: data.name,
            }

            await Log.create(log);

            req.flash('msg_info', 'Giving successful updated');
            res.redirect('/cms/dynamic-pages/giving/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit giving`);
            res.redirect(`/cms/dynamic-pages/giving/edit/${id}`);
        }
    }

    static async deleteGiving(req, res) {
        const { giving_id } = req.body;
        const session = req.session

        try {
            let data = await Giving.findOne({ where: { id: giving_id } });
            let path = 'Public/photos/public/giving/'

            await Giving.destroy({ where: { id: giving_id } })

            if (data.qr) {
                removePhoto(path + data.qr);
            }

            let log = {
                log: JSON.stringify(giving_id),
                method: `DELETE - Giving`,
                user: session.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/giving/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete giving`);
            res.redirect(`/cms/dynamic-pages/giving/`);
        }
    }
}

module.exports = GivingController;