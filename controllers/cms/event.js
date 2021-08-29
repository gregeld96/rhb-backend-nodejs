const { Mass_Schedule, Mass_Category, Mass_Section, Log, Commission, Need, User_Commission_Role, Role, User_Job_Event, User_Event, User } = require('../../models');
const { Op } = require("sequelize");
const { singleDateConverter, manualISOString } = require('../../helpers/date-string');
const { deleteEvent } = require('../../helpers/add_event_calendar');
const EventService = require('../../services/event');
const DataTableService = require('../../services/data-table');
const OneSignalService = require('../../services/onesignal');

class EventController {
    static async renderListEvent(req, res) {

        try {
            res.render('event', {
                title: 'List of Event',
                list_mass_menu_open: 'menu-open',
                list_mass_active: 'active',
                mass_event_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering list event page");
            res.redirect('/cms/event/');
        }
    }

    static async getAllEvent(req, res, next) {
        let { length, draw, start, order, columns, search } = req.query;

        try {
            let response = await DataTableService.getAllEventBasedCommission({ length, draw, start, order, columns, search, commission: req.session.permission })

            if (response.data) {
                res.json(response.data);
            } else {
                throw ({
                    error: response.error
                })
            }
        } catch (error) {
            console.log({ error });
        }
    }

    static async renderAddEvent(req, res) {
        const { permission } = req.session;
        let categoryList, pasteursList;

        try {
            categoryList = await Mass_Category.findAll({
                where: {
                    deletedAt: null
                }
            });
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

            if (categoryList.length > 0) {
                let list = [];
                let pasteurs = [];

                if (pasteursList.length > 0) {
                    await pasteursList.forEach((user) => {
                        let temp = {
                            id: user.id,
                            name: user.User.full_name
                        }

                        pasteurs.push(temp)
                    });

                    await categoryList.forEach((category) => {
                        let temp = {
                            id: category.id,
                            title: category.title,
                        }

                        list.push(temp);
                    })

                    res.render('mass/add-schedule', {
                        title: 'Add Event',
                        categories: list,
                        pasteurs: pasteurs,
                        role_id: role.id,
                        list_mass_menu_open: 'menu-open',
                        list_mass_active: 'active',
                        mass_event_active: 'active'
                    })
                } else {
                    throw {
                        message: 'You are being redirecting because there is no pasteur'
                    }
                }
            } else {
                throw {
                    message: 'You are being redirecting because there is no categories'
                }
            }
        } catch (error) {
            if (permission.commission_name == 'Penjadwalan') {
                if (!categoryList.length) {
                    req.flash('msg_error', error.message || "Some error occurred while redering add event page");
                    res.redirect('/cms/penjadwalan/add-category');
                } else {
                    req.flash('msg_error', error.message || "Some error occurred while redering add event page");
                    res.redirect('/cms/commission/add');
                }
            } else {
                req.flash('msg_error', error.message || "Some error occurred while redering add event page");
                res.redirect('/cms/event/');
            }
        }
    }

    static async createEvent(req, res, next) {
        const { time_start, time_end, category_id, speaker, event_name } = req.body
        const data = req.session
        let user;
        let pembicara = {};
        try {
            if (!time_start || !time_end || !category_id || !speaker || !event_name) {
                throw {
                    message: 'Please fill up all the required field'
                }
            } else {
                if (Array.isArray(speaker)) {
                    for (let i = 0; i < speaker.length; i++) {
                        i == speaker.length - 1 ? pembicara['request'] = speaker[i] : pembicara['pasteur'] = speaker[i]
                    }
                } else {
                    pembicara.pasteur = speaker
                    pembicara.request = "false";
                }

                let pendeta = await Role.findOne({ where: { name: 'Pendeta' } });
                const commissionReq = await Commission.findOne({ where: { name: data.permission.commission_name } });
                user = await User.findOne({ where: { full_name: pembicara.pasteur } });

                if (user) {
                    pembicara.required = true;
                    pembicara.pasteur_id = user.id
                    pembicara.commission = commissionReq.id
                    pembicara.role_name = "Pendeta"

                    let newSchedule = {
                        name: event_name,
                        time_start: time_start,
                        time_end: time_end,
                        category_id,
                    }

                    const event = await Mass_Schedule.create(newSchedule);

                    let newNeed = {
                        pembicara: JSON.stringify(pembicara),
                        commissionReq_id: commissionReq.id,
                        event_id: event.id,
                        event_name: event_name,
                        time_start: time_start,
                        time_end: time_end,
                    }

                    const need = await Need.create(newNeed);
                    await Mass_Schedule.update({ need_id: need.id }, { where: { id: event.id } })

                    let assign = {
                        user_id: user.id,
                        event_id: event.id,
                        role_id: pendeta.id,
                        need_id: need.id,
                        commission_job_id: commissionReq.id
                    }

                    await User_Job_Event.create(assign);

                    await OneSignalService.jobNotif({
                        onesignal_id: [user.token_oneSignal],
                        name: 'Job Request',
                        event: {
                            name: event_name,
                            time_start: time_start,
                            time_end: time_end,
                        }
                    });

                    let log = {
                        log: JSON.stringify(req.body),
                        method: `CREATE - Event`,
                        user: data.name
                    }

                    await Log.create(log)

                    if (data.permission.commission_name == 'Penjadwalan') {
                        req.flash('msg_info', 'Event berhasil di buat');
                        res.redirect(`/cms/penjadwalan/${category_id}`);
                    } else {
                        req.flash('msg_info', 'Event berhasil di buat');
                        res.redirect('/cms/event/');
                    }
                } else {
                    throw {
                        message: "Pembicara yang anda pilih tidak terdaftar, tolong pilih pembicara sesuai data yang terdaftar"
                    }
                }

            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while create schedule. Please try again..");
            res.redirect('/cms/event/add-event');
        }
    }

    static async renderEditEvent(req, res) {
        const { permission } = req.session;
        const { need_id } = req.params;
        let categoryDetail, list = [];

        try {
            const event_detail = await Need.findOne({
                where: {
                    id: need_id
                }
            })

            categoryDetail = await Mass_Schedule.findOne({
                where: {
                    id: event_detail.event_id
                },
                include: [
                    {
                        model: Mass_Category
                    }
                ]
            })

            const categoryList = await Mass_Category.findAll({
                where: {
                    deletedAt: null
                }
            });

            await categoryList.forEach((category) => {
                let temp = {
                    id: category.id,
                    title: category.title,
                }

                list.push(temp);
            })

            let timeStart = manualISOString(event_detail.time_start);
            let timeEnd = manualISOString(event_detail.time_end);

            res.render('event/edit', {
                title: 'Edit Event',
                legend: `Edit ${event_detail.event_name}`,
                data: {
                    id: event_detail.id,
                    name: event_detail.event_name,
                    start: timeStart,
                    end: timeEnd,
                    category_id: categoryDetail.category_id
                },
                categories: list
            })

        } catch (error) {
            if (permission.commission_name == 'Penjadwalan') {
                req.flash('msg_error', error.message || "Some error occurred while redering edit event page");
                res.redirect(`/cms/penjadwalan/${categoryDetail.category_id}`);
            } else {
                req.flash('msg_error', error.message || "Some error occurred while redering edit event page");
                res.redirect('/cms/event/');
            }
        }
    }

    static async editEvent(req, res) {
        const data = req.session;
        const { need_id } = req.params;
        const { event_name, time_start, time_end, category_id } = req.body

        try {
            const category_detail = await Mass_Schedule.findOne({
                where: {
                    need_id: need_id
                }
            })

            await Mass_Schedule.update({ name: event_name, time_start: time_start, time_end: time_end, category_id: category_id }, { where: { id: category_detail.id } })
            await Need.update(req.body, { where: { id: need_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `UPDATE - Event`,
                user: data.name
            }

            await Log.create(log)

            if (data.permission.commission_name == 'Penjadwalan') {
                req.flash('msg_info', `Event ${event_name} successfully updated`);
                res.redirect(`/cms/penjadwalan/${category_detail.category_id}`);
            } else {
                req.flash('msg_info', `Event ${event_name} successfully updated`);
                res.redirect('/cms/event/');
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while update the event");
            res.redirect(`/cms/event/edit/${need_id}`);
        }
    }

    static async renderBannerEvent(req, res) {
        const { need_id } = req.query;

        try {
            let response = await EventService.getEventCategory({ need_id });

            if (response.data) {
                res.render('event/add-banner', {
                    title: 'Update Banner',
                    list_mass_menu_open: 'menu-open',
                    list_mass_active: 'active',
                    need_id,
                    commission: req.session.permission.commission_name,
                    category_id: response.data
                })
            } else {
                throw ({
                    error: response
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async addBanner(req, res) {
        const { need_id } = req.params;

        try {
            let response = await EventService.addEventBanner({ files: req.files, info: req.session, need_id })

            if (response.status == 200) {
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(`/cms/event/add-banner?need_id=${need_id}`);
        }
    }

    static async needDelete(req, res) {
        const { need_id } = req.body
        const data = req.session

        try {
            let currentDate = {
                deletedAt: new Date()
            };

            let schedule = await Need.findOne({ where: { id: need_id } })
            let event_location = JSON.parse(schedule.ruangan), calendarId;

            if (event_location) {
                if (event_location.location == 'MAG') {
                    calendarId = process.env.CALENDAR_ID_MAG //GregEld GCalendar Dev
                } else {
                    calendarId = process.env.CALENDAR_ID_KIRANA //Gregorius GCalendar Dev
                }
            }

            if (schedule.calendarId) {
                await deleteEvent(schedule.calendarId, calendarId);
            }

            await Need.update(currentDate, { where: { id: need_id } })
            await Mass_Schedule.update(currentDate, { where: { need_id: need_id } })
            await User_Event.update(currentDate, { where: { event_id: schedule.event_id } })
            await User_Job_Event.update(currentDate, { where: { need_id: need_id } })


            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - Event`,
                user: data.name
            }

            await Log.create(log)

            if (data.permission.commission_name == 'Penjadwalan') {
                req.flash('msg_info', `Event successfully deleted`);
                res.redirect('/cms/penjadwalan/category');
            } else {
                req.flash('msg_info', `Event successfully deleted`);
                res.redirect('/cms/event/');
            }
        } catch (error) {
            if (data.permission.commission_name == 'Penjadwalan') {
                req.flash('msg_error', error.message || `Some error occurred while deleted the schedule`);
                res.redirect('/cms/penjadwalan/category');
            } else {
                req.flash('msg_error', error.message || `Some error occurred while deleted the schedule`);
                res.redirect('/cms/event/');
            }
        }
    }
}

module.exports = EventController;