const { PreMarriageGuidance, User_Service_Event, User_Marriage, User, Contact_Commission, Need, User_Commission, Partner, Child_Dedication, Baptism, Dedication, User_Class} = require('../models');
const { singleDateConverter, stringDateConverter } = require('../helpers/date-string');
const { Op } = require('sequelize');

class DataTableService {
    /** Parish CMS Data Table (Pelayanan Jemaat) */
    static async marriageSchedule({ length, draw, start, order, columns }) {
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

            let list = await PreMarriageGuidance.findAndCountAll({
                where: {
                    deletedAt: null
                },
                order: [
                    [`${selected}`, `${order[0].dir}`]
                ],
                attributes: ['bpn_date', 'id', 'user_id'],
                offset: Number(start),
                limit: Number(length),
                include: [
                    {
                        model: User,
                        attributes: ['full_name']
                    }
                ]
            })

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let participant = await User_Service_Event.count({
                    where: {
                        event_id: list.rows[key]['id'],
                        section: 'marriage',
                        status: {
                            [Op.or]: [
                                true,
                                null
                            ]
                        }
                    }
                })

                let dateStart = singleDateConverter(list.rows[key]['bpn_date'])

                table.data.push({
                    bpn_date: dateStart,
                    participant: participant,
                    personInCharge: list.rows[key]['User']['full_name'],
                    id: list.rows[key]['id'],
                });
            }

            return { status: 200, table }
        } catch (error) {
            return { message: error.message }
        }
    }

    static async getMarriageParticipant({ search, length, draw, start, order, columns, bpn_id }) {
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

            let list = await User_Marriage.findAndCountAll({
                where: {
                    bpn_id: bpn_id,
                    deletedAt: null,
                },
                offset: Number(start),
                limit: Number(length),
                include: [
                    {
                        model: User,
                        attributes: ['full_name', 'id', 'gender'],
                        where: {
                            full_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        },
                        order: [
                            [`${selected}`, `${order[0].dir}`]
                        ],
                        include: [
                            {
                                model: Partner,
                                attributes: ['full_name', 'id', 'gender']
                            }
                        ]
                    }
                ]
            })

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let date = stringDateConverter(list.rows[key]['marriage_date'])

                table.data.push({
                    marriage_date: date,
                    man: list.rows[key]['User']['gender'] == 'Laki-laki' ? list.rows[key]['User']['full_name'] : list.rows[key]['User']['Partner']['full_name'],
                    woman: list.rows[key]['User']['gender'] == 'Perempuan' ? list.rows[key]['User']['full_name'] : list.rows[key]['User']['Partner']['full_name'],
                    bride_id: list.rows[key]['User']['Partner']['id'],
                    photo: list.rows[key]['marriage_photo_file'],
                    user_id: list.rows[key]['User']['id'],
                    bpn_id: list.rows[key]['bpn_id'],
                    need_id: list.rows[key]['need_id'],
                    marriage_id: list.rows[key]['id'],
                    status_bpn: list.rows[key]['status']
                });
            }

            return { status: 200, table }
        } catch (error) {
            return { status: error.status, message: error.message };
        }
    }

    static async getParishSchedule({ section, search, length, draw, start, order, columns }) {
        let selected, list, model;

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

            switch (section) {
                case 'baptism':
                    model = Baptism
                    break;
                case 'dedication':
                    model = Dedication
                    break;

                default:
                    break;
            }

            list = await model.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            title: {
                                [Op.like]: `%${search.value}%`
                            }
                        },
                        {
                            deletedAt: null
                        }
                    ]
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
                let participant = await User_Service_Event.count({
                    where: {
                        event_id: list.rows[key]['id'],
                        section: section,
                        status: {
                            [Op.or]: [true]
                        }
                    }
                })
                let dateStart = singleDateConverter(list.rows[key]['time_start'])
                let dateEnd = singleDateConverter(list.rows[key]['time_end'])

                table.data.push({
                    time_start: dateStart,
                    time_end: dateEnd,
                    participant: participant,
                    quota: `${participant}/${list.rows[key]['quota']}`,
                    title: list.rows[key]['title'],
                    id: list.rows[key]['id'],
                    need_id: list.rows[key]['need_id']
                });
            }

            return { status: 200, table }
        } catch (error) {
            return { message: error.message }
        }
    }

    static async getParishParticipant({ section, search, length, draw, start, order, columns, event_id }) {
        let selected, list;

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

            switch (section) {
                case 'baptism':
                    list = await User_Service_Event.findAndCountAll({
                        where: {
                            event_id: event_id,
                            deletedAt: null,
                            section: section
                        },
                        order: [
                            [{ model: User }, `${selected}`, `${order[0].dir}`]
                        ],
                        offset: Number(start),
                        limit: Number(length),
                        include: [
                            {
                                model: User,
                                where: {
                                    full_name: {
                                        [Op.like]: `%${search.value}%`
                                    }
                                }
                            }
                        ]
                    })
                    break;
                case 'dedication':
                    list = await User_Service_Event.findAndCountAll({
                        where: {
                            event_id: event_id,
                            deletedAt: null,
                            section: section
                        },
                        order: [
                            [{ model: User }, `${selected}`, `${order[0].dir}`]
                        ],
                        offset: Number(start),
                        limit: Number(length),
                        include: [
                            {
                                model: User,
                                where: {
                                    full_name: {
                                        [Op.like]: `%${search.value}%`
                                    }
                                }
                            }
                        ]
                    })
                default:
                    break;
            }

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                table.data.push({
                    name: list.rows[key].User.full_name,
                    phone_number: list.rows[key].User.phone_number,
                    email: list.rows[key].User.email,
                    status: list.rows[key].status,
                    user_id: list.rows[key].User.id,
                    id: list.rows[key].id
                });
            }

            return { status: 200, table };
        } catch (error) {
            return { message: error.message }
        }
    }

    /** Class Service CMS Data Table */
    static async classParticipantList({ search, length, draw, start, order, columns, class_id }) {
        let selected, list;

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

            list = await User_Class.findAndCountAll({
                where: {
                    class_id: class_id,
                },
                order: [
                    [{ model: User }, `${selected}`, `${order[0].dir}`]
                ],
                offset: Number(start),
                limit: Number(length),
                include: [
                    {
                        model: User,
                        where: {
                            full_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        }
                    }
                ]
            })

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                table.data.push({
                    name: list.rows[key].User.full_name,
                    phone_number: list.rows[key].User.phone_number,
                    email: list.rows[key].User.email,
                    status: list.rows[key].status,
                    id: list.rows[key].id
                });
            }

            return { status: 200, table };
        } catch (error) {
            return { message: error.message }
        }
    }

    /** Contact Commission CMS Data Table */
    static async listConcom({ length, draw, start, order, columns }) {
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

            list = await Contact_Commission.findAndCountAll({
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let newStr, maxLength = 300;
                if (list.rows[key]['description'].length > maxLength) {
                    newStr = list.rows[key]['description'].substring(0, maxLength);
                } else {
                    newStr = list.rows[key]['description'];
                }
                table.data.push([
                    list.rows[key]['title'],
                    newStr,
                    list.rows[key]['logo'],
                    list.rows[key]['leader_name'],
                    list.rows[key]['leader_phone'],
                    list.rows[key]['leader_pic'],
                    list.rows[key]['order'],
                    list.rows[key]['id']
                ]);
            }

            return { table }

        } catch (error) {
            return { error }
        }
    }

    /** Event CMS Data Table */
    static async getAllEventBasedCommission({ length, draw, start, order, columns, search, commission }) {
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

            let list = await Need.findAndCountAll({
                where: {
                    [Op.and]: [
                        { commissionReq_id: commission.commission_id },
                        {
                            event_name: {
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
                let temp, ruangan, dateStart, dateEnd, location;
                temp = list.rows[key].ruangan ? JSON.parse(list.rows[key].ruangan) : temp = null;
                location = temp ? temp.location ? temp.location : 'TBA' : 'TBA'
                ruangan = temp ? temp.roomName ? temp.roomName : 'TBA' : 'TBA'
                dateStart = singleDateConverter(list.rows[key]['time_start'])
                dateEnd = singleDateConverter(list.rows[key]['time_end'])

                table.data.push([
                    dateStart,
                    dateEnd,
                    list.rows[key]['event_name'],
                    location,
                    ruangan,
                    list.rows[key]['id'], //need id
                    list.rows[key]['event_id'] //mass schedule id
                ]);
            }

            return { data: table, message: '' }
        } catch (error) {
            return { data: null, error }
        }
    }
}

module.exports = DataTableService;