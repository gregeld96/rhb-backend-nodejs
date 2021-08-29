const {
    Log,
    PreMarriageGuidance,
    User,
    Children,
    Child_Dedication,
    User_Commission_Role,
    Baptism,
    Dedication,
    User_Service_Event,
    Need,
    User_Marriage,
    Partner
} = require('../models');
const {
    manualISOString,
    dateAndDay,
    stringDateConverter,
} = require('../helpers/date-string');
const ClassEventService = require('./class-service');
const OneSignalService = require('./onesignal');

class ParishService {
    /** CMS Service Section */
    static async getParishEventData({
        id,
        section
    }) {
        try {
            let event;

            switch (section) {
                case 'baptism':
                    event = await Baptism.findOne({
                        where: {
                            id: id
                        },
                        include: [{
                            model: User
                        }]
                    })
                    break;
                case 'dedication':
                    event = await Dedication.findOne({
                        where: {
                            id: id
                        },
                        include: [{
                            model: User
                        }]
                    })
                    break;
                default:
                    break;
            }

            let temp = {
                id: event.id,
                title: event.title,
                time_start: manualISOString(event.time_start),
                time_end: manualISOString(event.time_end),
                quota: event.quota,
                member: {
                    name: event.User.full_name
                },
                need_id: event.need_id
            }

            return {
                data: temp,
                message: ''
            }
        } catch (error) {
            return {
                data: null,
                message: error.message
            }
        }
    }

    static async editParishSchedule({
        request,
        session,
        need_id
    }) {
        try {
            const user = await User.findOne({
                where: {
                    full_name: request.member
                }
            })

            let updatedSchedule = {
                quota: request.quota,
                time_start: request.time_start,
                time_end: request.time_end,
                user_id: user.id,
                title: request.title,
                section: request.section
            }

            let updatedNeed = {
                time_start: request.time_start,
                time_end: request.time_end,
                event_name: request.title,
                section: request.section
            }

            switch (request.section) {
                case 'baptism':
                    await Baptism.update(updatedSchedule, {
                        where: {
                            need_id: need_id
                        }
                    });
                    break;
                case 'dedication':
                    await Dedication.update(updatedSchedule, {
                        where: {
                            need_id: need_id
                        }
                    });
                    break;
            }

            await Need.update(updatedNeed, {
                where: {
                    id: need_id
                }
            })

            let log = {
                log: JSON.stringify(request),
                method: `UPDATE - Schedule ${request.section}`,
                user: session.name
            }

            await Log.create(log)

            return {
                status: 200,
                message: 'Successful Updated Schedule',
                redirect: `/cms/${request.section}/`
            }
        } catch (error) {
            return {
                status: error.status,
                message: error.message || "Some error occurred while edit schedule",
                redirect: `/cms/${request.section}/`
            }
        }
    }

    static async getMember(req) {
        let memberList;
        let members = [];
        let {
            permission
        } = req.session

        try {
            memberList = await User_Commission_Role.findAll({
                where: {
                    commission_id: permission.commission_id,
                    deletedAt: null
                },
                include: [{
                    model: User,
                    attributes: ['id', 'full_name']
                }]
            })

            if (memberList.length > 0) {
                await memberList.forEach((user) => {
                    let temp = {
                        id: user.id,
                        name: user.User.full_name
                    }

                    members.push(temp)
                });
            } else {
                members = memberList;
            }

            return {
                members
            }
        } catch (error) {
            return {
                message: error.message
            }
        }
    }

    static async addMarriageSchedule({
        request,
        session
    }) {
        try {
            if (!request.bpn_date || !request.member) {
                throw ({
                    message: 'Fill up all the field'
                })
            } else {
                const user = await User.findOne({
                    where: {
                        full_name: request.member
                    }
                })
                await PreMarriageGuidance.create({
                    bpn_date: request.bpn_date,
                    user_id: user.id
                });

                let log = {
                    log: JSON.stringify(request),
                    method: `CREATE - schedule marriage`,
                    user: session.name
                }

                await Log.create(log)

                return {
                    status: 201,
                    message: 'Successful Create Schedule'
                }
            }
        } catch (error) {
            return {
                status: error.status,
                message: error.message
            }
        }
    }

    static async addParishSchedule({
        request,
        session
    }) {
        try {
            if (!request.quota || !request.time_start || !request.time_end || !request.member || !request.title) {
                throw ({
                    message: 'Fill up all the field'
                })
            } else {
                const user = await User.findOne({
                    where: {
                        full_name: request.member
                    }
                })
                let event;

                switch (request.section) {
                    case 'baptism':
                        event = await Baptism.create({
                            quota: request.quota,
                            time_start: request.time_start,
                            time_end: request.time_end,
                            user_id: user.id,
                            title: request.title
                        });
                        break;
                    case 'dedication':
                        event = await Dedication.create({
                            quota: request.quota,
                            time_start: request.time_start,
                            time_end: request.time_end,
                            user_id: user.id,
                            title: request.title
                        });
                        break;
                    default:
                        break;
                }


                let needDetail = {
                    section: request.section,
                    time_start: request.time_start,
                    time_end: request.time_end,
                    event_name: request.title,
                    event_id: event.id,
                    commissionReq_id: session.permission.commission_id
                }

                let need = await Need.create(needDetail)

                switch (request.section) {
                    case 'baptism':
                        await Baptism.update({
                            need_id: need.id
                        }, {
                            where: {
                                id: event.id
                            }
                        })
                        break;
                    case 'dedication':
                        await Dedication.update({
                            need_id: need.id
                        }, {
                            where: {
                                id: event.id
                            }
                        })
                        break;
                    default:
                        break;
                }

                let log = {
                    log: JSON.stringify(request),
                    method: `CREATE - schedule ${request.section}`,
                    user: session.name
                }

                await Log.create(log)

                return {
                    status: 201,
                    message: 'Successful Create Schedule'
                }
            }
        } catch (error) {
            return {
                status: error.status,
                message: error.message || "Some error occurred while add schedule"
            }
        }
    }

    static async removeSchedule({
        schedule_id,
        section,
        session
    }) {
        try {
            let schedule;
            let currentDate = {
                deletedAt: new Date()
            }

            switch (section) {
                case 'baptism':
                    schedule = await Baptism.findOne({
                        where: {
                            id: schedule_id
                        }
                    })
                    await Baptism.update(currentDate, {
                        where: {
                            id: schedule_id
                        }
                    })
                    break;
                case 'dedication':

                    break;
                case 'marriage':
                    schedule = await PreMarriageGuidance.findOne({
                        where: {
                            id: schedule_id
                        }
                    })
                    await PreMarriageGuidance.update(currentDate, {
                        where: {
                            id: schedule_id
                        }
                    })
                    break;
                default:
                    break;
            }

            await User_Service_Event.update(currentDate, {
                where: {
                    event_id: schedule_id,
                    section: section
                }
            });

            if (schedule.need_id) {
                await Need.update(currentDate, {
                    where: {
                        id: schedule.need_id
                    }
                });
                await User_Job_Event.update(currentDate, {
                    where: {
                        need_id: schedule.need_id
                    }
                })
            }


            let log = {
                log: JSON.stringify(schedule),
                method: `DELETE - schedule ${section}`,
                user: session.name
            }

            await Log.create(log)

            return {
                status: 200,
                redirect: `/cms/${section}/`,
                message: "Successful delete schedule"
            }
        } catch (error) {
            return {
                status: error.status,
                redirect: `/cms/${section}/`,
                message: error.message || "Some error occurred while delete schedule"
            }
        }
    }

    static async statusParishEventParticipant({
        section,
        service_id,
        status,
        user_id,
        marriage_id
    }) {
        let event, selectedSection;

        if (section == 'marriage') {
            event = await User_Service_Event.findOne({
                where: {
                    user_id: user_id,
                    event_id: service_id,
                    section: section,
                    status: null
                }
            })
        } else {
            event = await User_Service_Event.findOne({
                where: {
                    id: service_id,
                    section: section
                }
            })
        }

        try {
            switch (section) {
                case 'baptism':
                    if (status == 'true') {
                        let response = await ClassEventService.addUserClass({
                            user_id: event.user_id,
                            event_id: event.event_id,
                            section
                        })

                        if (response.status !== 201) {
                            throw ({
                                status: response.status,
                                message: response.message
                            })
                        }
                    }
                    break;
                case 'dedication':
                    let list = await Child_Dedication.findAll({
                        where: {
                            dedication_id: event.event_id,
                            user_id: event.user_id
                        }
                    })

                    await Child_Dedication.update({
                        status: status
                    }, {
                        where: {
                            dedication_id: event.event_id,
                            user_id: event.user_id,
                            user_service_id: service_id
                        }
                    })

                    for (let detail of list) {
                        await Children.update({
                            dedication: status
                        }, {
                            where: {
                                id: detail.child_id
                            }
                        })
                    }
                    break;
                case 'marriage':
                    await User_Marriage.update({
                        status: status
                    }, {
                        where: {
                            id: marriage_id
                        }
                    });

                    if (status == 'true') {
                        let response = await ClassEventService.addUserClass({
                            user_id: event.user_id,
                            event_id: service_id,
                            section
                        })

                        if (response.status !== 201) {
                            throw ({
                                status: response.status,
                                message: response.message
                            })
                        }
                    }
                    break;
                default:
                    break;
            }

            if (section == 'marriage') {
                await User_Service_Event.update({
                    status: status
                }, {
                    where: {
                        id: event.id,
                    }
                })
            } else {
                await User_Service_Event.update({
                    status: status
                }, {
                    where: {
                        id: service_id
                    }
                })
            }

            let user = await User.findOne({
                where: {
                    id: event.user_id
                }
            });

            switch (section) {
                case 'marriage':
                    selectedSection = "Pra Nikah";
                    break;
                case 'dedication':
                    selectedSection = "Penyerahan Anak";
                    break;
                case 'baptism':
                    selectedSection = "Baptisan";
                    break;
                default:
                    break;
            }

            await OneSignalService.parishEventNotif({
                onesignal_id: [user.token_oneSignal],
                contents: `Your application for ${selectedSection} is ${status == 'true' ? "Approved" : "Not Approved"}`,
                title: `Application status ${selectedSection}`
            });

            return {
                status: 200,
                redirect: `/cms/${section}/participant?id=${event.event_id}`,
                message: "Successful update status participant"
            }
        } catch (error) {
            return {
                status: error.status,
                redirect: `/cms/${section}/participant?id=${event.event_id}`,
                message: error.message || "Some error occurred on approval status participant"
            }
        }
    }

    static async getBaptismParticipant({
        user_id,
        event_id
    }) {
        try {
            let user = await User_Service_Event.findOne({
                where: {
                    user_id: user_id,
                    event_id: event_id,
                    section: 'baptism'
                },
                include: [{
                    model: User,
                    attributes: [
                        'id',
                        'full_name',
                        'birth_place',
                        'birth_of_date',
                        'gender',
                        'occupation',
                        'address',
                        'phone_number',
                        'email',
                        'birth_certification_file'
                    ]
                }]
            })

            let neaterData = {
                id: user.id,
                full_name: user.User.full_name,
                birth_place: user.User.birth_place,
                birth_of_date: dateAndDay(user.User.birth_of_date),
                gender: user.User.gender,
                occupation: user.User.occupation,
                address: JSON.parse(user.User.address),
                phone_number: user.User.phone_number,
                email: user.User.email,
                birth_certification_file: user.User.birth_certification_file,
            }

            return {
                data: neaterData,
                message: ''
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                message: error.message || 'Something wrong during fetch data participant detail'
            }
        }
    }

    static async getDedicationParticipant({
        user_id,
        event_id,
        service_id
    }) {
        try {
            let list = [];

            let user = await User.findOne({
                where: {
                    id: user_id
                },
                attributes: [
                    'id',
                    'full_name',
                    'phone_number',
                    'email'
                ]
            });

            let children = await Child_Dedication.findAll({
                where: {
                    user_id: user_id,
                    dedication_id: event_id,
                    user_service_id: service_id
                },
                include: [{
                    model: Children,
                    attributes: [
                        'id',
                        'full_name',
                        'birth_place',
                        'birth_of_date',
                        'gender',
                        'child_birth_certification_file'
                    ]
                }]
            })

            let userData = {
                id: user.id,
                full_name: user.full_name,
                phone_number: user.phone_number,
                email: user.email,
            }

            for (let detail of children) {
                let temp = {
                    full_name: detail.Child.full_name,
                    birth_place: detail.Child.birth_place,
                    birth_of_date: dateAndDay(detail.Child.birth_of_date),
                    gender: detail.Child.gender,
                    child_birth_certification_file: detail.Child.child_birth_certification_file
                }

                list.push(temp);
            }

            return {
                data: {
                    user: userData,
                    list: list
                },
                message: ''
            }
        } catch (error) {
            return {
                data: null,
                message: error.message || 'Something wrong during fetch data participant detail'
            }
        }
    }

    static async getMarriageParticipant({
        marriage_id
    }) {
        try {
            let userMarriage = await User_Marriage.findOne({
                where: {
                    id: marriage_id
                },
                include: [{
                        model: User,
                        include: [{
                            model: Partner,
                        }]
                    },
                    {
                        model: PreMarriageGuidance
                    }
                ]
            });

            let date = stringDateConverter(userMarriage.marriage_date);

            let data = {
                marriage_date: date,
                man: userMarriage.User.gender == 'Laki-laki' ? {
                    full_name: userMarriage.User.full_name,
                    birth_place: userMarriage.User.birth_place,
                    birth_of_date: dateAndDay(userMarriage.User.birth_of_date),
                    gender: userMarriage.User.gender,
                    occupation: userMarriage.User.occupation,
                    address: JSON.parse(userMarriage.User.address),
                    phone_number: userMarriage.User.phone_number,
                    email: userMarriage.User.email,
                    birth_certification_file: userMarriage.User.birth_certification_file,
                    family_certification_file: userMarriage.User.family_certification_file,
                    baptism_certification_file: userMarriage.User.baptism_certification_file,
                    identification_file: userMarriage.User.identification_file
                } : {
                    full_name: userMarriage.User.Partner.full_name,
                    birth_place: userMarriage.User.Partner.birth_place,
                    birth_of_date: dateAndDay(userMarriage.User.Partner.birth_of_date),
                    gender: userMarriage.User.Partner.gender,
                    occupation: userMarriage.User.Partner.occupation,
                    address: JSON.parse(userMarriage.User.Partner.address),
                    phone_number: userMarriage.User.Partner.phone_number,
                    email: userMarriage.User.Partner.email,
                    birth_certification_file: userMarriage.User.Partner.birth_certification_file,
                    family_certification_file: userMarriage.User.Partner.family_certification_file,
                    baptism_certification_file: userMarriage.User.Partner.baptism_certification_file,
                    identification_file: userMarriage.User.Partner.identification_file
                },
                woman: userMarriage.User.gender == 'Perempuan' ? {
                    full_name: userMarriage.User.full_name,
                    birth_place: userMarriage.User.birth_place,
                    birth_of_date: dateAndDay(userMarriage.User.birth_of_date),
                    gender: userMarriage.User.gender,
                    occupation: userMarriage.User.occupation,
                    address: JSON.parse(userMarriage.User.address),
                    phone_number: userMarriage.User.phone_number,
                    email: userMarriage.User.email,
                    birth_certification_file: userMarriage.User.birth_certification_file,
                    family_certification_file: userMarriage.User.family_certification_file,
                    baptism_certification_file: userMarriage.User.baptism_certification_file,
                    identification_file: userMarriage.User.identification_file
                } : {
                    full_name: userMarriage.User.Partner.full_name,
                    birth_place: userMarriage.User.Partner.birth_place,
                    birth_of_date: dateAndDay(userMarriage.User.Partner.birth_of_date),
                    gender: userMarriage.User.Partner.gender,
                    occupation: userMarriage.User.Partner.occupation,
                    address: JSON.parse(userMarriage.User.Partner.address),
                    phone_number: userMarriage.User.Partner.phone_number,
                    email: userMarriage.User.Partner.email,
                    birth_certification_file: userMarriage.User.Partner.birth_certification_file,
                    family_certification_file: userMarriage.User.Partner.family_certification_file,
                    baptism_certification_file: userMarriage.User.Partner.baptism_certification_file,
                    identification_file: userMarriage.User.Partner.identification_file
                },
                man_url: userMarriage.User.gender == 'Laki-laki' ? '/photos/private/user' : "/photos/private/partner",
                woman_url: userMarriage.User.gender == 'Perempuan' ? '/photos/private/user' : "/photos/private/partner",
                bpn_id: userMarriage.bpn_id,
            }

            return {
                data: data,
                message: ''
            }
        } catch (error) {
            return {
                data: null,
                message: error.message || 'Something wrong during fetch data participant detail'
            }
        }
    }

    static async uploadMarriagePhoto({
        marriage_id,
        bpn_id,
        file
    }) {
        try {
            let updatePhoto = {
                marriage_photo_file: file,
            }

            await User_Marriage.update(updatePhoto, {
                where: {
                    id: marriage_id,
                    bpn_id: bpn_id,
                }
            });

            return {
                status: 200,
                message: 'Berhasil mengupload foto pasangan',
                redirect: `/cms/marriage/participant?id=${bpn_id}`
            }
        } catch (error) {
            throw {
                data: null,
                message: error.message || 'Something wrong during upload participant detail',
                redirect: `/cms/marriage/participant?id=${bpn_id}`
            }
        }
    }

    static async getMarriageDate({
        marriage_id
    }) {
        try {
            let userData = await User_Marriage.findOne({
                where: {
                    id: marriage_id,
                },
                include: [{
                    model: User,
                    attributes: [
                        'full_name'
                    ],
                    include: [{
                        model: Partner,
                        attributes: [
                            'full_name'
                        ]
                    }]
                }]
            });

            let data = {
                marriage: `${userData.User.full_name} & ${userData.User.Partner.full_name}`,
                date: manualISOString(userData.marriage_date),
                bpn_id: userData.bpn_id,
                need_id: userData.need_id,
            }

            return {
                data: data,
                message: ''
            }
        } catch (error) {
            throw ({
                data: null,
                message: error.message || 'Something wrong during get participant marriage detail date',
            })
        }
    }

    static async updatedBlessingDate({
        marriage_date_start,
        marriage_date_end,
        need_id
    }) {
        try {
            let updatedInfo = {
                time_start: marriage_date_start,
                time_end: marriage_date_end
            }

            console.log(updatedInfo);

            console.log(need_id);

            await Need.update(updatedInfo, {
                where: {
                    id: need_id
                }
            });

            return {
                data: 'Sukses',
                message: 'Sukses mengupdate blessing date'
            }
        } catch (error) {
            throw ({
                data: null,
                message: error.message || 'Something wrong during update participant marriage blessing date',
            })
        }
    }
}

module.exports = ParishService;