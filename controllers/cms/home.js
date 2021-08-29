const { Log, Home } = require('../../models');

class HomeController {
    static async renderHome(req, res) {
        try {
            let completeList = [];

            let list = await Home.findAll({
                attributes: [
                    'id',
                    'area',
                    'day',
                    'time',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        area: detail.area,
                        day: detail.day,
                        time: detail.time,
                        section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('home-page', {
                title: 'List of HOME',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                home_list_active: 'active',
                data: completeList
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddHome(req, res) {
        try {
            res.render('home-page/add', {
                title: 'Home',
                legend: 'Add Home',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                home_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render home add page`);
            res.redirect('/cms/dynamic-pages/home/')
        }
    }

    static async addHome(req, res) {
        const data = req.session;
        let request = req.body;

        try {
            let newData = {
                area: request.area,
                day: request.day,
                time: request.time,
                section: request.section
            }

            let response = await Home.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - HOME`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'HOME successful created');
            res.redirect('/cms/dynamic-pages/home/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during create home`);
            res.redirect('/cms/dynamic-pages/home/add');
        }
    }

    static async renderEditHome(req, res) {
        const { id } = req.params;

        try {
            let data = await Home.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'area',
                    'day',
                    'time',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                area: data.area,
                day: data.day,
                time: data.time,
                section: data.section
            }

            res.render('home-page/edit', {
                title: `Home`,
                legend: 'Edit Home',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                home_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit home page`);
            res.redirect('/cms/dynamic-pages/home/');
        }
    }

    static async editHome(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;

        try {
            let oldData = await Home.findOne({ where: { id: id } });

            let updatedData = {
                day: request.day ? request.day : oldData.day,
                time: request.time ? request.time : oldData.time,
                area: request.area ? request.area : oldData.area,
                section: request.section ? request.section : oldData.section,
            }

            let response = await Home.update(updatedData, { where: { id: id } });

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - HOME`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'HOME successful updated');
            res.redirect('/cms/dynamic-pages/home/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during edit home`);
            res.redirect(`/cms/dynamic-pages/home/edit/${id}`);
        }
    }

    static async deleteHome(req, res) {
        const { home_id } = req.body;
        const data = req.session

        try {
            await Home.destroy({ where: { id: home_id } })

            let log = {
                log: JSON.stringify(home_id),
                method: `DELETE - HOME`,
                user: data.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/home/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete home`);
            res.redirect(`/cms/dynamic-pages/home/`);
        }
    }
}

module.exports = HomeController;