const { Testimonial, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class TestimonialController {
    static async renderTestiPage(req, res) {
        try {
            let completeList = [];

            let list = await Testimonial.findAll({
                attributes: [
                    'id',
                    'name',
                    'testimony',
                    'photo',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        name: detail.name,
                        photo: detail.photo,
                        testimony: detail.testimony,
                        section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('testimonial', {
                title: 'Testimonial',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                data: completeList,
                testimonial_list_active: 'active'
            })
        } catch (error) {
            console.log(error.message);
            res.redirect('/cms/home')
        }
    }

    static async renderAddTestiPage(req, res) {
        try {
            res.render('testimonial/add', {
                title: 'Testimonial',
                legend: 'Add Testimonial',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                testimonial_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render testimonial page`);
            res.redirect('/cms/dynamic-pages/testimonial/')
        }
    }

    static async addTesti(req, res) {
        const data = req.session;
        let request = req.body;
        let path = 'Public/photos/public/testimonial/'

        try {
            let newData = {
                name: request.name,
                testimony: request.testimony,
                section: request.section,
                photo: req.files[0].filename,
            }

            await Testimonial.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Testimonial`,
                user: data.name
            }

            await Log.create(log);


            req.flash('msg_info', 'Testimonial successful created');
            res.redirect('/cms/dynamic-pages/testimonial/')
        } catch (error) {
            removePhoto(path + req.files[0].filename);
            req.flash('msg_error', error.message || `Got problem during create testimonial`);
            res.redirect('/cms/dynamic-pages/testimonial/add');
        }
    }

    static async renderEditTestiPage(req, res) {
        const { id } = req.params;

        try {
            let data = await Testimonial.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'name',
                    'testimony',
                    'photo',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                name: data.name,
                photo: data.photo,
                testimony: data.testimony,
                section: data.section
            }

            res.render('testimonial/edit', {
                title: `Testimonial`,
                legend: 'Edit Testimonial',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                testimonial_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit testimonial page`);
            res.redirect('/cms/dynamic-pages/testimonial/');
        }
    }

    static async editTesti(req, res) {
        const { id } = req.params
        const data = req.session;
        let path = 'Public/photos/public/testimonial/'
        let request = req.body;

        try {
            let oldData = await Testimonial.findOne({ where: { id: id } });

            let updatedData = {
                name: request.name ? request.name : oldData.name,
                testimony: request.testimony ? request.testimony : oldData.testimony,
                photo: req.files.length > 0 ? req.files[0].filename : oldData.photo,
                section: request.section ? request.section : oldData.section
            }

            await Testimonial.update(updatedData, { where: { id: id } });

            if (req.files.length > 0) {
                if (oldData.photo) {
                    removePhoto(path + oldData.photo);
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Testimonial`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', response.message);
            res.redirect('/cms/dynamic-pages/testimonial/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit testimonial`);
            res.redirect(`/cms/dynamic-pages/testimonial/edit/${id}`);
        }
    }

    static async deleteTesti(req, res) {
        const { testimonial_id } = req.body;
        const session = req.session

        try {
            let data = await Testimonial.findOne({ where: { id: testimonial_id } });
            let path = 'Public/photos/public/testimonial/'

            await Testimonial.destroy({ where: { id: testimonial_id } })

            if (data.photo) {
                removePhoto(path + data.photo);
            }

            let log = {
                log: JSON.stringify(id),
                method: `DELETE - Testimonial`,
                user: session.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/testimonial/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete testimonial`);
            res.redirect(`/cms/dynamic-pages/testimonial/`);
        }
    }
}

module.exports = TestimonialController;