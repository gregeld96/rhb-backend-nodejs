const { Shepherd_Letter, Log } = require('../../models');
const { Op } = require('sequelize');
const removePhoto = require('../../helpers/remove_photo');
const { singleDateConverter } = require('../../helpers/date-string');

class ShepherdController {
    static async renderListMessage(req, res) {
        try {
            res.render('shepherd', {
                title: 'List of Pasteur Message',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                message_list_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async getListMessage(req, res) {
        let { search, length, draw, start, order, columns } = req.query;
        let selected, list;

        try {
            columns.forEach((column) => {
                column.data == order[0].column ? selected = column.name : ''
            })

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            list = await Shepherd_Letter.findAndCountAll({
                where: {
                    title: {
                        [Op.like]: `%${search.value}%`
                    },
                    deletedAt: null
                },
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let date_publish, newStr, maxLength = 300;
                date_publish = singleDateConverter(list.rows[key]['publishedAt']);
                if (list.rows[key]['description'].length > maxLength) {
                    newStr = list.rows[key]['description'].substring(0, maxLength);
                } else {
                    newStr = list.rows[key]['description'];
                }

                table.data.push([
                    list.rows[key]['title'],
                    `${newStr}....`,
                    date_publish,
                    list.rows[key]['id']
                ]);
            }

            res.json(table);

        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddMessage(req, res) {
        try {
            res.render('shepherd/add', {
                title: 'Add Pasteur Message',
                legend: 'Add Pasteur Message',
                pasteur_message_menu_open: 'menu-open',
                pasteur_message_active: 'active',
                message_list_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async addLetter(req, res) {
        const { title, description, publishedAt } = req.body
        const data = req.session
        
        try {
            let newLetter = {
                title,
                description,
                publishedAt,
                // image: req.files.length > 0 ? req.files[0].filename : ''
            }

            let created = await Shepherd_Letter.create(newLetter);
            if (created) {
                let log = {
                    log: JSON.stringify(req.body),
                    method: `CREATE - Pasteur Message`,
                    user: data.name
                }
    
                await Log.create(log)

                req.flash('msg_info', `${title} successful created`);
                res.redirect(`/cms/pasteur-message/`)
            } else {
                throw ({
                    message: 'Got problem during create, please try again'
                })
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || `Got problem during create ${title}`);
            res.redirect(`/cms/pasteur-message/add-message`)
        }
    }

    static async renderEditMessage(req, res) {
        const { id } = req.params

        try {
            const data = await Shepherd_Letter.findOne({ where: { id: id } })

            res.render('shepherd/edit', {
                title: 'Edit Pasteur Message',
                legend: 'Edit Pasteur Message',
                pasteur_message_menu_open: 'menu-open',
                pasteur_message_active: 'active',
                message_list_active: 'active',
                data: {
                    id: data.id,
                    title: data.title,
                    publishedAt: data.publishedAt.toISOString().substring(0, 10),
                    description: data.description,
                    image: data.image
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async updateLetter(req, res) {
        const { title, description, publishedAt } = req.body;
        const { id } = req.params;
        const data = req.session

        try {
            const letter = await Shepherd_Letter.findOne({ where: { id: id } })

            if (req.files.length > 0) {
                if (letter.image) {
                    removePhoto(letter.image)
                }
            }

            let updatedLetter = {
                title: title ? title : letter.title,
                description: description ? description : letter.description,
                publishedAt: publishedAt ? publishedAt : letter.publishedAt,
                // image: req.files.length > 0 ? req.files[0].path : letter.image
            }

            const update = await Shepherd_Letter.update(updatedLetter, { where: { id: id } });

            if (update) {
                let log = {
                    log: JSON.stringify(req.body),
                    method: `UPDATE - Pasteur Message`,
                    user: data.name
                }
    
                await Log.create(log)

                req.flash('msg_info', `${title} successful updated`);
                res.redirect(`/cms/pasteur-message/`)
            } else {
                throw ({
                    message: 'Got a problem during update, please try again'
                })
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || `Got problem during update ${title}`);
            res.redirect(`/cms/pasteur-message/`)
        }
    }

    static async renderDetailMessage(req, res) {
        const { id } = req.params

        try {
            const data = await Shepherd_Letter.findOne({ where: { id: id } })

            res.render('shepherd/detail', {
                title: `Pasteur Message (${data.title})`,
                legend: `${data.title}`,
                pasteur_message_menu_open: 'menu-open',
                pasteur_message_active: 'active',
                message_list_active: 'active',
                data: {
                    id: data.id,
                    title: data.title,
                    publishedAt: data.publishedAt.toISOString().substring(0, 10),
                    description: data.description,
                    image: data.image
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteLetter(req, res) {
        const { message_id } = req.body;
        const data = req.session;

        try {
            let currentDate = {
                deletedAt: new Date()
            }

            await Shepherd_Letter.update(currentDate, { where: { id: message_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - Pasteur Message`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful delete message`);
            res.redirect(`/cms/pasteur-message/`)
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete message`);
            res.redirect(`/cms/pasteur-message/`)
        }
    }
}

module.exports = ShepherdController;