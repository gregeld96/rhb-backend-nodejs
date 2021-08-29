const { Mass_Schedule, Mass_Category, Mass_Section, Log, Commission, Need, User_Job_Event, Role, User_Event, User } = require('../../models');
const { Op } = require("sequelize");
const { singleDateConverter } = require('../../helpers/date-string');
const removePhoto = require('../../helpers/remove_photo');

class PenjadwalanController {
    static async renderAddCategory(req, res) {
        try {
            const sectionList = await Mass_Section.findAll({
                where: {
                    deletedAt: null
                }
            });
            let list = [];

            sectionList.forEach((section) => {
                let temp = {
                    id: section.id,
                    title: section.title
                }

                list.push(temp)
            })

            if (sectionList.length > 0) {
                res.render('mass/add-category-section', {
                    title: 'Add Mass Category',
                    section_mode: 'category',
                    legend: 'Add Mass Category',
                    list
                })
            } else {
                throw {
                    message: 'You are being redirecting because you do not have any sections'
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering add category page");
            res.redirect('/cms/penjadwalan/add-section');
        }
    }

    static async renderAddSection(req, res) {
        try {
            res.render('mass/add-category-section', {
                title: 'Add Section Category',
                section_mode: 'section',
                legend: 'Add Section Category'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async createCategory(req, res, next) {
        const { title, description, section_id, order } = req.body
        const data = req.session

        try {
            if (!title || !description) {
                throw {
                    message: 'Please complete all the field required'
                }
            } else {
                const newCategory = {
                    title,
                    description,
                    thumbnail: req.files.length > 0 ? req.files[0].filename : '',
                    section_id,
                    order
                }

                await Mass_Category.create(newCategory);

                let log = {
                    log: JSON.stringify(req.body),
                    method: `CREATE - Category`,
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', `Category ${title} successfully created`);
                res.redirect('/cms/penjadwalan/category');
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || "Some error occurred while create category.");
            res.redirect('/cms/penjadwalan/add-category');
        }
    }

    static async createSection(req, res, next) {
        const { title } = req.body
        const data = req.session

        try {
            if (!title) {
                throw {
                    message: 'Please complete all the field required'
                }
            } else {
                const newSection = {
                    title
                }

                await Mass_Section.create(newSection);

                let log = {
                    log: JSON.stringify(req.body),
                    method: `CREATE - Section`,
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', `Section ${title} successfully created`);
                res.redirect('/cms/penjadwalan/section');
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while create section.");
            res.redirect('/cms/penjadwalan/add-section');
        }
    }

    static async getSections(req, res, next) {
        try {
            const sectionList = await Mass_Section.findAll({
                where: {
                    deletedAt: null
                }
            });
            let list = [];

            await sectionList.forEach((section) => {
                let temp = {
                    id: section.id,
                    title: section.title
                }

                list.push(temp);
            })

            res.render('mass', {
                title: 'List Section of Mass',
                list_mass_menu_open: 'menu-open',
                list_mass_active: 'active',
                mass_section_active: 'active',
                section_mode: 'section',
                legend: 'List of Section Mass',
                list: list
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async getCategories(req, res, next) {
        try {
            const categoryList = await Mass_Category.findAll({
                where: {
                    deletedAt: null
                },
                include: [
                    { model: Mass_Section }
                ]
            });
            let list = [];

            await categoryList.forEach((category) => {
                let temp = {
                    id: category.id,
                    title: category.title,
                    thumbnail: category.thumbnail,
                    section: category.Mass_Section.title
                }

                list.push(temp);
            })

            res.render('mass', {
                title: 'List Category of Mass',
                list_mass_menu_open: 'menu-open',
                list_mass_active: 'active',
                mass_category_active: 'active',
                section_mode: 'category',
                legend: 'List of Category Mass',
                list: list
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderListSchedule(req, res) {
        const { category_id } = req.params;

        try {
            res.render('mass/schedule', {
                title: 'Mass Schedule',
                categoryId: category_id
            })
        } catch (error) {
            req.flash('msg_error', "Some error occurred while rendering schedule page. Please try again..");
            res.redirect('/cms/penjadwalan/category');
        }
    }

    static async getList(req, res, next) {
        let { category_id, length, draw, start, order, columns } = req.query;
        let selected;

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

            let list = await Mass_Schedule.findAndCountAll({
                where: {
                    [Op.and]: [
                        { category_id: category_id },
                        { deletedAt: null }
                    ]
                },
                order: [
                    [`${selected}`, `${order[0].dir}`]
                ],
                offset: Number(start),
                limit: Number(length),
            })

            let needOrder = [];

            for (let i = 0; i < list.rows.length; i++) {
                let temp = await Need.findOne({
                    where: { id: list.rows[i].need_id },
                    attributes: [
                        'ruangan',
                        'id',
                        'event_name'
                    ]
                })
                needOrder.push(temp);
            }

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let temp, ruangan, date, dateStart, dateEnd, location;
                temp = needOrder[key].ruangan ? JSON.parse(needOrder[key].ruangan) : temp = null;
                location = temp ? temp.location ? temp.location : 'TBA' : 'TBA'
                ruangan = temp ? temp.roomName ? temp.roomName : 'TBA' : 'TBA'
                dateStart = singleDateConverter(list.rows[key]['time_start'])
                dateEnd = singleDateConverter(list.rows[key]['time_end'])

                table.data.push([
                    dateStart,
                    dateEnd,
                    needOrder[key]['event_name'],
                    location,
                    ruangan,
                    needOrder[key]['id'], //need id
                    list.rows[key]['id'] //mass schedule id
                ]);
            }

            res.json(table);
        } catch (error) {
            console.log({ error });
        }
    }

    static async renderEditSection(req, res) {
        const { id } = req.params;
        try {
            const detailData = await Mass_Section.findOne({ where: { id: id } })

            let data = {
                id: detailData.id,
                title: detailData.title,
            }


            res.render('mass/edit-category-section', {
                title: 'Edit Section of Mass',
                section_mode: 'section',
                legend: 'Edit Section Mass',
                data
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editSection(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        const data = req.session

        try {
            await Mass_Section.update({ title: title }, { where: { id: id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Section Event`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'Section berhasil di edit');
            res.redirect(`/cms/penjadwalan/section`);
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while edit section. Please try again..");
            res.redirect(`/cms/penjadwalan/edit-section/${id}`);
        }
    }

    static async renderEditCategory(req, res) {
        const { id } = req.params;
        try {
            const sectionList = await Mass_Section.findAll({
                where: {
                    deletedAt: null
                }
            });
            let list = [];

            sectionList.forEach((section) => {
                let temp = {
                    id: section.id,
                    title: section.title
                }

                list.push(temp)
            })

            const detailData = await Mass_Category.findOne({ where: { id: id }, include: [{ model: Mass_Section }] })

            let data = {
                id: detailData.id,
                title: detailData.title,
                description: detailData.description,
                section: detailData.Mass_Section.id,
                thumbnail: detailData.thumbnail
            }


            res.render('mass/edit-category-section', {
                title: 'Edit Category of Mass',
                section_mode: 'category',
                legend: 'Edit Category Mass',
                list: list,
                data
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editCategory(req, res) {
        const { id } = req.params;
        const { title, description, section_id } = req.body;
        const data = req.session

        try {
            const previous_data = await Mass_Category.findOne({ where: { id: id } });

            if (req.files.length > 0) {
                if (previous_data.thumbnail) {
                    removePhoto('Public/photos/public/mass/' + previous_data.thumbnail)
                }
            }

            let updatedCategory = {
                title,
                description,
                section_id,
                thumbnail: req.files.length > 0 ? req.files[0].filename : previous_data.thumbnail
            }

            await Mass_Category.update(updatedCategory, { where: { id: id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Category Event`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'Category berhasil di edit');
            res.redirect(`/cms/penjadwalan/category`);
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || "Some error occurred while edit category. Please try again..");
            res.redirect(`/cms/penjadwalan/edit-category/${id}`);
        }
    }

    static async deleteSection(req, res) {
        const { mode_id, mode } = req.body
        const data = req.session

        try {
            let currentDate = {
                deletedAt: new Date()
            };

            if (mode == 'section') {
                await Mass_Section.update(currentDate, { where: { id: mode_id } })
            } else {
                await Mass_Category.update(currentDate, { where: { id: mode_id } })
            }


            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - ${mode}`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful delete ${mode}.`);

            if (mode == 'section') {
                res.redirect(`/cms/penjadwalan/section`);
            } else {
                res.redirect(`/cms/penjadwalan/category`);
            }
        } catch (error) {
            req.flash('msg_error', error.message || `Some error occurred while delete ${mode}. Please try again..`);
            if (mode == 'section') {
                res.redirect(`/cms/penjadwalan/section`);
            } else {
                res.redirect(`/cms/penjadwalan/category`);
            }
        }
    }

}

module.exports = PenjadwalanController;