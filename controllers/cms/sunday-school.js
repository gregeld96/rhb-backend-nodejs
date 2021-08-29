const { User, User_Commission_Role, Children, Sunday_School_Category, Sunday_School_Schedule, Sunday_Schedule_Children, Log } = require('../../models');
const { singleDateConverter } = require('../../helpers/date-string');
const removePhoto = require('../../helpers/remove_photo');

class SundaySchoolCMSController {
    static async renderListCategory(req, res) {
        let list = []
        try {
            const categoryList = await Sunday_School_Category.findAll({
                where: {
                    deletedAt: null
                }
            });

            if (categoryList.length > 0) {
                categoryList.forEach((category) => {
                    list.push({
                        id: category.id,
                        age_min: category.age_min,
                        age_max: category.age_max,
                        thumbnail: category.thumbnail,
                        name: category.name,
                        sunday_school_active: 'active'
                    })
                })
            }

            res.render('sunday-school/category', {
                title: 'List of Sunday School Category',
                list: list
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async getScheduleSundaySchool(req, res) {
        let { category_id, length, draw, start, order, columns } = req.query;
        let selected;
        try {

            for (let key in columns) {
                if (key == order[0].column) {
                    selected = columns[key].name
                }
            }

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            let list = await Sunday_School_Schedule.findAndCountAll({
                where: {
                    category_id: category_id,
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
                let child = await Sunday_Schedule_Children.count({ where: { sunday_school_id: list.rows[key]['id'] } })
                let dateStart = singleDateConverter(list.rows[key]['time_start'])
                let dateEnd = singleDateConverter(list.rows[key]['time_end'])

                table.data.push({
                    time_start: dateStart,
                    time_end: dateEnd,
                    quota: `${child}/${list.rows[key]['quota']}`,
                    activities: list.rows[key]['activities'],
                    id: list.rows[key]['id'],
                });
            }

            res.json(table);
        } catch (error) {
            console.log(error);
        }
    }

    static async renderListSchedule(req, res) {
        const { id } = req.params;

        try {
            res.render('sunday-school/schedule', {
                title: 'List of Sunday School Schedule',
                data: {
                    id
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async renderAddCategory(req, res, next) {
        try {
            res.render('sunday-school/add', {
                title: 'Add Sunday School Category',
                legend: 'Add Sunday School Category',
                section_mode: 'category'
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async renderAddSchedule(req, res) {
        let { permission } = req.session
        let categoryList, memberList;
        try {
            categoryList = await Sunday_School_Category.findAll({
                where: {
                    deletedAt: null
                }
            });
            memberList = await User_Commission_Role.findAll({
                where: {
                    commission_id: permission.commission_id,
                    deletedAt: null
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'full_name']
                    }
                ]
            })

            if (categoryList.length > 0) {
                let list = [];
                let members = [];

                if (memberList.length > 0) {
                    await memberList.forEach((user) => {
                        let temp = {
                            id: user.id,
                            name: user.User.full_name
                        }

                        members.push(temp)
                    });

                    await categoryList.forEach((category) => {
                        let temp = {
                            id: category.id,
                            title: category.name,
                        }

                        list.push(temp);
                    })

                    res.render('sunday-school/add', {
                        title: 'Add Sunday School Schedule',
                        legend: 'Add Sunday School Schedule',
                        categories: list,
                        members: members,
                        section_mode: 'section'
                    })
                } else {
                    throw {
                        message: 'You are being redirecting because there is no members commission'
                    }
                }
            } else {
                throw {
                    message: 'You are being redirecting because there is no categories'
                }
            }
        } catch (error) {
            if (!categoryList.length) {
                req.flash('msg_error', error.message || "Some error occurred while redering add event page");
                res.redirect('/cms/sunday-schools/add-category');
            } else {
                req.flash('msg_error', error.message || "Some error occurred while redering add event page");
                res.redirect('/cms/commission/add');
            }
        }
    }

    static async addCategory(req, res) {
        const { title, age_min, age_max } = req.body;
        const data = req.session

        try {
            if (!title || !age_min || !age_max || req.files.length < 1) {
                throw ({
                    message: 'Fill up all the field'
                })
            } else {
                await Sunday_School_Category.create({
                    name: title,
                    age_min: age_min,
                    age_max: age_max,
                    thumbnail: req.files[0].filename
                });

                let log = {
                    log: JSON.stringify(req.body),
                    method: `CREATE - Category Sunday School`,
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', `Successful create category ${title}`);
                res.redirect('/cms/sunday-schools/');
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || "Some error occurred while add category");
            res.redirect('/cms/sunday-schools/add-category');
        }
    }

    static async addSchedule(req, res) {
        const { quota, time_start, time_end, category_id, member, activities } = req.body;
        const data = req.session;

        try {
            if (!(quota || time_start || time_end || activities || member || category_id)) {
                throw ({
                    message: 'Fill up all the field'
                })
            } else {
                const user = await User.findOne({ where: { full_name: member } })
                await Sunday_School_Schedule.create({ quota, time_start, time_end, activities, category_id, user_id: user.id });
                let log = {
                    log: JSON.stringify(req.body),
                    method: `CREATE - Schedule Sunday School`,
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', `Successful create schedule`);
                res.redirect('/cms/sunday-schools/');
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while add schedule");
            res.redirect('/cms/sunday-schools/add-schedule');
        }
    }

    static async renderEditCategory(req, res) {
        const { category_id } = req.params

        try {
            const category = await Sunday_School_Category.findOne({ where: { id: category_id } })
            res.render('sunday-school/edit', {
                title: `Edit Category`,
                legend: `Edit Category ${category.name}`,
                data: {
                    id: category_id,
                    name: category.name,
                    thumbnail: category.thumbnail,
                    age_min: category.age_min,
                    age_max: category.age_max
                },
                section_mode: 'category'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editCategory(req, res) {
        const { category_id } = req.params
        const { title, age_min, age_max } = req.body;
        const data = req.session;

        try {
            const previous_data = await Sunday_School_Category.findOne({ where: { id: category_id } });

            let updatedCategory = {
                name: title,
                age_min: age_min,
                age_max: age_max,
                thumbnail: req.files.length > 0 ? req.files[0].filename : previous_data.thumbnail
            }

            if (req.files.length > 0) {
                if (previous_data.thumbnail) {
                    removePhoto('Public/photos/public/sunday-school/' + previous_data.thumbnail)
                }
            }

            await Sunday_School_Category.update(updatedCategory, { where: { id: category_id } });

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Category Sunday School`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful edit category ${title}`);
            res.redirect('/cms/sunday-schools/');
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || "Some error occurred while edit category");
            res.redirect('/cms/sunday-schools/');
        }
    }

    static async renderEditSchedule(req, res) {
        const { id } = req.params
        let { permission } = req.session
        let categoryList, memberList;

        try {
            const schedule = await Sunday_School_Schedule.findOne({
                where: { id: id },
                include: [
                    {
                        model: User
                    }
                ]
            })

            categoryList = await Sunday_School_Category.findAll({
                where: {
                    deletedAt: null
                }
            });
            memberList = await User_Commission_Role.findAll({
                where: {
                    commission_id: permission.commission_id,
                    deletedAt: null
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'full_name']
                    }
                ]
            })

            let list = [];
            let members = [];

            await memberList.forEach((user) => {
                let temp = {
                    id: user.id,
                    name: user.User.full_name
                }

                members.push(temp)
            });

            await categoryList.forEach((category) => {
                let temp = {
                    id: category.id,
                    title: category.name,
                }

                list.push(temp);
            })

            res.render('sunday-school/edit', {
                title: `Edit Schedule`,
                legend: `Edit Schedule`,
                data: {
                    id: schedule.id,
                    quota: schedule.quota,
                    time_start: schedule.time_start.toISOString().substring(0, 23),
                    time_end: schedule.time_end.toISOString().substring(0, 23),
                    activities: schedule.activities,
                    category_id: schedule.category_id,
                    member: {
                        name: schedule.User.full_name
                    }
                },
                members: members,
                categories: list,
                section_mode: 'section'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editSchedule(req, res) {
        const { id } = req.params
        const { quota, time_start, time_end, category_id, member, activities } = req.body;
        const data = req.session;

        try {
            const user = await User.findOne({ where: { full_name: member } })

            let updatedSchedule = {
                quota,
                time_start,
                time_end,
                category_id,
                user_id: user.id,
                activities
            }

            await Sunday_School_Schedule.update(updatedSchedule, { where: { id: id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Schedule Sunday School`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful edit schedule`);
            res.redirect(`/cms/sunday-schools/${category_id}`);
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while edit schedule");
            res.redirect('/cms/sunday-schools/');
        }
    }

    static async getChildSunday(req, res) {
        const { id } = req.params

        try {
            const listChild = await Sunday_Schedule_Children.findAll({ where: { sunday_school_id: id, deletedAt: null }, include: [{ model: Children }] })
            const schedule = await Sunday_School_Schedule.findOne({ where: { id: id } })
            let list = []

            if (listChild) {
                listChild.forEach((child) => {
                    list.push({
                        name: child.Children.full_name,
                        age: age_calculator(child.Children.birth_of_date),
                        certificate: child.Children.child_birth_certification_file,
                        gender: Children.Children.gender
                    })
                })
            }

            res.render('sunday-school/child', {
                title: 'Children Apply',
                legend: 'List of Children',
                list: list,
                data: {
                    id: schedule.category_id
                }
            })
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while getting child list");
            res.redirect('/cms/sunday-schools/');
        }
    }

    static async deleteCategory(req, res) {
        const { category_id } = req.body
        const data = req.session

        try {
            let currentDate = {
                deletedAt: new Date()
            }

            await Sunday_School_Category.update(currentDate, { where: { id: category_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - Category Sunday School`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful delete category`);
            res.redirect(`/cms/sunday-schools/`);
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while delete Category");
            res.redirect('/cms/sunday-schools/')
        }
    }

    static async deleteSchedule(req, res) {
        const { schedule_id } = req.body
        const data = req.session

        try {
            let currentDate = {
                deletedAt: new Date()
            }
            let schedule = await Sunday_School_Schedule.findOne({ where: { id: schedule_id } })
            await Sunday_School_Schedule.update(currentDate, { where: { id: schedule_id } })
            await Sunday_Schedule_Children.update(currentDate, { where: { sunday_school_id: schedule_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - Schedule Sunday School`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful delete schedule`);
            res.redirect(`/cms/sunday-schools/${schedule.category_id}`);
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while delete schedule");
            res.redirect('/cms/sunday-schools/')
        }
    }
}

module.exports = SundaySchoolCMSController;