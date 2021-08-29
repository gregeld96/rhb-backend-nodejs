const { User, Children, Sunday_School_Category, Sunday_School_Schedule, Sunday_Schedule_Children } = require('../models');
const { Op } = require("sequelize");
const { hourStartEnd, dateAndDay, userInput } = require('../helpers/date-string');
const age_calculator = require('../helpers/age_calculation')

class SundaySchoolController {
    static async getSchedule(req, res, next) {
        try {
            let currentDate = new Date();
            let day = currentDate.getDay();
            let listSundaySchool, completeData = [];

            if (day === 0) {
                let date = currentDate.getDate() + 1;
                let nextDate = new Date().setDate(date)
                currentDate.setDate(currentDate.getDate() - 1);

                listSundaySchool = await Sunday_School_Schedule.findAll({
                    where: {
                        time_start: {
                            [Op.and]: {
                                [Op.gt]: currentDate,
                                [Op.lt]: nextDate
                            }
                        },
                        deletedAt: null
                    },
                    include: [
                        {
                            model: Sunday_School_Category,
                        },
                        {
                            model: User
                        }
                    ]
                })
            } else {
                listSundaySchool = await Sunday_School_Schedule.findAll({
                    where: {
                        time_start: {
                            [Op.gt]: currentDate
                        },
                        deletedAt: null
                    },
                    include: [
                        {
                            model: Sunday_School_Category
                        },
                        {
                            model: User
                        }
                    ]
                })
            }

            if (listSundaySchool.length > 0) {
                for (let detail of listSundaySchool) {

                    let participant = await Sunday_Schedule_Children.findAll({
                        where: {
                            sunday_school_id: detail.id
                        }
                    })

                    let temp = {
                        id: detail.id,
                        quota: `${participant.length}/${detail.quota}`,
                        title: detail.Sunday_School_Category.name,
                        day: dateAndDay(detail.time_start) || 'Setiap Minggu',
                        time: hourStartEnd(detail.time_start, detail.time_end),
                        age_min: detail.Sunday_School_Category.age_min,
                        age_max: detail.Sunday_School_Category.age_max,
                        pic: detail.User.full_name,
                        activities: detail.activities.split(','),
                        thumbnail: detail.Sunday_School_Category.thumbnail,
                    }

                    completeData.push(temp)
                }
            } else {
                completeData = listSundaySchool;
            }

            res.status(200).json({ data: completeData, message: '' });
        } catch (error) {
            next({ error });
        }

    }

    static async getListChildUser(req, res, next) {
        const { schedule_id, user_id } = req.params;

        try {
            let childrenId = [], children = [];

            let event = await Sunday_School_Schedule.findOne({
                where: {
                    id: schedule_id
                },
                include: [
                    {
                        model: Sunday_School_Category
                    }
                ]
            })

            let listedChildren = await Sunday_Schedule_Children.findAll({
                where: {
                    sunday_school_id: schedule_id,
                    user_id: user_id,
                    status: {
                        [Op.or]: [true, null]
                    }
                }
            });

            if (listedChildren.length > 0) {
                listedChildren.forEach(detail => {
                    childrenId.push(detail.child_id)
                });
            } else {
                childrenId = [];
            }

            let listUserChild = await Children.findAll({
                where: {
                    [Op.and]: [
                        {
                            user_id: user_id,
                            deletedAt: null
                        },
                        {
                            id: {
                                [Op.notIn]: childrenId
                            }
                        }
                    ]

                }
            })

            if (listUserChild.length > 0) {
                listUserChild.forEach(detail => {
                    let age = age_calculator(detail.birth_of_date);
                    if ((age >= event.Sunday_School_Category.age_min) && (age <= event.Sunday_School_Category.age_max)) {
                        children.push(detail);
                    }
                })
            } else {
                children = [];
            }

            res.status(200).json({ data: children, message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async childJoin(req, res, next) {
        const { schedule_id } = req.params;
        const userId = req.userId;
        let request = req.body;

        try {
            let event = await Sunday_School_Schedule.findOne({
                where: {
                    id: schedule_id
                }
            })

            let participant = await Sunday_Schedule_Children.findAll({
                where: {
                    sunday_school_id: schedule_id,
                    status: {
                        [Op.or]: [true, null]
                    }
                }
            })

            let total = participant.length + request.children.length;

            if ((participant.length < event.quota) && (total < event.quota)) {
                await request.children.forEach(childData => {
                    Sunday_Schedule_Children.create({ child_id: childData.id, sunday_school_id: schedule_id, user_id: userId })
                })
            } else {
                throw ({
                    status: 400,
                    message: 'Quota sudah full'
                })
            }

            res.status(200).json({ message: 'Anak anda sudah terdaftar' })
        } catch (error) {
            next({ error });
        }
    }
}

module.exports = SundaySchoolController;