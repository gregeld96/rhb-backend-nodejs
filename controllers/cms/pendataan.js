const { User } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');
const { Op } = require("sequelize");
const { onlyDate } = require('../../helpers/date-string');
const member_generator = require('../../helpers/member_id_generator');

class PendataanController {
    static async renderListUser(req, res) {
        try {
            res.render('pendataan', {
                title: `List of Registered`,
                register_list_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async getAllUser(req, res, next) {
        let { length, draw, start, order, columns, search, status } = req.query;
        let selected, statusCode;

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

            if (status == 'true') {
                statusCode = true
            } else {
                statusCode = false
            }

            let list = await User.findAndCountAll({
                where: {
                    [Op.and]: [
                        { isVerified: statusCode },
                        {
                            full_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        }
                    ],
                    deletedAt: null
                },
                order: [
                    [`${selected}`, `${order[0].dir}`]
                ],
                offset: Number(start),
                limit: Number(length),
            })

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let BOD;
                BOD = onlyDate(list.rows[key]['birth_of_date'])

                table.data.push([
                    list.rows[key]['full_name'],
                    list.rows[key]['phone_number'],
                    list.rows[key]['email'],
                    list.rows[key]['address'],
                    list.rows[key]['gender'],
                    list.rows[key]['birth_place'],
                    BOD,
                    list.rows[key]['occupation'],
                    list.rows[key]['identification_file'],
                    list.rows[key]['id'], //user id
                    status
                ]);
            }

            res.json(table);
        } catch (error) {
            next({ error });
        }
    }

    static async updateStatusUser(req, res, next) {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id: id } })
            const memberId = member_generator(id);
            await User.update({ isVerified: true, member_id: memberId }, { where: { id: id } });
            req.flash('msg_info', `Successfuly update ${user.full_name} status`);
            res.redirect('/cms/pendataan-jemaat/list');
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while updating user status verification");
            res.redirect('/cms/pendataan-jemaat/list');
        }
    }

    static async renderEditFileUser(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id: id } });

            res.render('pendataan/update', {
                title: `Edit File User`,
                legend: `Edit File ${user.full_name}`,
                data: {
                    id: user.id,
                    name: user.full_name,
                    identification_file: user.identification_file
                }
            })
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred when rendering edit page");
            res.redirect('/cms/pendataan-jemaat/list');
        }
    }

    static async updateFilesUser(req, res) {
        const { id } = req.params;
        const { full_name } = req.body

        try {
            const userInfo = await User.findOne({ where: { id: id } });

            const updatedUser = {
                identification_file: req.files.length > 0 ? req.files[0].filename : userInfo.identification_file,
            }

            await User.update(updatedUser, { where: { id: id } })

            if (req.files.length > 0) {
                if (req.files[0].fieldname == 'identification_file' && userInfo.identification_file) {
                    removePhoto('Public/photos/private/user/ktp/' + userInfo.identification_file)
                }
            }

            req.flash('msg_info', `Successfuly update ${full_name} file`);
            res.redirect('/cms/pendataan-jemaat/list');
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || "Some error occurred while updating user status verification");
            res.redirect(`/cms/pendataan-jemaat/edit/${id}`);
        }
    }
}

module.exports = PendataanController;