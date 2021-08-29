const ParishService = require('../../services/parish-service');
const DataTableService = require('../../services/data-table');

class MarriageController {
    static async getScheduleMarriage(req, res) {
        let {
            length,
            draw,
            start,
            order,
            columns
        } = req.query;

        try {
            let response = await DataTableService.marriageSchedule({
                length,
                draw,
                start,
                order,
                columns
            })

            if (response.status == 200) {
                res.json(response.table);
            } else {
                throw {
                    message: response.message
                }
            }
        } catch (error) {
            res.send(error);
        }
    }

    static async renderListSchedule(req, res) {
        try {
            res.render('pelayanan/marriage', {
                title: 'List of Schedule',
                data: {
                    section: 'marriage'
                },
                serve_menu_open: 'menu-open',
                serve_active: 'active',
                marriage_list_active: 'active'
            });
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering list marriage page");
            res.redirect(`/cms/marriage`);
        }
    }

    static async renderAddSchedule(req, res) {
        try {
            let response = await ParishService.getMember(req)

            if (response.members.length > 0) {
                res.render('pelayanan/add-marriage', {
                    title: 'Add Marriage Schedule',
                    legend: 'Add Marriage Schedule',
                    members: response.members
                });
            } else {
                throw {
                    message: response.message || 'You are being redirecting because there is no members commission'
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect('/cms/commission/add');
        }
    }

    static async addSchedule(req, res, next) {
        try {
            const response = await ParishService.addMarriageSchedule({
                request: req.body,
                session: req.session
            })

            if (response.status == 201) {
                req.flash('msg_info', `Successful create schedule`);
                res.redirect('/cms/marriage/');
            } else {
                throw {
                    message: response.message
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while add schedule");
            res.redirect('/cms/marriage/add');
        }
    }

    static async statusParticipant(req, res) {
        const {
            marriage_id,
            bpn_id,
            status,
            user_id
        } = req.body
        try {
            let response = await ParishService.statusParishEventParticipant({
                section: 'marriage',
                status: status,
                service_id: bpn_id,
                user_id: user_id,
                marriage_id
            })

            if (response.status === 200) {
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw {
                    redirect: response.redirect,
                    message: response.message
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(error.redirect)
        }
    }

    // static async renderEditSchedule(req, res) {
    //     const { id } = req.params
    //     let { permission } = req.session
    //     let memberList;

    //     try {
    //         const schedule = await Baptism.findOne({
    //             where: { id: id },
    //             include: [
    //                 {
    //                     model: User
    //                 }
    //             ]
    //         })

    //         memberList = await User_Commission_Role.findAll({
    //             where: {
    //                 commission_id: permission.commission_id,
    //                 deletedAt: null
    //             },
    //             include: [
    //                 {
    //                     model: User,
    //                     attributes: ['id', 'full_name']
    //                 }
    //             ]
    //         })

    //         let members = [];

    //         await memberList.forEach((user) => {
    //             let temp = {
    //                 id: user.id,
    //                 name: user.User.full_name
    //             }

    //             members.push(temp)
    //         });

    //         res.render('pelayanan/edit', {
    //             title: `Edit Schedule`,
    //             legend: `Edit Schedule`,
    //             data: {
    //                 id,
    //                 quota: schedule.quota,
    //                 time_start: schedule.time_start.toISOString().substring(0, 23),
    //                 time_end: schedule.time_end.toISOString().substring(0, 23),
    //                 title: schedule.title,
    //                 member: {
    //                     name: schedule.User.full_name
    //                 },
    //                 need_id: schedule.need_id
    //             },
    //             members: members,
    //             section_mode: 'baptism'
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // static async editSchedule(req, res, next) {
    //     const { id } = req.params
    //     const { quota, time_start, time_end, member, title } = req.body;
    //     const data = req.session

    //     try {
    //         const user = await User.findOne({ where: { full_name: member } })

    //         let updatedSchedule = {
    //             quota,
    //             time_start,
    //             time_end,
    //             user_id: user.id,
    //             title,
    //             section: 'Baptism'
    //         }

    //         let updatedNeed = {
    //             time_start,
    //             time_end,
    //             event_name: title,
    //             section: 'Baptism'
    //         }

    //         await Baptism.update(updatedSchedule, { where: { need_id: id } })
    //         await Need.update(updatedNeed, { where: { id: id } })

    //         let log = {
    //             log: JSON.stringify(req.body),
    //             method: `UPDATE - Schedule Baptism`,
    //             user: data.name
    //         }

    //         await Log.create(log)

    //         req.flash('msg_info', `Successful edit schedule`);
    //         res.redirect(`/cms/baptism/`);
    //     } catch (error) {
    //         req.flash('msg_error', error.message || "Some error occurred while edit schedule");
    //         res.redirect('/cms/baptism/');
    //     }
    // }

    static async getParticipant(req, res) {
        let {
            search,
            length,
            draw,
            start,
            order,
            columns,
            bpn_id
        } = req.query;

        try {
            let response = await DataTableService.getMarriageParticipant({
                search,
                length,
                draw,
                start,
                order,
                columns,
                bpn_id: bpn_id
            })

            if (response.status === 200) {
                res.json(response.table);
            } else {
                throw {
                    message: response.message
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    static async renderListParticipant(req, res) {
        const {
            id
        } = req.query

        try {
            res.render('pelayanan/participant-marriage', {
                title: `List of Participant`,
                legend: `List of Participant`,
                data: {
                    id,
                },
                section: 'marriage'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteSchedule(req, res) {
        const {
            schedule_id
        } = req.body

        try {
            let response = await ParishService.removeSchedule({
                schedule_id,
                section: 'marriage',
                session: req.session
            })

            if (response.status === 200) {
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw {
                    redirect: response.redirect,
                    message: response.message
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(error.redirect)
        }
    }

    static async uploadParticipantPhoto(req, res) {
        const {
            marriage_id,
            bpn_id
        } = req.body

        try {
            let response = await ParishService.uploadMarriagePhoto({
                marriage_id,
                bpn_id,
                file: req.files[0].filename,
            })

            if (response.status === 200) {
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw {
                    redirect: response.redirect,
                    message: response.message
                }
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(error.redirect)
        }
    }

    static async getSpecificParticipant(req, res) {
        const {
            marriage_id
        } = req.params;

        try {
            let response = await ParishService.getMarriageParticipant({
                marriage_id
            });

            if (response.data) {
                res.render('participant/detail-marriage', {
                    bpn_id: response.data.bpn_id,
                    title: 'Detail Marriage Participant',
                    data: response.data,
                    section: 'marriage',
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async renderBlessingSchedule(req, res) {
        const {
            id
        } = req.query;

        try {
            let response = await ParishService.getMarriageDate({
                marriage_id: id
            });

            if (response.data) {
                res.render('pelayanan/blessing-marriage', {
                    title: 'Blessing Date',
                    data: response.data.date,
                    bpn_id: response.data.bpn_id,
                    section: 'marriage',
                    legend: 'Marriage ' + response.data.marriage,
                    need_id: response.data.need_id,
                })
            }
        } catch (error) {
            console.log(error);

        }
    }

    static async blessingSchedule(req, res) {
        let {
            marriage_blessing_start,
            marriage_blessing_end,
            bpn_id
        } = req.body;
        let {
            need_id
        } = req.params;

        try {
            let response = await ParishService.updatedBlessingDate({
                marriage_date_start: marriage_blessing_start,
                marriage_date_end: marriage_blessing_end,
                need_id
            });

            if(response.data){
                req.flash('msg_info', response.message);
                res.redirect(`/cms/marriage/participant?id=${bpn_id}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = MarriageController;