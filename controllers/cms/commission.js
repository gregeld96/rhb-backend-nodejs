const { User_Commission_Role, User, Role, Log, User_Job_Event, Commission_Notification, Commission, Need } = require('../../models');
const { Op } = require('sequelize')
const { dateConverter } = require('../../helpers/date-string');

class CommissionController {
    static async renderListMember(req, res, next) {
        const data = req.session

        try {
            res.render('members', {
                title: `Member List ${data.permission.commission_name}`,
                member_data_menu_open: 'menu-open',
                member_data_active: 'active',
                member_list_active: 'active'
            })
        } catch (error) {
            next({ error })
        }
    }

    static async renderCommissionList(req, res) {
        try {
            let commissions = [];

            let list = await Commission.findAll({ where: { deletedAt: null } });

            list.forEach((commission) =>
                commissions.push({
                    name: commission.name,
                    id: commission.id
                })
            )

            res.render('cms_admin/list-commission', {
                commissions: commissions,
                title: 'List of Commission',
                configuration_menu_open: 'menu-open',
                configuration_active: 'active',
                cms_commission_active: 'active',
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderEditCommission(req, res) {
        const { commission_id } = req.params

        try {
            let departments = [];

            const departmentList = await Commission.findAll({
                where: {
                    [Op.and]: [
                        {
                            [Op.and]: [
                                { child_order: 0 },
                                { id: { [Op.ne]: commission_id } }
                            ]
                        },
                        {
                            deletedAt: null
                        }
                    ]
                }
            });
            let detailCommission = await Commission.findOne({ where: { id: commission_id } })

            await departmentList.forEach((department) => {
                let temp = {
                    name: department.name,
                    id: department.id
                }
                departments.push(temp)
            })

            let commissionSelected = {
                name: detailCommission.name,
                child_order: detailCommission.child_order,
                id: detailCommission.id
            }

            res.render('cms_admin/edit-commission', {
                commissions: departments,
                commission: commissionSelected,
                title: `Edit Commission`,
                legend: `Edit Commission ${commissionSelected.name}`
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddCommission(req, res) {
        try {
            let departments = [];

            const departmentList = await Commission.findAll({
                where: {
                    [Op.and]: [
                        { child_order: 0 },
                        { deletedAt: null }
                    ]
                }
            });

            await departmentList.forEach((department) => {
                let temp = {
                    name: department.name,
                    id: department.id
                }
                departments.push(temp)
            })

            res.render('cms_admin/add-commission', {
                commissions: departments,
                title: 'Add Commission',
                legend: 'Add Commission'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddMember(req, res, next) {
        try {
            res.render('members/add', {
                title: 'Add Member',
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
                ],
                member_data_menu_open: 'menu-open',
                member_data_active: 'active',
                member_add_active: 'active'
            })
        } catch (error) {
            next({ error })
        }
    }

    static async addCommission(req, res) {
        const data = req.session
        const { name, commission } = req.body
        const titleCase = title => title
            .split(/ /g).map(word =>
                `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
            .join(" ");
        try {
            if (!name) {
                throw ({
                    message: 'Please fill up the name field'
                })
            } else {
                if (commission.toLowerCase() == 'none') {
                    let newCommission = {
                        name: titleCase(name),
                        child_order: 0
                    }
                    await Commission.create(newCommission)
                } else {
                    let newCommission = {
                        name: titleCase(name),
                        child_order: commission
                    }
                    await Commission.create(newCommission)
                }

                let log = {
                    log: JSON.stringify(req.body),
                    method: 'CREATE - Commission',
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', 'Commission berhasil di tambahkan')
                res.redirect('/cms/commission/commission-list')
            }
        } catch (error) {
            req.flash('msg_error', error.message || 'Ada error saat menambahkan commission, silahkan coba lagi')
            res.redirect('/cms/commission/add-commission')
        }
    }

    static async editCommission(req, res) {
        const data = req.session
        const { commission_id } = req.params
        const { name, commission } = req.body
        const titleCase = title => title
            .split(/ /g).map(word =>
                `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
            .join(" ");

        try {
            const commissionSelected = await Commission.findOne({ where: { id: commission_id } });

            if (titleCase(name) == commissionSelected.name && commission == 'None') {
                res.redirect('/cms/commission/commission-list')
            } else {
                let range = await Commission.count({ where: { id: commission } });

                let updatedCommission = {
                    name: titleCase(name),
                    child_order: range == 0 ? range : commission
                }

                await Commission.update(updatedCommission, { where: { id: commission_id } })

                let log = {
                    log: JSON.stringify(req.body),
                    method: 'UPDATE - Commission',
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', 'Commission berhasil di edit')
                res.redirect('/cms/commission/commission-list')
            }
        } catch (error) {
            req.flash('msg_error', 'Ada error saat mengubah commission, silahkan coba lagi')
            res.redirect('/cms/commission/commission-list')
        }
    }

    static async addMember(req, res, next) {
        const { members, role, commission } = req.body;
        const data = req.session

        try {
            let detailMembers = [], arr = [];

            if (members.length > 1) {
                arr = members.split(",");
            } else {
                arr.push(members);
            }

            let selectedRole = await Role.findOne({ where: { name: role } })
            let selectedCommission = await Commission.findOne({ where: { name: commission } })

            arr.forEach((member) => {
                let newMember = {
                    user_id: Number(member),
                    commission_id: selectedCommission.id,
                    role_id: selectedRole.id
                }

                detailMembers.push(newMember);
            })

            await detailMembers.forEach((member) => {
                User_Commission_Role.create(member)
            })

            let log = {
                log: JSON.stringify(req.body),
                method: 'CREATE - Role',
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'Member berhasil di tambahkan')
            res.redirect('/cms/commission/add')
        } catch (error) {
            req.flash('msg_error', 'Ada error saat menambahkan member, silahkan coba lagi')
            res.redirect('/cms/commission/add')
        }
    }

    static async getAllMember(req, res) {
        const { permission } = req.session
        let { search, length, draw, start, order, columns, data, commission } = req.query;
        let selected, parameter;

        try {

            columns.forEach((column) => {
                column.data == order[0].column ? selected = column.name : ''
            })

            if (data == 'member') {
                switch (permission.commission_name) {
                    case 'Design & Creative':
                        let commission = [];
                        let temp = await Commission.findAll({ where: { name: ['Creative', 'Design', permission.commission_name] } })
                        temp.forEach((com) => {
                            commission.push(com.id)
                        })

                        parameter = {
                            [Op.and]: [
                                {
                                    [Op.and]: [
                                        { commission_id: commission },
                                        { role_id: { [Op.ne]: permission.role_id } }
                                    ]
                                },
                                {
                                    deletedAt: null
                                }
                            ]
                        }
                        break;
                    case 'Penjadwalan':
                        let role = await Role.findOne({ where: { name: 'Pendeta' } })
                        parameter = {
                            [Op.and]: [
                                { role_id: role.id },
                                { deletedAt: null }
                            ]
                        }
                        break;
                    default:
                        parameter = {
                            [Op.and]: [
                                {
                                    [Op.and]: [
                                        { commission_id: permission.commission_id },
                                        { role_id: { [Op.ne]: permission.role_id } }
                                    ]
                                },
                                {
                                    deletedAt: null
                                }
                            ]
                        }
                        break;
                }
            } else {
                let temp;
                switch (permission.commission_name) {
                    case 'Design & Creative':
                        temp = await Commission.findOne({ where: { name: `${commission}` } })

                        parameter = {
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

                        }
                        break;
                    case 'Pemusik & Multimedia':
                        const role = await Role.findOne({ where: { name: data } });

                        parameter = {
                            [Op.and]: [
                                { role_id: role.id },
                                { deletedAt: null }
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

    static async assignMember(req, res, next) {
        const { need_id } = req.params;
        const { selected } = req.body;
        const data = req.session;
        let selectedNeed, assignPersonal, role, list = [];
        let commission_id;

        try {
            let need = await Need.findOne({ where: { id: need_id } });

            switch (data.permission.commission_name) {
                case 'Security MAG':
                case 'Security Kirana':
                    selectedNeed = {
                        security: JSON.parse(need.security)
                    }
                    selectedNeed.security['members'] = selected
                    selectedNeed.security['approved'] = true
                    await Need.update({ security: JSON.stringify(selectedNeed.security) }, { where: { id: need_id } })
                    break;
                case 'Pemusik & Multimedia':
                    selectedNeed = {
                        musicMultimedia: JSON.parse(need.musicMultimedia)
                    }
                    selectedNeed.musicMultimedia.team = ''
                    selectedNeed.musicMultimedia['members'] = selected
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
                        selectedNeed.designFlyer['members'] = design
                        selectedNeed.designFlyer['approved'] = true
                        console.log(selectedNeed.designFlyer)
                        await Need.update({ designFlyer: JSON.stringify(selectedNeed.designFlyer) }, { where: { id: need_id } })
                        commission_id = await Commission.findOne({ where: { name: 'Design' } })
                        await Commission_Notification.create({ commission_id: commission_id.id, need_id: need_id })
                    }

                    if (creative.length > 0) {
                        selectedNeed = {
                            creativeVideo: JSON.parse(need.creativeVideo)
                        }
                        selectedNeed.creativeVideo['members'] = creative
                        selectedNeed.creativeVideo['approved'] = true
                        await Need.update({ creativeVideo: JSON.stringify(selectedNeed.creativeVideo) }, { where: { id: need_id } })
                        commission_id = await Commission.findOne({ where: { name: 'Creative' } })
                        await Commission_Notification.create({ commission_id: commission_id.id, need_id: need_id })
                    }
                    break;
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

            await list.forEach((assign) => {
                User_Job_Event.create(assign);
            })

            let log = {
                log: JSON.stringify(req.body),
                method: 'CREATE - Assign',
                user: data.name
            }

            await Log.create(log)

            res.status(200).json({ redirectUrl: `/cms/needs/request`, message: req.flash('msg_info', 'Berhasil assign member for the request') })
        } catch (error) {
            console.log(error)
        }
    }

    static async registeredMember(req, res) {
        let { commission, role } = req.query;
        let data = req.session;
        let registered = [], list = [], department, parameter, selectedRole;

        try {
            switch (commission) {
                case 'Pemusik ':
                    department = 'Pemusik & Multimedia'
                    break;
                default:
                    department = commission
                    break;
            }

            let selectedCommission = await Commission.findOne({ where: { name: department } })

            switch (commission) {
                case 'IT':
                case 'Creative':
                case 'Design':
                    selectedRole = await Role.findAll({ where: { name: ['Admin', 'Manager', 'SuperAdmin'] } })
                    break;
                default:
                    selectedRole = await Role.findOne({ where: { name: role } })
                    break;
            }

            switch (data.permission.commission_name) {
                case 'Design & Creative':
                    list = []

                    selectedRole.forEach((role) => {
                        list.push(role.id)
                    })

                    parameter = {
                        [Op.and]: [
                            {
                                [Op.or]: [
                                    {
                                        [Op.and]: [
                                            { commission_id: selectedCommission.id },
                                            { role_id: list[0] }
                                        ]
                                    },
                                    {
                                        role_id: [list[1], list[2]]
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
                    list = []

                    selectedRole.forEach((role) => {
                        list.push(role.id)
                    })

                    parameter = {
                        [Op.and]: [
                            { role_id: list },
                            { deletedAt: null }
                        ]
                    }
                    break;
                case 'Penjadwalan':
                    parameter = {
                        [Op.and]: [
                            { role_id: selectedRole.id },
                            { deletedAt: null }
                        ]
                    }
                    break;
                default:
                    parameter = {
                        [Op.and]: [
                            {
                                [Op.and]: [
                                    { commission_id: selectedCommission.id },
                                    { role_id: selectedRole.id },
                                ]
                            },
                            {
                                deletedAt: null
                            }
                        ]
                    }
                    break;
            }

            let alreadyRegistered = await User_Commission_Role.findAll({
                where: parameter
            })

            if (alreadyRegistered) {
                alreadyRegistered.forEach((regis) => {
                    registered.push({
                        user_id: regis.user_id,
                        commission_id: regis.commission_id,
                        role_id: regis.role_id
                    })
                })
            }

            res.status(200).json(registered);
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteCommission(req, res) {
        const data = req.session;
        const { _method, commission_id } = req.body

        try {
            let currentDate = {
                deletedAt: new Date()
            };

            let detailData = await Commission.findOne({ where: { id: commission_id } })
            let user_role = await User_Commission_Role.update(currentDate, { where: { commission_id: commission_id } });
            let need = await Need.update(currentDate, { where: { commissionReq_id: commission_id } });
            let commission = await Commission.update(currentDate, { where: { id: commission_id } });

            let logText = {
                commission,
                user_role,
                need,
                detailData
            }

            let log = {
                log: JSON.stringify(logText),
                method: `${_method} - Commission`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'Berhasil me remove komisi')
            res.redirect('/cms/commission/commission-list')
        } catch (error) {
            req.flash('msg_error', error.message || 'Ada error saat mendelete komisi, silahkan coba lagi')
            res.redirect('/cms/commission/commission-list')
        }
    }
}

module.exports = CommissionController;