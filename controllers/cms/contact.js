const DataTableService = require('../../services/data-table');
const { Contact_Commission, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class ContactCommissionController {
    static async renderConcomPage(req, res) {
        try {
            res.render('contact_commission', {
                title: `Contact Commission`,
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                concom_list_active: 'active'
            })
        } catch (error) {
            res.redirect('/cms/home')
        }
    }

    static async renderAddConcomPage(req, res) {
        try {
            res.render('contact_commission/add', {
                title: `Add Contact Commission`,
                legend: 'Add Contact Commission',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                concom_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render create contact commission`);
            res.redirect('/cms/dynamic-pages/contact-commissions/');
        }
    }

    static async addConcom(req, res) {
        const { title, description, leader_name, leader_phone, order } = req.body
        const data = req.session;

        try {
            let newData = {
                title,
                description,
                logo: req.files[0].filename,
                leader_name,
                leader_pic: req.files[1].filename,
                leader_phone,
                order
            }

            await Contact_Commission.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Contact Commission`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Contact commission successful created');
            res.redirect('/cms/dynamic-pages/contact-commissions/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create contact commission`);
            res.redirect('/cms/dynamic-pages/contact-commissions/add');
        }
    }

    static async renderEditConcomPage(req, res) {
        const { id } = req.params;

        try {
            let info = await Contact_Commission.findOne({ where: { id: id } })

            let data = {
                id: info.id,
                title: info.title,
                description: info.description,
                logo: info.logo,
                leader_name: info.leader_name,
                leader_phone: info.leader_phone,
                leader_pic: info.leader_pic,
                order: info.order
            }

            res.render('contact_commission/edit', {
                title: `Edit Contact Commission`,
                legend: 'Edit Contact Commission',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                concom_list_active: 'active',
                data: data
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit contact commission`);
            res.redirect('/cms/dynamic-pages/contact-commissions/');
        }
    }

    static async getList(req, res) {
        let { length, draw, start, order, columns } = req.query;

        try {
            let response = await DataTableService.listConcom({ length, draw, start, order, columns });

            if (response.table) {
                res.json(response.table);
            } else {
                if (response.sqlMessage) {
                    throw ({
                        message: response.sqlMessage
                    })
                } else {
                    throw ({
                        message: response.error.message
                    })
                }
            }
        } catch (error) {
            res.redirect('/cms/home')
        }
    }

    static async editConcom(req, res) {
        const { title, description, leader_name, leader_phone, order } = req.body
        const { id } = req.params
        const data = req.session;
        let path = 'Public/photos/public/contact-commission/'

        try {
            let updatedData = {
                title,
                description,
                logo: req.files.length > 0 ? req.files[0].fieldname == 'concom_logo' ? req.files[0].filename : oldData.logo : oldData.logo,
                leader_name,
                leader_phone,
                leader_pic: req.files.length > 1 ? req.files[1].filename : req.files.length > 0 ? req.files[0].fieldname == 'leader_pic' ? req.files[0].filename : oldData.leader_pic : oldData.leader_pic,
                order,
            }

            await Contact_Commission.update(updatedData, { where: { id: id } });

            if (req.files.length > 0) {
                for (let i = 0; i < req.files.length; i++) {
                    if (req.files[i].fieldname == 'concom_logo' && oldData.logo) {
                        removePhoto(path + 'logo/' + oldData.logo);
                    } else if (req.files[i].fieldname == 'leader_pic' && oldData.leader_pic) {
                        removePhoto(path + 'leader/' + oldData.leader_pic);
                    }
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Contact Commission`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Contact commission successful updated');
            res.redirect('/cms/dynamic-pages/contact-commissions/')
        } catch (error) {
            if (req.files.length > 0) {
                for (let i = 0; i < req.files.length; i++) {
                    if (req.files[i].fieldname == 'concom_logo') {
                        removePhoto(path + 'logo/' + req.files[i].filename);
                    } else if (req.files[i].fieldname == 'leader_pic') {
                        removePhoto(path + 'leader/' + req.files[i].filename);
                    }
                }
            }
            req.flash('msg_error', error.message || `Got problem during edit contact commission`);
            res.redirect(`/cms/dynamic-pages/contact-commissions/edit/${id}`);
        }
    }

    static async deleteConcom(req, res) {
        const { concom_id } = req.body;
        const session = req.session

        try {
            let data = await Contact_Commission.findOne({ where: { id: concom_id } });
            let path = 'Public/photos/public/contact-commission/';

            await Contact_Commission.destroy({ where: { id: concom_id } })

            if (data.logo) {
                removePhoto(path + 'logo/' + data.logo);
            }

            if (data.leader_pic) {
                removePhoto(path + 'leader/' + data.leader_pic);
            }

            let log = {
                log: JSON.stringify(concom_id),
                method: `DELETE - Contact Commission`,
                user: session.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/contact-commissions/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete contact commission`);
            res.redirect(`/cms/dynamic-pages/contact-commissions/`);
        }
    }
}

module.exports = ContactCommissionController;