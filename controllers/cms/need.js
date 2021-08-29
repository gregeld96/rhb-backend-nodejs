const { User_Commission_Role, User_Job_Event, Log, Role, Commission_Notification, Commission, Need, Mass_Category, Mass_Schedule, User } = require('../../models');
const { Op } = require('sequelize')
const { singleDateConverter } = require('../../helpers/date-string');
const removePhoto = require('../../helpers/remove_photo');
const OneSignalService = require('../../services/onesignal');

class NeedController {
    static async renderAssignNeeds(req, res) {
        const { event_id, need_id } = req.params;

        try {
            let request = {};
            const need = await Need.findOne({ where: { id: need_id }, attributes: ['ruangan', 'pembicara', 'musicMultimedia', 'designFlyer', 'creativeVideo', 'security', 'it', 'socialMedia', 'commissionReq_id', 'event_id', 'time_start', 'time_end', 'event_name'] });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    request[key] = value
                }
            }

            request.time_end = singleDateConverter(request.time_end)
            request.time_start = singleDateConverter(request.time_start)

            res.render('need_form/create', {
                eventId: event_id,
                needId: need_id,
                request: request,
                title: 'Assign Need'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async assignNeed(req, res) {
        const { need_id } = req.params;
        const { updated } = req.body
        const data = req.session
        let event;

        try {
            let update = {}, list = [], onesignalIds = [];

            event = await Need.findOne({
                where: {
                    id: need_id
                }
            })

            for (let key in updated) {
                let commission, user, detail = Object.keys(updated[key]);
                update[detail] = JSON.stringify(updated[key][detail])

                switch (String(detail)) {
                    case 'ruangan':
                        commission = await Commission.findOne({ where: { name: `Ruangan ${updated[key][detail].location}` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'musicMultimedia':
                        commission = await Commission.findOne({ where: { name: `Pemusik & Multimedia` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'designFlyer':
                    case 'creativeVideo':
                        commission = await Commission.findOne({ where: { name: `Design & Creative` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'it':
                        commission = await Commission.findOne({ where: { name: `IT` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'security':
                        commission = await Commission.findOne({ where: { name: `Security ${updated[key][detail].location}` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'socialMedia':
                        commission = await Commission.findOne({ where: { name: `Social Media` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                }

                user = await User_Commission_Role.findOne({
                    where: {
                        commission_id: commission.id,
                        deletedAt: null,
                    },
                    include: [
                        {
                            model: User,
                        },
                        {
                            model: Role,
                            where: {
                                name: 'Manager',
                            }
                        }
                    ]
                })

                if (user.User.token_oneSignal) {
                    onesignalIds.push(user.User.token_oneSignal);
                }
            }

            await Need.update(update, { where: { id: need_id } });
            await list.forEach((notif) => {
                Commission_Notification.create(notif);
            })

            if (onesignalIds.length > 0) {
                await OneSignalService.managerNotif({
                    onesignal_id: onesignalIds,
                    name: 'Manager Request',
                    event: {
                        name: event.event_name,
                        time_start: event.time_start,
                        time_end: event.time_end
                    }
                })
            }

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Need`,
                user: data.name
            }

            await Log.create(log)

            if (data.permission.commission_name == 'Penjadwalan') {
                event = await Mass_Schedule.findOne({ where: { need_id: need_id }, include: [{ model: Mass_Category }] })
                res.status(200).json({ redirectUrl: `/cms/penjadwalan/${event.Mass_Category.id}`, message: req.flash('msg_info', 'Successful add need for the event') })
            } else {
                res.status(200).json({ redirectUrl: `/cms/event`, message: req.flash('msg_info', 'Successful add need for the event') })
            }
        } catch (error) {
            if (data.permission.commission_name == 'Penjadwalan') {
                event = await Mass_Schedule.findOne({ where: { need_id: need_id }, include: [{ model: Mass_Category }] })
                res.status(400).json({ redirectUrl: `/cms/penjadwalan/${event.Mass_Category.id}`, message: req.flash('msg_error', error.message || 'Got error while add needs') })
            } else {
                res.status(400).json({ redirectUrl: `/cms/event`, message: req.flash('msg_error', error.message || 'Got error while add needs') })
            }
        }
    }

    static async renderRequest(req, res) {
        try {
            res.render('request', {
                title: `Need Request`,
                request_active: 'active'
            })
        } catch (error) {
            console.log(error);
        }

    }

    static async requestAll(req, res) {
        const { permission } = req.session;
        let { length, draw, start, order, columns, search } = req.query;

        try {
            let request = [], approved = [];
            let needs, selected, parameter, result;

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

            switch (permission.commission_name) {
                case 'Ruangan MAG':
                case 'Security MAG':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        ruangan: {
                                            [Op.like]: `%MAG%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'Ruangan Kirana':
                case 'Security Kirana':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        ruangan: {
                                            [Op.like]: `%Kirana%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'Social Media':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        socialMedia: {
                                            [Op.like]: `%required%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'Penjadwalan':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        pembicara: {
                                            [Op.like]: `%required%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'Design & Creative':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        [Op.or]: [
                                            {
                                                creativeVideo: {
                                                    [Op.like]: `%required%`
                                                }
                                            },
                                            {
                                                designFlyer: {
                                                    [Op.like]: `%required%`
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'IT':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        it: {
                                            [Op.like]: `%required%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
                case 'Pemusik & Multimedia':
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        musicMultimedia: {
                                            [Op.like]: `%required%`
                                        }
                                    },
                                    {
                                        event_name: {
                                            [Op.like]: `%${search.value}%`
                                        }
                                    }
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
            }

            needs = await Need.findAndCountAll({
                where: parameter,
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            for (const need of needs.rows) {
                request.push({
                    need: JSON.parse(need.ruangan),
                    time_start: need.time_start,
                    time_end: need.time_end,
                    event_name: need.event_name
                })

                switch (permission.commission_name) {
                    case 'Design & Creative':
                        let creative = -1;
                        let design = -1;
                        let end;

                        if (need.creativeVideo) {
                            creative = need.creativeVideo.search("required")
                        }

                        if (need.designFlyer) {
                            design = need.designFlyer.search("required")
                        }

                        if (creative != -1) {
                            result = need.creativeVideo.search("approved")
                            if (result != -1) {
                                end = true
                            } else {
                                end = ''
                            }
                        }

                        if (design != -1) {
                            result = need.designFlyer.search("approved")
                            if (result != -1) {
                                end = true
                            } else {
                                end = ''
                            }
                        }
                        approved.push(end)
                        break;
                    case 'Pemusik & Multimedia':
                        result = need.musicMultimedia.search("approved")
                        if (result != -1) {
                            approved.push(JSON.parse(need.musicMultimedia))
                        } else {
                            approved.push('')
                        }
                        break;
                    case 'Security MAG':
                    case 'Security Kirana':
                        result = need.security.search("approved")
                        if (result != -1) {
                            approved.push(true)
                        } else {
                            approved.push('')
                        }
                        break;
                    case 'Penjadwalan':
                        result = need.pembicara.search("approved")
                        if (result != -1) {
                            approved.push(true)
                        } else {
                            approved.push('')
                        }
                        break;
                    case 'Social Media':
                        result = need.socialMedia.search("link")
                        if (result != -1) {
                            let temp = JSON.parse(need.socialMedia)
                            let list = [];
                            if (temp.link_design) {
                                list.push(temp.link_design)
                            }
                            if (temp.link_creative) {
                                list.push(temp.link_creative)
                            }
                            if (list.length > 0) {
                                approved.push(list)
                            } else {
                                approved.push('')
                            }
                        } else {
                            approved.push('')
                        }
                        break;
                    default:
                        break;
                }
            }

            table.recordsTotal = needs.count;
            table.recordsFiltered = needs.count;

            for (let key in request) {
                let dateStart, dateEnd, ruangan, location;
                location = request[key].need ? request[key].need.location ? request[key].need.location : 'TBA' : 'TBA'
                ruangan = request[key].need ? request[key].need.roomName ? request[key].need.roomName : 'TBA' : 'TBA'
                dateStart = singleDateConverter(request[key]['time_start'])
                dateEnd = singleDateConverter(request[key]['time_end'])

                table.data.push({
                    time_start: dateStart,
                    time_end: dateEnd,
                    event_name: request[key].event_name,
                    location: location,
                    room: ruangan,
                    id: needs.rows[key]['id'],
                    commission: permission.commission_name,
                    approved: approved[key]
                });
            }

            res.json(table);
        } catch (error) {
            console.error(error)
        }
    }

    static async renderAssignMemberDetail(req, res) {
        const { need_id } = req.params;
        const { permission } = req.session;

        try {
            let request = {};
            const need = await Need.findOne({ where: { id: need_id }, attributes: ['ruangan', 'pembicara', 'musicMultimedia', 'designFlyer', 'creativeVideo', 'security', 'it', 'socialMedia', 'commissionReq_id', 'event_id', 'time_start', 'time_end', 'event_name'] });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    request[key] = value
                }
            }

            // Change string to Array for those have multiple value
            if (request.ruangan && request.musicMultimedia) {
                if (request.ruangan.consumption) {
                    if (request.ruangan.consumption.indexOf(",")) {
                        let temp = request.ruangan.consumption.split(",");
                        request.ruangan.consumption = temp
                    } else {
                        let temp = [];
                        temp.push(request.ruangan.consumption);
                        request.ruangan.consumption = temp
                    }
                }

                if (request.ruangan.unitTable) {
                    if (request.ruangan.unitTable.indexOf(",")) {
                        let temp = request.ruangan.unitTable.split(",");
                        request.ruangan.unitTable = temp
                    } else {
                        let temp = [];
                        temp.push(request.ruangan.unitTable);
                        request.ruangan.unitTable = temp
                    }
                }

                if (request.musicMultimedia.team) {
                    if (request.musicMultimedia.team.indexOf(",")) {
                        let temp = request.musicMultimedia.team.split(",");
                        request.musicMultimedia.team = temp
                    } else {
                        let temp = [];
                        temp.push(request.musicMultimedia.team);
                        request.musicMultimedia.team = temp
                    }
                }
            }

            request.time_end = singleDateConverter(request.time_end)
            request.time_start = singleDateConverter(request.time_start)

            res.render('need_form/assign', {
                title: `Complete Need ${permission.commission_name}`,
                legend: `Complete Need ${permission.commission_name}`,
                needId: need_id,
                request,
                view_mode: false,
                disabled: 'disabled'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderEditNeed(req, res) {
        const { need_id } = req.params;
        const { permission } = req.session;

        try {
            let request = {};
            const need = await Need.findOne({ where: { id: need_id }, attributes: ['ruangan', 'pembicara', 'musicMultimedia', 'designFlyer', 'creativeVideo', 'security', 'it', 'socialMedia', 'commissionReq_id', 'event_id', 'time_start', 'time_end', 'event_name'] });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    request[key] = value
                }
            }

            // Change string to Array for those have multiple value
            if (request.ruangan.consumption) {
                if (request.ruangan.consumption.indexOf(",")) {
                    let temp = request.ruangan.consumption.split(",");
                    request.ruangan.consumption = temp
                } else {
                    let temp = [];
                    temp.push(request.ruangan.consumption);
                    request.ruangan.consumption = temp
                }
            }

            if (request.ruangan.unitTable) {
                if (request.ruangan.unitTable.indexOf(",")) {
                    let temp = request.ruangan.unitTable.split(",");
                    request.ruangan.unitTable = temp
                } else {
                    let temp = [];
                    temp.push(request.ruangan.unitTable);
                    request.ruangan.unitTable = temp
                }
            }

            if (request.musicMultimedia) {
                if (request.musicMultimedia.team.indexOf(",")) {
                    let temp = request.musicMultimedia.team.split(",");
                    request.musicMultimedia.team = temp
                } else {
                    let temp = [];
                    temp.push(request.musicMultimedia.team);
                    request.musicMultimedia.team = temp
                }
            }

            res.render('need_form/edit', {
                title: `Edit Need ${permission.commission_name}`,
                legend: `Edit Need ${permission.commission_name}`,
                needId: need_id,
                request,
                view_mode: false,
                disabled: 'disabled'
            })
        } catch (error) {
            console.error(error)
        }
    }

    static async renderEditMember(req, res) {
        const { need_id } = req.params;
        const { permission } = req.session;

        try {
            let request = {}; let members = [];
            const need = await Need.findOne({ where: { id: need_id }, attributes: ['ruangan', 'pembicara', 'musicMultimedia', 'designFlyer', 'creativeVideo', 'security', 'it', 'socialMedia', 'commissionReq_id', 'event_id', 'time_start', 'time_end', 'event_name'] });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    request[key] = value
                }
            }

            // Change string to Array for those have multiple value
            if (request.musicMultimedia) {
                if (request.musicMultimedia.team.indexOf(",")) {
                    let temp = request.musicMultimedia.team.split(",");
                    request.musicMultimedia.team = temp
                } else {
                    let temp = [];
                    temp.push(request.musicMultimedia.team);
                    request.musicMultimedia.team = temp
                }
            }

            switch (permission.commission_name) {
                case 'Design & Creative':
                    if (request.creativeVideo.members) {
                        request.creativeVideo.members.forEach((member) => {
                            members.push(member)
                        })
                    }

                    if (request.designFlyer.members) {
                        request.designFlyer.members.forEach((member) => {
                            members.push(member)
                        })
                    }
                    break;
                case 'Pemusik & Multimedia':
                    if (request.musicMultimedia.members) {
                        request.musicMultimedia.members.forEach((member) => {
                            members.push(member)
                        })
                    }
                    break;
                case 'Security Kirana':
                case 'Security MAG':
                    if (request.security.members) {
                        request.security.members.forEach((member) => {
                            members.push(member)
                        })
                    }
                    break;
                case 'Penjadwalan':
                    members.push({
                        user_name: request.pembicara.pasteur ? request.pembicara.pasteur : null,
                        user_id: request.pembicara.pasteur_id ? request.pembicara.pasteur_id : null,
                        role_name: 'Pendeta',
                        commission: request.pembicara.commission
                    })
                    break;
            }

            res.render('need_form/edit-member', {
                title: `Edit Need ${permission.commission_name}`,
                legend: `Edit Need ${permission.commission_name}`,
                needId: need_id,
                request,
                members,
                roles: [
                    'Workship Leader',
                    'Singer',
                    'Keyboardist',
                    'Guitarist',
                    'Drummer',
                    'Bassist',
                    'Perkusi',
                    'Orchestra',
                    'Soundman',
                    'Lighting',
                    'Streaming',
                    'Multimedia',
                    'Kameramen'
                ]
            })
        } catch (error) {
            req.flash('msg_error', error.message || 'Got error during delete the user for the event');
            res.redirect(`/cms/needs/request`)
        }
    }

    static async deleteJob(req, res) {
        const { need_id } = req.params;
        const { role_name, user_id, index, commission_id } = req.body;
        const data = req.session

        try {

            const role = await Role.findOne({ where: { name: role_name } })
            let need = await Need.findOne({ where: { id: need_id } })
            let commission = await Commission.findOne({ where: { id: commission_id } })
            let temp, removeMember;
            let currentDate = {
                deletedAt: new Date()
            };

            if (data.permission.commission_name == 'Penjadwalan') {
                commission = {
                    commission: {
                        name: 'Penjadwalan'
                    }
                }
            }

            switch (commission.name) {
                case 'Creative':
                    temp = JSON.parse(need.creativeVideo)
                    removeMember = temp.members.splice(index, 1)
                    await Need.update({ creativeVideo: JSON.stringify(temp) }, { where: { id: need_id } })
                    break;
                case 'Design':
                    temp = JSON.parse(need.designFlyer)
                    let dummy = JSON.parse(need.creativeVideo)
                    let count;

                    if (dummy.members) {
                        count = index - dummy.members.length
                    }

                    removeMember = temp.members.splice(count, 1)
                    await Need.update({ designFlyer: JSON.stringify(temp) }, { where: { id: need_id } })
                    break;
                case 'Pemusik & Multimedia':
                    temp = JSON.parse(need.musicMultimedia)
                    removeMember = temp.members.splice(index, 1)
                    await Need.update({ musicMultimedia: JSON.stringify(temp) }, { where: { id: need_id } })
                    break;
                case 'Security MAG':
                case 'Security Kirana':
                    temp = JSON.parse(need.security)
                    removeMember = temp.members.splice(index, 1)
                    await Need.update({ security: JSON.stringify(temp) }, { where: { id: need_id } })
                    break;
                default:
                    temp = JSON.parse(need.pembicara);
                    temp.pasteur = '';
                    temp.pasteur_id = '';
                    temp.commission = '';
                    await Need.update({ pembicara: JSON.stringify(temp) }, { where: { id: need_id } })
                    break;
            }

            await User_Job_Event.update(currentDate, {
                where: {
                    user_id: user_id,
                    need_id: need_id,
                    role_id: role.id,
                    commission_job_id: commission_id
                }
            })

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - User Job`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'Successful delete user for the event');
            res.redirect(`/cms/needs/edit-members/${need_id}`)
        } catch (error) {
            req.flash('msg_error', error.message || 'Got error during delete the user for the event');
            res.redirect(`/cms/needs/edit-members/${need_id}`)
        }
    }

    static async editMemberNeed(req, res) {
        const { need_id } = req.params;
        const { selected } = req.body;
        const data = req.session;
        let selectedNeed, assignPersonal, role, list = [], onesignalIds = [];
        let commission_id;

        try {
            let need = await Need.findOne({ where: { id: need_id } });

            switch (data.permission.commission_name) {
                case 'Security MAG':
                case 'Security Kirana':
                    selectedNeed = {
                        security: JSON.parse(need.security)
                    }
                    await selected.forEach((detail) => {
                        selectedNeed.security.members.push(detail)
                    })
                    selectedNeed.security['approved'] = true
                    await Need.update({ security: JSON.stringify(selectedNeed.security) }, { where: { id: need_id } })
                    break;
                case 'Pemusik & Multimedia':
                    selectedNeed = {
                        musicMultimedia: JSON.parse(need.musicMultimedia)
                    }
                    await selected.forEach((detail) => {
                        selectedNeed.musicMultimedia.members.push(detail)
                    })
                    selectedNeed.musicMultimedia.team = ''
                    selectedNeed.musicMultimedia['approved'] = true
                    await Need.update({ musicMultimedia: JSON.stringify(selectedNeed.musicMultimedia) }, { where: { id: need_id } })
                    break;
                case 'Design & Creative':
                    let creative = [], design = []
                    for (let key in selected) {
                        commission_id = await Commission.findOne({ where: { name: selected[key].commission } })
                        role = await Role.findOne({ where: { name: selected[key].role_name } })
                        if (selected[key].commission == 'Creative') {
                            creative.push(selected[key])
                            assignPersonal = {
                                user_id: selected[key].user_id,
                                commission_job_id: commission_id.id,
                                event_id: need.event_id,
                                need_id,
                                role_id: role.id
                            }
                            selected[key].commission = commission_id.id
                            list.push(assignPersonal)
                        } else {
                            design.push(selected[key])
                            assignPersonal = {
                                user_id: selected[key].user_id,
                                commission_job_id: commission_id.id,
                                event_id: need.event_id,
                                need_id,
                                role_id: role.id
                            }
                            selected[key].commission = commission_id.id
                            list.push(assignPersonal)
                        }
                    }

                    if (design.length > 0) {
                        selectedNeed = {
                            designFlyer: JSON.parse(need.designFlyer)
                        }

                        if (selectedNeed.designFlyer.members) {
                            await design.forEach((detail) => {
                                selectedNeed.designFlyer.members.push(detail)
                            })
                        } else {
                            selectedNeed.designFlyer['members'] = design
                        }

                        selectedNeed.designFlyer['approved'] = true
                        // console.log(selectedNeed.designFlyer)
                        await Need.update({ designFlyer: JSON.stringify(selectedNeed.designFlyer) }, { where: { id: need_id } })
                        commission_id = await Commission.findOne({ where: { name: 'Design' } })
                        await Commission_Notification.create({ commission_id: commission_id.id, need_id: need_id })
                    }

                    if (creative.length > 0) {
                        selectedNeed = {
                            creativeVideo: JSON.parse(need.creativeVideo)
                        }

                        if (selectedNeed.creativeVideo.members) {
                            await creative.forEach((detail) => {
                                selectedNeed.creativeVideo.members.push(detail)
                            })
                        } else {
                            selectedNeed.creativeVideo['members'] = creative
                        }

                        selectedNeed.creativeVideo['approved'] = true
                        // console.log(selectedNeed.creativeVideo)
                        await Need.update({ creativeVideo: JSON.stringify(selectedNeed.creativeVideo) }, { where: { id: need_id } })
                        commission_id = await Commission.findOne({ where: { name: 'Creative' } })
                        await Commission_Notification.create({ commission_id: commission_id.id, need_id: need_id })
                    }
                    break;
                case 'Penjadwalan':
                    selectedNeed = {
                        pembicara: JSON.parse(need.pembicara)
                    }

                    let currentDate = {
                        deletedAt: new Date()
                    };

                    role = await Role.findOne({ where: { name: selected[0].role_name } })

                    if (selectedNeed.pembicara.pasteur_id) {
                        await User_Job_Event.update(currentDate, {
                            where: {
                                need_id: need_id,
                                user_id: selectedNeed.pembicara.pasteur_id,
                                role_id: role.id
                            }
                        })
                    }

                    selectedNeed.pembicara.pasteur = selected[0].user_name
                    selectedNeed.pembicara.pasteur_id = selected[0].user_id
                    selectedNeed.pembicara.role_name = selected[0].role_name
                    selectedNeed.pembicara.commission = need.commissionReq_id
                    selectedNeed.pembicara.request = "true"
                    selectedNeed.pembicara['approved'] = true

                    await Need.update({ pembicara: JSON.stringify(selectedNeed.pembicara) }, { where: { id: need_id } })

                    assignPersonal = {
                        user_id: selected[0].user_id,
                        commission_job_id: need.commissionReq_id,
                        event_id: need.event_id,
                        need_id,
                        role_id: role.id
                    }

                    list.push(assignPersonal)
                default:
                    break;
            }

            if (data.permission.commission_name != 'Design & Creative' && data.permission.commission_name != 'Penjadwalan') {
                for (let key in selected) {
                    role = await Role.findOne({ where: { name: selected[key].role_name } })
                    assignPersonal = {
                        user_id: selected[key].user_id,
                        commission_job_id: selected[key].commission,
                        event_id: need.event_id,
                        need_id,
                        role_id: role.id
                    }
                    list.push(assignPersonal)
                }
            }

            for (let index in list) {
                let user = await User.findOne({
                    where: {
                        id: list[index].user_id
                    }
                });

                if (user.token_oneSignal) {
                    onesignalIds.push(user.token_oneSignal)
                }
            }

            await list.forEach((assign) => {
                User_Job_Event.create(assign);
            })

            if (onesignalIds.length > 0) {
                await OneSignalService.jobNotif({
                    onesignal_id: onesignalIds,
                    name: `Job Request - ${need.event_name}`,
                    event: {
                        name: need.event_name,
                        time_start: need.time_start,
                        time_end: need.time_end
                    }
                })
            }

            let log = {
                log: JSON.stringify(req.body),
                method: 'CREATE - Assign',
                user: data.name
            }

            await Log.create(log)

            res.status(200).json({ redirectUrl: `/cms/needs/request`, message: req.flash('msg_info', 'Berhasil assign member for the request') })
        } catch (error) {
            res.status(200).json({ redirectUrl: `/cms/needs/edit-members/${need_id}`, message: req.flash('msg_error', error.message || 'Error saat mengedit data') })
        }
    }

    static async editNeed(req, res) {
        const { need_id } = req.params;
        let { request } = req.body;
        const data = req.session;

        try {
            let need = await Need.findOne({ where: { id: need_id } })
            let list = []

            for (let key in request) {
                let temp, subject, field, detail = Object.keys(request[key]);

                switch (String(detail)) {
                    case 'designFlyer':
                        temp = JSON.parse(need.designFlyer)
                        subject = request[key][detail]
                        for (let i = 0; i < subject.length; i++) {
                            field = Object.keys(subject[i])
                            // console.log(field, request[key][detail][i][String(field)])
                            temp[String(field)] = request[key][detail][i][String(field)]
                        }
                        list.push({ designFlyer: JSON.stringify(temp) })
                        break;
                    case 'creativeVideo':
                        temp = JSON.parse(need.creativeVideo)
                        subject = request[key][detail]
                        for (let i = 0; i < subject.length; i++) {
                            field = Object.keys(subject[i])
                            temp[String(field)] = request[key][detail][i][String(field)]
                        }
                        list.push({ creativeVideo: JSON.stringify(temp) })
                        break;
                    case 'it':
                        temp = JSON.parse(need.it)
                        subject = request[key][detail]
                        for (let i = 0; i < subject.length; i++) {
                            field = Object.keys(subject[i])
                            temp[String(field)] = request[key][detail][i][String(field)]
                        }
                        list.push({ it: JSON.stringify(temp) })
                        break;
                }
            }

            await list.forEach((full_detail) => {
                Need.update(full_detail, { where: { id: need_id } });
            })

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Need`,
                user: data.name
            }

            await Log.create(log)
            res.status(200).json({ redirectUrl: `/cms/needs/request`, message: req.flash('msg_info', 'Berhasil mengedit need') })
        } catch (error) {
            res.status(200).json({ redirectUrl: `/cms/needs/request`, message: req.flash('msg_error', error.message || 'Berhasil mengedit need') })
        }
    }

    static async renderTask(req, res) {
        try {
            res.render('task', {
                title: 'List of Task',
                task_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async getTask(req, res) {
        const data = req.session;
        const { section } = req.params;
        let { length, draw, start, order, columns, search } = req.query;

        try {
            let request = [];
            let jobs, selected, parameter;

            for (let key in columns) {
                if (key == order[0].column) {
                    selected = columns[key].name
                }
            }


            let commission = await Commission.findOne({ where: { name: section } });
            parameter = {
                [Op.and]: [
                    {
                        [Op.and]: [
                            { user_id: data.user_id },
                            { commission_job_id: commission.id }
                        ]
                    },
                    { deletedAt: null }
                ]
            }

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            jobs = await User_Job_Event.findAndCountAll({
                where: parameter,
                include: [
                    {
                        model: Need,
                        where: {
                            event_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        },
                    }
                ],
                order: [[{ model: Need }, `${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            for (const job of jobs.rows) {
                request.push({
                    job: JSON.parse(job.Need.ruangan),
                    time_start: job.Need.time_start,
                    time_end: job.Need.time_end,
                    event_name: job.Need.event_name
                })
            }

            table.recordsTotal = jobs.count;
            table.recordsFiltered = jobs.count;

            for (let key in request) {
                let dateStart, dateEnd, ruangan, location, status;
                status = jobs.rows[key].status ? 'Done' : 'Pending'
                location = request[key].job ? request[key].job.location ? request[key].job.location : 'TBA' : 'TBA'
                ruangan = request[key].job ? request[key].job.roomName ? request[key].job.roomName : 'TBA' : 'TBA'
                dateStart = singleDateConverter(request[key]['time_start'])
                dateEnd = singleDateConverter(request[key]['time_end'])

                table.data.push({
                    time_start: dateStart,
                    time_end: dateEnd,
                    event_name: request[key].event_name,
                    location: location,
                    room: ruangan,
                    status: status,
                    id: jobs.rows[key]['id'],
                    section: section,
                    need_id: jobs.rows[key].Need['id']
                });
            }

            res.json(table);
        } catch (error) {
            console.log(error)
        }
    }

    static async renderUpload(req, res) {
        const { section, job_id } = req.params;

        try {
            res.render('task/upload', {
                title: `Upload ${section}`,
                legend: `Upload ${section}`,
                section,
                job_id
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async upload(req, res) {
        const { section, job_id } = req.params;
        const { link } = req.body
        const data = req.session
        let user, need, social, assignment;

        try {
            if ((section == 'Design') || (section == 'Creative')) {
                user = await User_Job_Event.findOne({ where: { id: job_id } });
                need = await Need.findOne({ where: { id: user.need_id } });
                social = JSON.parse(need.socialMedia)
            } else {
                need = await Need.findOne({ where: { id: job_id } });
                social = JSON.parse(need.socialMedia)
            }

            let updated = {
                status: true,
                approval: true
            }

            switch (section) {
                case 'Design':
                    assignment = JSON.parse(need.designFlyer);
                    assignment.link_design = link

                    if (social) {
                        social.link_design = link
                    }

                    await Need.update({
                        designFlyer: JSON.stringify(assignment),
                        socialMedia: JSON.stringify(social)
                    }, {
                        where: {
                            id: need.id
                        }
                    })

                    await User_Job_Event.update(updated, { where: { id: job_id } });
                    break;

                case 'Creative':
                    assignment = JSON.parse(need.creativeVideo);
                    assignment.link_creative = link
                    if (social) {
                        social.link_design = link
                    }
                    await Need.update({
                        creativeVideo: JSON.stringify(assignment),
                        socialMedia: JSON.stringify(social)
                    }, {
                        where: {
                            id: need.id
                        }
                    })
                    await User_Job_Event.update(updated, { where: { id: job_id } });
                    break;

                case 'Youtube':
                    social.link_youtube = link
                    await Need.update({
                        socialMedia: JSON.stringify(social)
                    }, {
                        where: {
                            id: need.id
                        }
                    })
                    break;
                case 'Banner':
                    if (need.event_pic) {
                        let path = 'Public/photos/public/instagram-banner/'
                        removePhoto(path + need.event_pic);
                    }

                    await Need.update({
                        event_pic: req.files[0].filename
                    }, {
                        where: {
                            id: need.id
                        }
                    })
                    break;
            }

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - NEED UPLOAD`,
                user: data.name
            }

            await Log.create(log)

            if (section == 'Design' || section == 'Creative') {
                req.flash('msg_info', 'Successful upload link for the event');
                res.redirect(`/cms/needs/task/`)
            } else {
                req.flash('msg_info', 'Successful upload link for the event');
                res.redirect(`/cms/needs/request`)
            }
        } catch (error) {
            req.flash('msg_error', 'Error occur during upload link for the event');
            res.redirect(`/cms/needs/task/upload/${section}/${job_id}`)
        }
    }

    static async renderDetailEventNeed(req, res) {
        const { need_id } = req.params;

        try {
            let request = {};
            const need = await Need.findOne({ where: { id: need_id } });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    if (typeof (value) == Date) {
                        request[key] = value
                    }
                    request[key] = value
                }
            }

            // Change string to Array for those have multiple value
            if (request.ruangan && request.musicMultimedia) {
                if (request.ruangan.consumption) {
                    if (request.ruangan.consumption.indexOf(",")) {
                        let temp = request.ruangan.consumption.split(",");
                        request.ruangan.consumption = temp
                    } else {
                        let temp = [];
                        temp.push(request.ruangan.consumption);
                        request.ruangan.consumption = temp
                    }
                }

                if (request.ruangan.unitTable) {
                    if (request.ruangan.unitTable.indexOf(",")) {
                        let temp = request.ruangan.unitTable.split(",");
                        request.ruangan.unitTable = temp
                    } else {
                        let temp = [];
                        temp.push(request.ruangan.unitTable);
                        request.ruangan.unitTable = temp
                    }
                }

                if (request.ruangan.openHour) {
                    request.ruangan.openHour = request.ruangan.openHour.replace('T', ' at ')
                }

                if (request.ruangan.airconStart) {
                    request.ruangan.airconStart = request.ruangan.airconStart.replace('T', ' at ')
                }

                if (request.musicMultimedia.team) {
                    if (request.musicMultimedia.team.indexOf(",")) {
                        let temp = request.musicMultimedia.team.split(",");
                        request.musicMultimedia.team = temp
                    } else {
                        let temp = [];
                        temp.push(request.musicMultimedia.team);
                        request.musicMultimedia.team = temp
                    }
                }
            }

            request.time_end = singleDateConverter(request.time_end)
            request.time_start = singleDateConverter(request.time_start)

            res.render('request/detail', {
                title: `Detail ${request.event_name}`,
                legend: `Detail ${request.event_name}`,
                needId: need_id,
                request
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddNeed(req, res) {
        const { need_id } = req.params;
        const { section } = req.query
        let pasteursList;

        try {
            let request = {};
            const need = await Need.findOne({ where: { id: need_id } });

            for (const [key, value] of Object.entries(need.dataValues)) {
                if (typeof (value) != 'number' && typeof (value) != 'object') {
                    value.includes('{') ? request[key] = JSON.parse(value) : request[key] = value
                } else {
                    if (typeof (value) == Date) {
                        request[key] = value
                    }
                    request[key] = value
                }
            }

            const role = await Role.findOne({ where: { name: 'Pendeta' } })
            pasteursList = await User_Commission_Role.findAll({
                where: {
                    [Op.and]: [
                        { role_id: role.id },
                        { deletedAt: null }
                    ]
                },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'full_name']
                    }
                ]
            })

            let pasteurs = [];

            if (pasteursList.length > 0) {
                await pasteursList.forEach((user) => {
                    let temp = {
                        id: user.id,
                        name: user.User.full_name
                    }

                    pasteurs.push(temp)
                });
            }

            request.time_end = singleDateConverter(request.time_end)
            request.time_start = singleDateConverter(request.time_start)

            res.render('need_form/add-need', {
                title: `Add Need ${request.event_name}`,
                legend: `Add Need ${request.event_name}`,
                needId: need_id,
                request,
                pasteurs: pasteurs,
                section: section ? section : ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async addNeed(req, res) {
        const { need_id } = req.params;
        const { updated, section } = req.body
        const data = req.session
        let event;

        try {
            let update = {}, list = [], onesignalIds = [], user;

            event = await Need.findOne({
                where: {
                    id: need_id
                }
            })

            for (let key in updated) {
                let commission, detail = Object.keys(updated[key]);

                update[detail] = JSON.stringify(updated[key][detail])

                switch (String(detail)) {
                    case 'ruangan':
                        commission = await Commission.findOne({ where: { name: `Ruangan ${updated[key][detail].location}` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'pembicara':
                        commission = await Commission.findOne({ where: { name: `Penjadwalan` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'musicMultimedia':
                        commission = await Commission.findOne({ where: { name: `Pemusik & Multimedia` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'designFlyer':
                    case 'creativeVideo':
                        commission = await Commission.findOne({ where: { name: `Design & Creative` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'it':
                        commission = await Commission.findOne({ where: { name: `IT` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'security':
                        commission = await Commission.findOne({ where: { name: `Security ${updated[key][detail].location}` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                    case 'socialMedia':
                        commission = await Commission.findOne({ where: { name: `Social Media` } });
                        list.push({
                            commission_id: commission.id,
                            need_id,
                            status: false
                        })
                        break;
                }

                user = await User_Commission_Role.findOne({
                    where: {
                        commission_id: commission.id,
                        deletedAt: null,
                    },
                    include: [
                        {
                            model: User,
                        },
                        {
                            model: Role,
                            where: {
                                name: 'Manager',
                            }
                        }
                    ]
                })

                if (user.User.token_oneSignal) {
                    onesignalIds.push(user.User.token_oneSignal);
                }
            }

            await Need.update(update, { where: { id: need_id } });
            await list.forEach((notif) => {
                Commission_Notification.create(notif);
            })

            if (onesignalIds.length > 0) {
                await OneSignalService.managerNotif({
                    onesignal_id: onesignalIds,
                    name: 'Manager Request',
                    event: {
                        name: event.event_name,
                        time_start: event.time_start,
                        time_end: event.time_end
                    }
                })
            }

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Need Add`,
                user: data.name
            }

            await Log.create(log)

            if (req.session.permission.commission_name == 'Penjadwalan') {
                event = await Mass_Schedule.findOne({ where: { need_id: need_id }, include: [{ model: Mass_Category }] })
                res.status(200).json({ redirectUrl: `/cms/penjadwalan/${event.Mass_Category.id}`, message: req.flash('msg_info', 'Successful add other need for the event') })
            } else if (section) {
                res.status(200).json({ redirectUrl: `/cms/${section}/`, message: req.flash('msg_info', 'Successful add other need for the event') })
            } else {
                res.status(200).json({ redirectUrl: `/cms/event/`, message: req.flash('msg_info', 'Successful add other need for the event') })
            }
        } catch (error) {
            if (req.session.permission.commission_name == 'Penjadwalan') {
                event = await Mass_Schedule.findOne({ where: { need_id: need_id }, include: [{ model: Mass_Category }] })
                res.status(400).json({ redirectUrl: `/cms/penjadwalan/${event.Mass_Category.id}`, message: req.flash('msg_error', error.message || 'Got error while add other needs') })
            } else if (section) {
                res.status(400).json({ redirectUrl: `/cms/${section}/`, message: req.flash('msg_error', error.message || 'Got error while add other needs') })
            } else {
                res.status(400).json({ redirectUrl: `/cms/event/`, message: req.flash('msg_error', error.message || 'Got error while add other needs') })
            }
        }
    }

    static async getAdditionalMember(req, res) {
        const { permission } = req.session
        let { search, length, draw, start, order, columns, data, commission, need_id } = req.query;
        let selected, parameter;

        try {

            columns.forEach((column) => {
                column.data == order[0].column ? selected = column.name : ''
            })

            let temp, role, member = [];
            let need = await Need.findOne({ where: { id: need_id } });
            switch (permission.commission_name) {
                case 'Design & Creative':
                    temp = await Commission.findOne({ where: { name: `${commission}` } })
                    let creative = JSON.parse(need.creativeVideo);
                    let design = JSON.parse(need.designFlyer);

                    if (creative.members) {
                        await creative.members.forEach((detail) => {
                            member.push(detail.user_id)
                        })
                    }

                    if (design.members) {
                        await design.members.forEach((detail) => {
                            member.push(Number(detail.user_id))
                        })
                    }

                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    {
                                        [Op.or]: [
                                            { commission_id: temp.id },
                                            {
                                                [Op.and]: [
                                                    { commission_id: permission.commission_id },
                                                    { role_id: permission.role_id }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        deletedAt: null
                                    }
                                ]
                            },
                            {
                                user_id: {
                                    [Op.notIn]: member
                                }
                            }
                        ]
                    }
                    break;
                case 'Pemusik & Multimedia':
                    role = await Role.findOne({ where: { name: data } });
                    let music = JSON.parse(need.musicMultimedia);

                    if (music.members) {
                        await music.members.forEach((detail) => {
                            member.push(Number(detail.user_id))
                        })
                    }

                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    { role_id: role.id },
                                    { deletedAt: null }
                                ]
                            },
                            {
                                user_id: {
                                    [Op.notIn]: member
                                }
                            }
                        ]

                    }
                    break;
                case 'Security MAG':
                case 'Security Kirana':
                    let security = JSON.parse(need.security);

                    if (security.members) {
                        await security.members.forEach((detail) => {
                            member.push(Number(detail.user_id))
                        })
                    }

                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    { commission_id: permission.commission_id },
                                    { deletedAt: null }
                                ]
                            },
                            {
                                user_id: {
                                    [Op.notIn]: member
                                }
                            }
                        ]

                    }
                    break;
                case 'Penjadwalan':
                    role = await Role.findOne({ where: { name: 'Pendeta' } })
                    let pembicara = JSON.parse(need.pembicara);

                    if (pembicara.pasteur_id) {
                        member.push(Number(pembicara.pasteur_id))
                    }

                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    { role_id: role.id },
                                    { deletedAt: null }
                                ]
                            },
                            {
                                user_id: {
                                    [Op.notIn]: member
                                }
                            }
                        ]
                    }
                    break;
                default:
                    parameter = {
                        [Op.and]: [
                            { commission_id: permission.commission_id },
                            { deletedAt: null }
                        ]
                    }
                    break;
            }

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            let users = await User_Commission_Role.findAndCountAll({
                where: parameter,
                include: [
                    {
                        model: User,
                        where: {
                            full_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        },
                    },
                    {
                        model: Role
                    },
                    {
                        model: Commission
                    }
                ],
                order: [
                    [{ model: User }, `${selected}`, `${order[0].dir}`]
                ],
                limit: Number(length),
                offset: Number(start),
            });

            table.recordsTotal = users.count;
            table.recordsFiltered = users.count;

            for (let key in users.rows) {
                let name = users.rows[key].Commission ? users.rows[key].Commission['name'] : 'Penjadwalan';

                table.data.push([
                    users.rows[key].User['full_name'],
                    `0${users.rows[key].User['phone_number']}`,
                    users.rows[key].User['email'],
                    users.rows[key].Role['name'],
                    name,
                    users.rows[key]['id'], //commission role id
                    users.rows[key].User['id'], //user id
                    users.rows[key].Role['id'] //role id
                ]);
            }

            res.json(table)
        } catch (error) {
            console.log(error)
        }
    }

    static async approvedPasteur(req, res) {
        const { need_id } = req.params;
        const data = req.session;

        try {
            let need = await Need.findOne({ where: { id: need_id } });

            let pasteur = JSON.parse(need.pembicara)

            pasteur.approved = true;

            await Need.update({ pembicara: JSON.stringify(pasteur) }, { where: { id: need_id } })

            req.flash('msg_info', 'Successful approved pasteur for the event');
            res.redirect(`/cms/needs/request/`)
        } catch (error) {
            req.flash('msg_error', error.message || 'Got error during approved pasteur for the event');
            res.redirect(`/cms/needs/request/`)

        }
    }
}

module.exports = NeedController;