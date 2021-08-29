const {
    PreMarriageGuidance,
    Commission,
    User_Marriage,
    User,
    Partner,
    Children,
    Child_Dedication,
    User_Commission_Role,
    Baptism,
    Dedication,
    User_Service_Event,
    Need
} = require('../models');
const {
    hourStartEnd,
    onlyDate,
    userInput,
    manualISOString
} = require('../helpers/date-string');
const {
    generateToken
} = require('../helpers/jwt');
const {
    Op, where
} = require('sequelize');
const removePhoto = require('../helpers/remove_photo');
const {
    register
} = require('./user');

class ParishUserController {
    static async listUserEvent(req, res, next) {
        const {
            user_id
        } = req.query
        let eventList = [];

        try {
            let list = await User_Service_Event.findAll({
                where: {
                    user_id: user_id,
                }
            })

            if (list.length > 0) {
                for (let i in list) {
                    let event, temp;
                    switch (list[i].section) {
                        case 'baptism':
                            event = await Baptism.findOne({
                                where: {
                                    id: list[i].event_id
                                },
                                include: [{
                                    model: User,
                                    attributes: [
                                        'full_name'
                                    ]
                                }]
                            })
                            break;
                        case 'dedication':
                            event = await Dedication.findOne({
                                where: {
                                    id: list[i].event_id
                                },
                                include: [{
                                    model: User,
                                    attributes: [
                                        'full_name'
                                    ]
                                }]
                            })
                            break;
                        case 'marriage':
                            event = await PreMarriageGuidance.findOne({
                                where: {
                                    id: list[i].event_id
                                },
                                include: [{
                                        model: User,
                                        attributes: [
                                            'full_name'
                                        ]
                                    },
                                    {
                                        model: User_Marriage,
                                        where: {
                                            user_id: user_id
                                        },
                                        attributes: [
                                            'marriage_date'
                                        ]
                                    }
                                ]
                            })
                            break;
                        default:
                            break;
                    }

                    temp = {
                        title: list[i].section !== 'marriage' ? event.title : 'Bimbingan Pra Nikah',
                        pic: list[i].section !== 'marriage' ? event.User.full_name : null,
                        status: list[i].status,
                        date: list[i].section !== 'marriage' ? onlyDate(event.time_start) : onlyDate(event.bpn_date),
                        time: list[i].section !== 'marriage' ? hourStartEnd(event.time_start, event.time_end) : onlyDate(event.User_Marriages[0].marriage_date)
                    }

                    eventList.push(temp);
                }
            } else {
                eventList = list;
            }

            res.status(200).json({
                data: eventList,
                message: ''
            })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async listEventSpecificSection(req, res, next) {
        const {
            section
        } = req.params;

        try {
            let list, eventList = [];
            let currentDate = new Date();

            //Get list events based on Section
            switch (section) {
                case 'baptism':
                    list = await Baptism.findAll({
                        where: {
                            time_start: {
                                [Op.gt]: currentDate
                            },
                            deletedAt: null,
                        },
                        attributes: [
                            'id',
                            'title',
                            'quota',
                            'time_start',
                            'time_end',
                            'user_id'
                        ],
                        include: [{
                            model: User,
                            attributes: [
                                'full_name'
                            ]
                        }]
                    })
                    break;
                case 'dedication':
                    list = await Dedication.findAll({
                        where: {
                            time_start: {
                                [Op.gt]: currentDate
                            },
                            deletedAt: null,
                        },
                        attributes: [
                            'id',
                            'title',
                            'quota',
                            'time_start',
                            'time_end',
                            'user_id'
                        ],
                        include: [{
                            model: User,
                            attributes: [
                                'full_name'
                            ]
                        }]
                    })
                    break;
                case 'marriage':
                    list = await PreMarriageGuidance.findAll({
                        where: {
                            bpn_date: {
                                [Op.gt]: currentDate
                            },
                            deletedAt: null,
                        },
                        attributes: [
                            'id',
                            'bpn_date',
                            'quota',
                            'user_id'
                        ],
                        include: [{
                            model: User,
                            attributes: [
                                'full_name'
                            ]
                        }]
                    })
                    break;
                default:
                    break;
            }

            if (list.length > 0) {
                for (let index in list) {
                    let participant, temp;

                    switch (section) {
                        case 'baptism':
                            participant = await User_Service_Event.findAll({
                                where: {
                                    event_id: list[index].id,
                                    status: {
                                        [Op.or]: [true, null]
                                    },
                                    section: section,
                                }
                            })
                            break;
                        case 'dedication':
                            participant = await Child_Dedication.findAll({
                                where: {
                                    dedication_id: list[index].id,
                                    status: {
                                        [Op.or]: [true, null]
                                    }
                                }
                            })
                            break;
                        default:
                            break;
                    }

                    temp = {
                        id: list[index].id,
                        title: section !== 'marriage' ? list[index].title : 'Bimbingan Pra Nikah',
                        pic: list[index].User.full_name,
                        quota: section !== 'marriage' ? `${participant.length}/${list[index].quota}` : 0,
                        date: section !== 'marriage' ? onlyDate(list[index].time_start) : onlyDate(list[index].bpn_date),
                        time: section !== 'marriage' ? hourStartEnd(list[index].time_start, list[index].time_end) : '',
                        bpn_date: section == 'marriage' ? manualISOString(list[index].bpn_date) : ''
                    }

                    eventList.push(temp);
                }
            } else {
                eventList = list;
            }

            res.status(200).json({
                data: eventList,
                section: section,
                message: ''
            })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async joinSpecificEvent(req, res, next) {
        const {
            section,
            event_id
        } = req.params;
        let files = req.files;
        let request = req.body;

        try {
            let updatedData, event, path;

            let currentCount = await User_Service_Event.count({
                where: {
                    section: section,
                    event_id: event_id,
                    status: {
                        [Op.or]: [true, null]
                    }
                }
            })

            switch (section) {
                case 'baptism':
                    event = await Baptism.findOne({
                        where: {
                            id: event_id
                        }
                    })
                    break;
                case 'dedication':
                    event = await Dedication.findOne({
                        where: {
                            id: event_id
                        }
                    })
                    break;
                default:
                    event = {
                        quota: 1000,
                    }
                    break;
            }

            if (currentCount < event.quota) {
                let user = await User.findOne({
                    where: {
                        id: request.user_id
                    }
                });

                let userParticipate = {
                    user_id: request.user_id,
                    event_id: event_id,
                    section: section
                }

                let newEvent = await User_Service_Event.create(userParticipate);

                switch (section) {
                    case 'baptism':
                        updatedData = {
                            full_name: request.full_name,
                            birth_place: request.birth_place,
                            birth_of_date: userInput(request.birth_of_date),
                            gender: request.gender,
                            occupation: request.occupation,
                            address: JSON.stringify(request.address),
                            phone_number: Number(request.phone_number),
                            email: request.email,
                            birth_certification_file: files.length > 0 ? files[0].filename : '',
                        }

                        if (user.birth_certification_file) {
                            path = 'Public/photos/private/user/akte-lahir/'
                            removePhoto(path + user.birth_certification_file);
                        }

                        await User.update(updatedData, {
                            where: {
                                id: user.id
                            }
                        })

                        break;
                    case 'dedication':
                        if (request.children.length > 0) {
                            for (let i = 0; i < request.children.length; i++) {
                                let temp = {
                                    user_id: user.id,
                                    child_id: request.children[i].id,
                                    dedication_id: event_id,
                                    user_service_id: newEvent.id,
                                }

                                await Child_Dedication.create(temp);
                            }
                        }

                        break;
                    case 'marriage':
                        /** Untuk Staging / Production */

                        updatedData = {
                            full_name: request.user.full_name,
                            birth_place: request.user.birth_place,
                            birth_of_date: userInput(request.user.birth_of_date),
                            gender: request.user.gender,
                            occupation: request.user.occupation,
                            address: JSON.stringify(request.user.address),
                            phone_number: Number(request.user.phone_number),
                            email: request.user.email,
                            birth_certification_file: files.length > 0 ? files[0].filename : '',
                            family_certification_file: files.length > 0 ? files[1].filename : '',
                            identification_file: files.length > 0 ? files[2].filename : '',
                            baptism_certification_file: files.length > 0 ? files[3].filename : '',
                        }

                        let partnerData = {
                            full_name: request.partner.full_name,
                            birth_place: request.partner.birth_place,
                            birth_of_date: userInput(request.partner.birth_of_date),
                            gender: request.partner.gender,
                            occupation: request.partner.occupation,
                            address: JSON.stringify(request.partner.address),
                            phone_number: Number(request.partner.phone_number),
                            email: request.partner.email,
                            birth_certification_file: files.length > 0 ? files[4].filename : '',
                            family_certification_file: files.length > 0 ? files[5].filename : '',
                            identification_file: files.length > 0 ? files[6].filename : '',
                            baptism_certification_file: files.length > 0 ? files[7].filename : '',
                            user_id: user.id
                        }

                        if (user.birth_certification_file) {
                            path = 'Public/photos/private/user/akte-lahir/'
                            removePhoto(path + user.birth_certification_file);
                        }

                        if (user.identification_file) {
                            path = 'Public/photos/private/user/ktp/'
                            removePhoto(path + user.identification_file);
                        }

                        let needDetail = {
                            event_name: `Pernikahan ${request.user.full_name} & ${request.partner.full_name}`,
                            time_start: userInput(request.marriage_date),
                            section: section
                        }


                        let result = await Need.create(needDetail);

                        await User.update(updatedData, {
                            where: {
                                id: user.id
                            }
                        })

                        await Partner.create(partnerData)

                        let marriageDataComplete = {
                            user_id: user.id,
                            bpn_id: request.bpn_id,
                            need_id: result.id,
                            marriage_date: userInput(request.marriage_date)
                        }

                        await User_Marriage.create(marriageDataComplete);

                        break;
                    default:
                        break;
                }

                res.status(200).json({
                    data: null,
                    message: 'successful join with the event'
                });

            } else {
                throw ({
                    status: 400,
                    message: 'Quota full'
                })
            }
        } catch (error) {
            next({
                files: req.files,
                error
            })
        }
    }

    static async getUserChildAvailable(req, res, next) { //Dedication
        const {
            user_id
        } = req.params

        try {
            let getListed = [];

            let registered = await Child_Dedication.findAll({
                where: {
                    user_id: user_id,
                    status: {
                        [Op.or]: [null, true]
                    }
                }
            })

            if (registered.length > 0) {
                registered.forEach((x) => getListed.push(x.child_id));
            }

            let list = await Children.findAll({
                where: {
                    user_id: user_id,
                    deletedAt: null,
                    dedication: {
                        [Op.or]: [null, false]
                    },
                    id: {
                        [Op.notIn]: getListed,
                    }
                },
                attributes: [
                    'id',
                    'full_name',
                    'birth_place',
                    'birth_of_date',
                    'gender',
                    'dedication',
                    'profile_pic',
                    'qr_code',
                    'child_birth_certification_file'
                ]
            })

            res.status(200).json({
                data: list,
                message: ''
            });
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = ParishUserController;