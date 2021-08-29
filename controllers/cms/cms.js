const { User, Commission, Role, Log, User_Commission_Role, Need, Commission_Notification } = require('../../models');
const { checkPassword } = require('../../helpers/bcrypt');
const { Op } = require('sequelize');
const { singleDateConverter } = require('../../helpers/date-string');

class CMSController {
    static renderLogin(req, res, next) {
        const { permission } = req.session
        try {
            if (permission) {
                res.redirect(`/cms/home`);
            } else {
                res.render('auth/login', {
                    title: 'CMS Login',
                    layout: false
                })
            }
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const { password, email } = req.body;

        try {
            let userData = await User.findOne({ where: { email } });

            if (!userData) {
                throw {
                    message: 'Email atau Password salah'
                }
            } else {
                if (!checkPassword(password, userData.password)) {
                    throw {
                        message: 'Email atau Password salah'
                    }
                } else {
                    let roleList = await Role.findAll({ where: { name: ['Admin', 'Manager', 'SuperAdmin'] }, attributes: ['id', 'name'] })
                    let commissionList = await User_Commission_Role.findAll({
                        where: {
                            [Op.and]: [
                                { user_id: userData.id },
                                { deletedAt: null }
                            ]
                        },
                        include: [
                            {
                                model: Commission,
                                attributes: ['name']
                            }
                        ]
                    })
                    let departmentAdmin = {};

                    if (commissionList.length > 0) {
                        for (let user_commission of commissionList) {
                            for (let role of roleList) {
                                if (user_commission.role_id == role.id) {
                                    departmentAdmin = {
                                        role_id: role.id,
                                        role_name: role.name,
                                        commission_id: user_commission.commission_id,
                                        commission_name: user_commission.Commission.name
                                    }
                                }
                            }
                        }
                    }

                    let notif = await Commission_Notification.findAndCountAll({
                        where: {
                            commission_id: departmentAdmin.commission_id,
                            status: {
                                [Op.ne]: true
                            }
                        },
                        order: [
                            ['createdAt', 'DESC']
                        ],
                        include: [
                            {
                                model: Need
                            }
                        ]
                    })

                    let data = [];

                    await notif.rows.forEach((detail) => {
                        data.push({
                            event_name: detail.Need.event_name,
                            time: singleDateConverter(detail.Need.time_start)
                        })
                    })

                    if (departmentAdmin) {
                        req.session.user_id = userData.id;
                        req.session.email = userData.email;
                        req.session.name = userData.full_name;
                        req.session.photo = userData.profile_pic;
                        req.session.permission = departmentAdmin;
                        req.session.notif = {
                            totalNotif: notif.count,
                            detail_notif: data
                        }

                        res.redirect(`/cms/home`);
                    } else {
                        throw {
                            message: 'Kamu tidak ada role di komisi'
                        }
                    }
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while login.");
            res.redirect('/cms/login')
        }
    }

    static async renderHomePage(req, res, next) {
        try {
            res.render('home/index', {
                title: 'Home',
                home_active: 'active',
            });
        } catch (error) {
            next(error);
        }
    }

    static async logout(req, res) {
        req.session.destroy();
        res.redirect('/cms/login');
    }

    static async getAllUser(req, res, next) {
        let { search, length, draw, start, order, columns } = req.query;
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

            let users = await User.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            full_name: {
                                [Op.like]: `%${search.value}%`
                            }
                        },
                        {
                            deletedAt: null
                        }
                    ]

                },
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start),
            });

            table.recordsTotal = users.count;
            table.recordsFiltered = users.count;

            for (let key in users.rows) {
                table.data.push([
                    users.rows[key]['full_name'],
                    `0${users.rows[key]['phone_number']}`,
                    users.rows[key]['email'],
                    users.rows[key]['id']
                ]);
            }

            res.json(table)
        } catch (error) {
            console.log(error)
        }
    }

    static async renderAdminList(req, res) {
        let adminList = []
        let roleList = []
        try {
            const roles = await Role.findAll({ where: { name: ['Manager', 'SuperAdmin'] }, attributes: ['id'] });
            await roles.forEach((role) => {
                roleList.push(role.id)
            })

            const list = await User_Commission_Role.findAll({
                where: {
                    [Op.and]: [
                        { role_id: roleList },
                        { deletedAt: null }
                    ]
                },
                include: [
                    {
                        model: User,
                        attributes: ['full_name', 'phone_number', 'email']
                    },
                    {
                        model: Role,
                        attributes: ['name']
                    },
                    {
                        model: Commission,
                        attributes: ['name']
                    }
                ]
            })

            await list.forEach((user) => {
                let temp = {
                    name: user.User.full_name,
                    email: user.User.email,
                    phone: user.User.phone_number,
                    department: user.Commission.name,
                    role: user.Role.name,
                    id: user.id //Id dari user commission role
                }

                adminList.push(temp)
            })

            res.render('cms_admin', {
                title: 'CMS Admin List',
                configuration_menu_open: 'menu-open',
                configuration_active: 'active',
                cms_admin_active: 'active',
                adminList
            })
        } catch (error) {
            console.error(error);
        }
    }

    static async renderAddAdmin(req, res) {
        let roles = [];
        let departments = [];

        try {
            const roleList = await Role.findAll({ where: { name: ['Manager'] } });
            const departmentList = await Commission.findAll({
                where: {
                    [Op.and]: [
                        { child_order: 0 },
                        { deletedAt: null }
                    ]
                }
            });

            await roleList.forEach((role) => {
                let temp = {
                    name: role.name,
                    id: role.id
                }
                roles.push(temp)
            })

            await departmentList.forEach((department) => {
                let temp = {
                    name: department.name,
                    id: department.id
                }
                departments.push(temp)
            })

            res.render('cms_admin/add', {
                title: 'Add Admin',
                roles,
                departments
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async addAdmin(req, res) {
        const { user, role, department } = req.body;
        const data = req.session

        try {
            if (!user || !role || !department) {
                throw ({
                    message: 'Please fill up all the form requirement'
                })
            } else {
                let newUserRole = {
                    user_id: user,
                    role_id: role,
                    commission_id: department
                }

                await User_Commission_Role.create(newUserRole);

                let log = {
                    log: JSON.stringify(req.body),
                    method: 'CREATE - Role Admin',
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', 'User success added as Admin')
                res.redirect('/cms/cms-admin')
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while add admin.");
            res.redirect('/cms/add-admin')
        }
    }

    static async renderEditAdmin(req, res) {
        const { commission_role_id } = req.params

        try {
            let roles = [];
            let commissions = [];

            const userData = await User_Commission_Role.findOne({
                where: { id: commission_role_id },
                include: [
                    {
                        model: User,
                        attributes: ['full_name']
                    }
                ]
            });

            const roleList = await Role.findAll({ where: { name: ['Manager'] } });

            roleList.forEach((role) => {
                roles.push({
                    id: role.id,
                    name: role.name
                })
            })

            const commissionList = await Commission.findAll({
                where: {
                    [Op.and]: [
                        { child_order: 0 },
                        { deletedAt: null }
                    ]
                }
            });

            commissionList.forEach((commission) => {
                commissions.push({
                    id: commission.id,
                    name: commission.name
                })
            })

            const data = {
                id: userData.id,
                user_name: userData.User.full_name,
                user_id: userData.user_id,
                commission_id: userData.commission_id,
                role_id: userData.role_id
            }

            res.render('cms_admin/edit', {
                title: 'Edit Admin Role',
                roles,
                commissions,
                data
            })

        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while render edit page.");
            res.redirect('/cms/cms-admin')
        }
    }

    static async editAdmin(req, res) {
        const { commission_role_id } = req.params
        const { role, department } = req.body
        const data = req.session

        try {
            let updatedUserRole = {
                role_id: role,
                commission_id: department
            }

            await User_Commission_Role.update(updatedUserRole, { where: { id: commission_role_id } });

            let log = {
                log: JSON.stringify(req.body),
                method: 'UPDATE - Role Admin',
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', 'User successfully edited')
            res.redirect('/cms/cms-admin')
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while login.");
            res.redirect('/cms/edit-admin')
        }
    }

    static async deleteMember(req, res) {
        const { user_role_id } = req.body
        const data = req.session

        try {
            let currentDate = {
                deletedAt: new Date()
            };

            await User_Commission_Role.update(currentDate, { where: { id: user_role_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: 'DELETE - Role Admin',
                user: data.name
            }

            await Log.create(log)

            if (data.permission.commission_name == 'IT') {
                req.flash('msg_info', 'User successfully deleted')
                res.redirect('/cms/cms-admin')
            } else {
                req.flash('msg_info', 'User successfully deleted')
                res.redirect('/cms/commission/member-list')
            }
        } catch (error) {
            if (data.permission.commission_name == 'IT') {
                req.flash('msg_error', error.message || "Some error occurred while delete admin.");
                res.redirect('/cms/cms-admin')
            } else {
                req.flash('msg_error', error.message || "Some error occurred while delete admin.");
                res.redirect('/cms/commission/member-list')
            }
        }
    }

    static async updateNotif (req, res){
        const data = req.session
        try {
            let notif = await Commission_Notification.findAll({
                where: {
                    commission_id: data.permission.commission_id
                }
            })

            let temp = []

            await notif.forEach((detail) => {
                temp.push(detail.id)
            })

            await Commission_Notification.update({status: true}, {where: {id: temp}})
            
            data.notif.totalNotif = 0;

            res.status(200).json({message: 'Berhasil'})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CMSController;