const { Service_Event_Class, Baptism, Dedication, PreMarriageGuidance, Log, User, User_Class } = require('../models')
const { Op } = require('sequelize');
const { singleDateConverter, dateAndDay } = require('../helpers/date-string');
const OneSignalService = require('./onesignal');

class ClassEventService {
    static async getListClass({ section, event_id }) {
        try {
            let list = [];
            let event;

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
                case 'marriage':
                    event = await PreMarriageGuidance.findOne({
                        where: {
                            id: event_id
                        }
                    })
                    break;
                default:
                    break;
            }

            let response = await Service_Event_Class.findAll({
                where: {
                    [Op.and]: [
                        { section: section },
                        { special_event_id: event_id }
                    ]
                },
                attributes: [
                    'id',
                    'topic',
                    'time',
                    'speaker',
                ]
            })

            if (response.length > 0) {
                response.forEach(element => {
                    let temp = {
                        id: element.id,
                        title: event.title ? event.title : dateAndDay(event.bpn_date),
                        topic: element.topic,
                        time: singleDateConverter(element.time),
                        speaker: element.speaker,
                        section: section,
                        event_id: event_id
                    }

                    list.push(temp);
                });
            } else {
                list = response;
            }

            return { data: list, message: '' }
        } catch (error) {
            return { status: error.status, message: error.message }
        }
    }

    static async addClass({ list }) {
        try {
            await list.forEach(data => {
                Service_Event_Class.create(data)
            })

            return { status: 201, message: 'Successful Create the classes' }
        } catch (error) {
            return { status: error.status, message: error.message }
        }
    }

    static async removeClass({ id }) {
        try {
            await Service_Event_Class.destroy({ where: { id: id } });

            let participant = await User_Class.findAll({
                where: {
                    class_id: id
                }
            })

            for (let detail of participant) {
                if (detail.notification_id) {
                    await OneSignalService.cancelNotif({ notification_id })
                }
            }

            await User_Class.destroy({
                where: {
                    class_id: id
                }
            })

            return { status: 200, message: 'Successful remove class' }
        } catch (error) {
            return { status: error.status, message: error.message }
        }
    }

    static async addUserClass({ user_id, section, event_id }) {
        try {
            let classes = await Service_Event_Class.findAll({
                where: {
                    [Op.and]: [
                        {
                            section: section
                        },
                        {
                            special_event_id: event_id
                        }
                    ]
                }
            })

            let user = await User.findOne({
                where: {
                    id: user_id
                }
            })

            // Untuk Judul notif
            let sectionClass;

            switch (section) {
                case 'baptism':
                    sectionClass = 'Baptisan'
                    break;
                case 'marriage':
                    sectionClass = 'BPN'
                    break;
                default:
                    break;
            }

            if (classes.length > 0) {
                for (let i in classes) {
                    let notification = await OneSignalService.createClassNotif({ onesignal_id: user.token_oneSignal, classInfo: classes[i], section: sectionClass })

                    if (notification.recipients > 0) {
                        let detail = {
                            user_id: user.id,
                            class_id: classes[i].id,
                            notif_id: notification.id
                        }

                        await User_Class.create(detail)
                    } else {
                        throw ({
                            status: 400,
                            message: 'Your participant did not turn on their notif please ask them to turn the notif',
                        })
                    }
                }

                return { status: 201, message: 'Successful add user to class' }
            } else {
                throw ({
                    status: 400,
                    message: 'You dont have class for this event please create the class first'
                })
            }
        } catch (error) {
            return { status: error.status, message: error.message }
        }
    }

    static async getUserClass({ user_id, section, event_id }) {
        try {
            let list = [];

            let response = await User_Class.findAll({
                where: {
                    user_id: user_id
                },
                include: [
                    {
                        model: Service_Event_Class,
                        where: {
                            section: section,
                            special_event_id: event_id,
                        }
                    }
                ]
            })

            if (response.length > 0) {
                response.forEach(data => {
                    let temp = {
                        topic: data.Service_Event_Class.topic,
                        time: singleDateConverter(data.Service_Event_Class.time),
                        speaker: data.Service_Event_Class.speaker,
                        status: data.status == true ? 'Attend' : data.status == false ? 'Absent' : 'In review',
                        user_class_id: data.id
                    }

                    list.push(temp);
                })
            } else {
                list = response;
            }

            return { data: list, message: '' }
        } catch (error) {
            return { data: null, message: error.message ?? 'There is a mistake during take class data user' }
        }
    }

    static async userParticipantStatus({ status, id, user_id, section, event_id, class_id }) {
        let redirect;

        try {
            await User_Class.update({ status: status }, {
                where: {
                    id: id
                }
            })

            if (user_id) {
                redirect = `/cms/class/user-class/${user_id}?event_id=${event_id}&section=${section}`
            } else {
                redirect = `/cms/class/participant?section=${section}&class_id=${class_id}&event_id=${event_id}`
            }

            return { status: 200, redirect, message: 'Successful Update User Status for class' }
        } catch (error) {
            if (user_id) {
                redirect = `/cms/class/user-class/${user_id}?event_id=${event_id}&section=${section}`
            } else {
                redirect = `/cms/class/participant?section=${section}&class_id=${class_id}&event_id=${event_id}`
            }

            return { status: error.status, redirect, message: error.message || 'Got problem during update user status class' }
        }
    }
}

module.exports = ClassEventService;