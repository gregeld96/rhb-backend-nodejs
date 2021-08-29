const DataTableService = require('../../services/data-table')
const ParishService = require('../../services/parish-service');

class DedicationController {
    static async getScheduleDedication(req, res) {
        let { search, length, draw, start, order, columns, section } = req.query;

        try {
            let response = await DataTableService.getParishSchedule({ search, length, draw, start, order, columns, section });

            if (response.status == 200) {
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

    static async renderListSchedule(req, res, next) {
        try {
            res.render('pelayanan', {
                title: 'List of Schedule',
                section: 'dedication',
                serve_menu_open: 'menu-open',
                serve_active: 'active',
                dedication_list_active: 'active'
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
                    title: 'Add Penyerahan Schedule',
                    legend: 'Add Penyerahan Schedule',
                    members: response.members,
                    section: 'dedication',
                    serve_menu_open: 'menu-open',
                    serve_active: 'active',
                    dedication_list_active: 'active'
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
            let event = await ParishService.getParishEventData({ id, section: 'dedication' })

            res.render('pelayanan/edit', {
                title: `Edit Schedule`,
                legend: `Edit Schedule`,
                data: event.data,
                members: list.members,
                section: 'dedication'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editSchedule(req, res, next) {
        const { need_id } = req.params

        try {
            let response = await ParishService.editParishSchedule({ request: req.body, need_id, session: req.session })

            if (response.status == 200) {
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
            } else {
                throw ({
                    message: response.message,
                    redirect: response.redirect
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while edit schedule");
            res.redirect(error.redirect);
        }
    }

    static async getParticipant(req, res) {
        let { search, length, draw, start, order, columns, event_id } = req.query;

        try {
            let response = await DataTableService.getParishParticipant({ section: 'dedication', search, length, draw, start, order, columns, event_id })

            if (response.status == 200) {
                res.json(response.table);
            } else {
                throw ({
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
                section: 'dedication'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteSchedule(req, res) {
        const { schedule_id } = req.body

        try {
            let response = await ParishService.removeSchedule({ schedule_id, section: 'dedication', session: req.session })

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
        const { user_id, event_id } = req.params;
        const { service_id } = req.query;

        try {
            let response = await ParishService.getDedicationParticipant({ user_id, event_id, service_id });

            if (response.data) {
                res.render('participant/detail-dedication', {
                    title: 'Participant Detail',
                    data: response.data,
                    event_id,
                    section: 'dedication',
                    serve_menu_open: 'menu-open',
                    serve_active: 'active',
                    dedication_list_active: 'active'
                })
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(`/cms/dedication/participant?id=${event_id}`)
        }
    }

    static async statusParticipant( req, res){
        const { status, service_id } = req.body;

        try {
            let response = await ParishService.statusParishEventParticipant({service_id, section: 'dedication', status})

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
}

module.exports = DedicationController;