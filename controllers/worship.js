const { Mass_Schedule, Mass_Category, Mass_Section, Need, Role, User_Event, User } = require('../models');
const { Op } = require("sequelize");
const { hourStartEnd, onlyDate, reminderDate, dateAndDay } = require('../helpers/date-string');

class WorshipController {
    static async getSections(req, res, next) {
        try {
            let list = []
            const sectionData = await Mass_Section.findAll({
                include: [
                    {
                        model: Mass_Category,
                        attributes: ['id', 'title', 'thumbnail', 'description']
                    }
                ],
                order: [
                    [{ model: Mass_Category }, "order", `ASC`]
                ]
            })

            sectionData.forEach(section => {
                let temp = {
                    id: section.id,
                    title: section.title,
                    categories: section.Mass_Categories
                }

                list.push(temp);
            })

            res.status(200).json({ data: list, message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async getWorshipList(req, res, next) {
        const { category_id } = req.params
        const userId = req.userId;

        try {
            let completeData = [];
            let listScheduleIds = [];
            let userEvents = [];
            let currentDate = new Date();

            let schedules = await Mass_Schedule.findAll({
                where: {
                    [Op.and]: {
                        category_id: category_id,
                        time_start: {
                            [Op.gt]: currentDate
                        },
                        deletedAt: null
                    }
                }
            });

            if (schedules.length > 0) {
                for(let detail of schedules){
                    listScheduleIds.push(detail.id);
                }
    
                userEvents = await User_Event.findAll({
                    where: {
                        event_id: {
                            [Op.in]: listScheduleIds,
                        },
                        user_id: userId,
                        section: null,
                        deletedAt: null,
                    }
                })
                
                for (let detail of schedules) {
                    let status = false;
                    if(userEvents.length > 0){
                        for(let idx in userEvents){
                            if(detail.id == userEvents[idx].event_id){
                                status = true;
                                break;
                            }
                        }
                    }

                    let response = await Need.findOne({ where: { id: detail.need_id } })
                    let pembicara = JSON.parse(response.pembicara);

                    let temp = {
                        id: detail.id,
                        name: detail.name,
                        date: onlyDate(detail.time_start),
                        time: hourStartEnd(detail.time_start, detail.time_end),
                        youtube_link: detail.youtube_link || '',
                        banner: detail.banner || '',
                        pembicara: pembicara,
                        location: '',
                        status: status,
                    }

                    completeData.push(temp);
                }
            }

            console.log(completeData);

            res.status(200).json({ data: completeData, message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async getHistoryList(req, res, next) {
        const { limit, start, user_id } = req.query;

        try {
            let completeData = [];
            let currentDate = new Date();

            let schedules = await User_Event.findAndCountAll({
                where: {
                    user_id: user_id,
                    section: null,
                },
                include: [
                    {
                        model: Role
                    },
                    {
                        model: Mass_Schedule,
                        where: {
                            time_end: {
                                [Op.lt]: currentDate
                            }
                        },
                        include: [
                            {
                                model: Mass_Category,
                                attributes: ['thumbnail']
                            }
                        ]
                    }

                ],
                limit: limit ? Number(limit) : null,
                offset: start ? Number(start) : null,
            });

            if (schedules.rows.length > 0) {
                for (let detail of schedules.rows) {
                    let temp = {
                        title: detail.Mass_Schedule.name,
                        date: dateAndDay(detail.Mass_Schedule.time_start),
                        time: hourStartEnd(detail.Mass_Schedule.time_start, detail.Mass_Schedule.time_end),
                        thumbnail: detail.Mass_Schedule.Mass_Category.thumbnail,
                        role: detail.Role.name == "Admin" ? "Design & Creative" : detail.Role.name
                    }

                    completeData.push(temp);
                }
            } else {
                completeData = schedules.rows
            }

            res.status(200).json({ data: completeData, totalData: schedules.count, message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async joinSchedule(req, res, next) {
        let request = req.body;
        const userId = req.userId;

        try {
            for (let schedule in request.list) {
                /** Notif saat meminta reminder pada jadwal tertentu */
                let event = await Mass_Schedule.findOne({
                    where: {
                        id: request.list[schedule].id
                    },
                    include: [
                        {
                            model: Mass_Category,
                            attributes: ['title']
                        }
                    ],
                    attributes: [
                        'name',
                        'time_start',
                        'time_end'
                    ]
                })

                let user = await User.findOne({
                    where: {
                        id: userId
                    },
                    attributes: [
                        'token_oneSignal'
                    ]
                })

                let userEvent = await User_Event.findOne({
                    where: {
                        event_id: request.list[schedule].id,
                    }
                })

                if (!userEvent) {
                    // notification = await OneSignalService.reminderScheduleWorship({ event, onesignal_id: user.token_oneSignal });

                    let newData = {
                        user_id: userId,
                        event_id: request.list[schedule].id,
                        // notification_id: notification.id,
                        role_id: 1,
                    }

                    await User_Event.create(newData);
                } else {
                    await User_Event.destroy({
                        where: {
                            user_id: userId,
                            event_id: request.list[schedule].id,
                            role_id: 1,
                        }
                    })
                }
            }

            res.status(200).json({ message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async incomingEvent(req, res, next) {
        try {
            let currentDate = new Date();
            let day = currentDate.getDay();
            let listEvent, completeData = [];
            let date, nextDate;

            if (day === 1) {
                date = currentDate.getDate() + 6;
                nextDate = new Date().setDate(date)

                listEvent = await Mass_Schedule.findAll({
                    where: {
                        [Op.and]: [
                            {
                                time_start: {
                                    [Op.gte]: currentDate,
                                }
                            },
                            {
                                time_end: {
                                    [Op.lte]: nextDate
                                },
                            }
                        ],
                        deletedAt: null
                    }
                })
            } else {
                let difference = 7 - day;
                date = currentDate.getDate() + difference;
                nextDate = new Date().setDate(date)

                listEvent = await Mass_Schedule.findAll({
                    where: {
                        [Op.and]: [
                            {
                                time_start: {
                                    [Op.gte]: currentDate,
                                }
                            },
                            {
                                time_end: {
                                    [Op.lte]: nextDate
                                },
                            }
                        ],
                        deletedAt: null
                    }
                })
            }

            if (listEvent.length > 0) {
                for (let detail of listEvent) {
                    let response = await Need.findOne({ where: { id: detail.need_id } })
                    let pembicara = JSON.parse(response.pembicara);

                    let temp = {
                        id: detail.id,
                        category_id: detail.category_id,
                        name: detail.name,
                        date: onlyDate(detail.time_start),
                        time: hourStartEnd(detail.time_start, detail.time_end),
                        youtube_link: detail.youtube_link || '',
                        banner: detail.banner || '',
                        pembicara: pembicara,
                        location: ''
                    }

                    completeData.push(temp);

                }
            } else {
                completeData = [];
            }

            res.status(200).json({ data: completeData, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async ongoingEvent(req, res, next) {
        try {
            let currentDate = new Date();
            let completeData = [];

            let listEvent = await Mass_Schedule.findAll({
                where: {
                    time_start: {
                        [Op.lte]: currentDate
                    },
                    time_end: {
                        [Op.gte]: currentDate
                    },
                    deletedAt: null
                },
                include: [
                    {
                        model: Mass_Category,
                        attributes: [
                            'thumbnail'
                        ]
                    }
                ]
            });

            if (listEvent.length > 0) {
                for (let detail of listEvent) {
                    let response = await Need.findOne({ where: { id: detail.need_id } })
                    let youtube = response.socialMedia ? JSON.parse(response.socialMedia) : null
                    let pembicara = JSON.parse(response.pembicara);
                    let ruangan = response.ruangan ? JSON.parse(response.ruangan) : null;

                    let temp = {
                        id: detail.id,
                        category_id: detail.category_id,
                        name: detail.name,
                        date: onlyDate(detail.time_start),
                        time: hourStartEnd(detail.time_start, detail.time_end),
                        youtube_link: youtube ? youtube.link_youtube || '' : '',
                        banner: detail.Mass_Category.thumbnail || '',
                        pembicara: pembicara,
                        location: ruangan ? ruangan.roomName ? ruangan.roomName : ruangan.location ? ruangan.location : '' : ''
                    }

                    completeData.push(temp);

                }
            } else {
                completeData = [];
            }

            res.status(200).json({ data: completeData, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = WorshipController;