const { Flash, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class FlashController {
    static async renderFlash(req, res) {
        try {
            let completeList = [];

            let list = await Flash.findAll({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'image',
                    'order'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        title: detail.title,
                        description: detail.description,
                        image: detail.image,
                        order: detail.order
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('flash', {
                title: 'List of Flash',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                flash_list_active: 'active',
                data: completeList
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddFlash(req, res) {
        try {
            res.render('flash/add', {
                title: 'Flash',
                legend: 'Add Flash (Introduction)',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                flash_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render flash add page`);
            res.redirect('/cms/dynamic-pages/flash/')
        }
    }

    static async addFlash(req, res) {
        const data = req.session;
        let request = req.body;
        let files = req.files;

        try {
            let newData = {
                title: request.title,
                description: request.description,
                image: files[0].filename,
                order: request.order
            }

            let response = await Flash.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Flash`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Flash successful created');
            res.redirect('/cms/dynamic-pages/flash/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create flash`);
            res.redirect('/cms/dynamic-pages/flash/add');
        }
    }

    static async renderEditFlash(req, res) {
        const { id } = req.params;

        try {
            let data = await Flash.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'title',
                    'description',
                    'image',
                    'order'
                ]
            });

            let temp = {
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image,
                order: data.order
            }

            res.render('flash/edit', {
                title: `Flash`,
                legend: 'Edit Flash',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                flash_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit flash page`);
            res.redirect('/cms/dynamic-pages/flash/');
        }
    }

    static async editFlash(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;
        let files = req.files;

        try {
            let oldData = await Flash.findOne({ where: { id: id } });

            let updatedData = {
                title: request.title ? request.title : oldData.title,
                description: request.description ? request.description : oldData.description,
                image: files.length > 0 ? files[0].filename : oldData.image,
                order: request.order ? request.order : oldData.order,
            }

            await Flash.update(updatedData, { where: { id: id } });

            if (files.length > 0) {
                let path = 'Public/photos/public/flash-page/'
                if (oldData.image) {
                    removePhoto(path + oldData.image);
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Flash`,
                user: data.name,
            }

            await Log.create(log);

            req.flash('msg_info', 'Flash successful updated');
            res.redirect('/cms/dynamic-pages/flash/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit flash`);
            res.redirect(`/cms/dynamic-pages/flash/edit/${id}`);
        }
    }

    static async deleteFlash(req, res) {
        const { flash_id } = req.body;
        const session = req.session

        try {
            let data = await Flash.findOne({ where: { id: flash_id } });
            let path = 'Public/photos/public/flash-page/'

            await Flash.destroy({ where: { id: flash_id } })

            if (data.image) {
                removePhoto(path + data.image);
            }

            let log = {
                log: JSON.stringify(flash_id),
                method: `DELETE - Flash`,
                user: session.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/flash/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete flash`);
            res.redirect(`/cms/dynamic-pages/flash/`);
        }
    }
}

module.exports = FlashController;