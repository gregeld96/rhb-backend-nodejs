const ParishService = require('../../services/parish-service');
const DataTableService = require('../../services/data-table');

class BaptismController {
    static async getScheduleBaptism(req, res) {
        let { search, length, draw, start, order, columns, section } = req.query;

        try {
            let response = await DataTableService.getParishSchedule({ search, length, draw, start, order, columns, section });

            if(response.status == 200){
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

    static async renderListSchedule(req, res) {
        try {
            res.render('pelayanan', {
                title: 'List of Schedule',
                section: 'baptism',
                serve_menu_open: 'menu-open',
                serve_active: 'active',
                baptism_list_active: 'active'
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async renderAddSchedule(req, res) {
        try {
            let response = await ParishService.getMember(req)

            if (response.members.length > 0) {
                res.render('pelayanan/add', {
                    title: 'Add Baptism Schedule',
                    legend: 'Add Baptism Schedule',
                    members: response.members,
                    section: 'baptism',
                    serve_menu_open: 'menu-open',
                    serve_active: 'active',
                    baptism_list_active: 'active'
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

    static async addSchedule(req, res) {
        try {
            const response = await ParishService.addParishSchedule({ request: req.body, session: req.session })

            if (response.status == 201) {
                req.flash('msg_info', `Successful create schedule`);
                res.redirect(`/cms/${req.body.section}/`);
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(`/cms/${req.body.section}/add`);
        }
    }

    static async renderEditSchedule(req, res) {
        const { id } = req.params

        try {
            let list = await ParishService.getMember(req);
            let event = await ParishService.getParishEventData({ id, section: 'baptism'})

            res.render('pelayanan/edit', {
                title: `Edit Schedule`,
                legend: `Edit Schedule`,
                data: event.data,
                members: list.members,
                section: 'baptism'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editSchedule(req, res, next) {
        const { need_id } = req.params

        try {
            let response = await ParishService.editParishSchedule({request: req.body, need_id, session: req.session})

            if(response.status == 200){
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw({
                    message: response.message,
                    redirect: response.redirect
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while edit schedule");
            res.redirect(error.redirect);
        }
    }

    static async getParticipant(req, res, next) {
        let { search, length, draw, start, order, columns, event_id } = req.query;

        try {
            let response = await DataTableService.getParishParticipant({section: 'baptism', search, length, draw, start, order, columns, event_id})
            
            if(response.status == 200){
                res.json(response.table);
            } else {
                throw({
                    message: response.message
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async renderListParticipant(req, res) {
        const { id } = req.query

        try {
            res.render('pelayanan/participant', {
                title: `List of Participant`,
                legend: `List of Participant`,
                data: {
                    id,
                },
                section: 'baptism'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteSchedule(req, res) {
        const { schedule_id } = req.body

        try {
            let response = await ParishService.removeSchedule({schedule_id, section: 'baptism', session: req.session})

            if(response.status === 200){
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

    static async statusParticipant (req, res){
        const { status, service_id } = req.body;

        try {
            let response = await ParishService.statusParishEventParticipant({service_id, section: 'baptism', status})

            if(response.status === 200){
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

    static async getSpecificParticipant (req, res){
        const { user_id, event_id } = req.params;

        try {
            let response = await ParishService.getBaptismParticipant({user_id, event_id});

            if(response.data){
                res.render('participant/detail-baptism', {
                    title: 'Participant Detail',
                    user: response.data,
                    event_id,
                    section: 'baptism',
                    serve_menu_open: 'menu-open',
                    serve_active: 'active',
                    baptism_list_active: 'active'
                })
            } else {
                throw({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(`/cms/baptism/participant?id=${event_id}`)
        }
    }
}

module.exports = BaptismController;