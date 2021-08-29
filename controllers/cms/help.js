const { Help, Log } = require('../../models');

class HelpController {
    static async renderHelp(req, res) {
        try {
            let completeList = [];

            let list = await Help.findAll({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        title: detail.title,
                        description: detail.description,
                        // section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('help', {
                title: 'Data of Help',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                help_list_active: 'active',
                data: completeList
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddHelp(req, res) {
        try {
            res.render('help/add', {
                title: 'Help',
                legend: 'Add Help',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                help_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render help add page`);
            res.redirect('/cms/dynamic-pages/help/')
        }
    }

    static async addHelp(req, res) {
        const data = req.session;
        let request = req.body;

        try {
            let newData = {
                title: request.title,
                description: request.description,
                section: request.section
            }

            await Help.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Help`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Help successful created');
            res.redirect('/cms/dynamic-pages/help/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create help`);
            res.redirect('/cms/dynamic-pages/help/add');
        }
    }

    static async renderEditHelp(req, res) {
        const { id } = req.params;

        try {
            let data = await Help.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'title',
                    'description',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                title: data.title,
                description: data.description,
                // section: data.section
            }

            res.render('help/edit', {
                title: `Help`,
                legend: 'Edit Help',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                help_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit help page`);
            res.redirect('/cms/dynamic-pages/help/');
        }
    }

    static async editHelp(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;

        try {
            let oldData = await Help.findOne({ where: { id: id } });

            let updatedData = {
                title: request.title ? request.title : oldData.title,
                description: request.description ? request.description : oldData.description,
                // section: request.section ? request.section : oldData.section,
            }

            await Help.update(updatedData, { where: { id: id } });

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Help`,
                user: data.name,
            }

            await Log.create(log);

            req.flash('msg_info', 'Help successful updated');
            res.redirect('/cms/dynamic-pages/help/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit help`);
            res.redirect(`/cms/dynamic-pages/help/edit/${id}`);
        }
    }

    static async deleteHelp(req, res) {
        const { help_id } = req.body;
        const data = req.session

        try {
            await Help.destroy({ where: { id: help_id } })

            let log = {
                log: JSON.stringify(help_id),
                method: `DELETE - Help`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/help/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete help`);
            res.redirect(`/cms/dynamic-pages/help/`);
        }
    }
}

module.exports = HelpController;