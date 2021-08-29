const ClassEventService = require('../../services/class-service');
const DataTableService = require('../../services/data-table');

class ServiceClassController {
    static async listSectionClass(req, res) {
        const { section, id } = req.params;

        try {
            let response = await ClassEventService.getListClass({ section: section, event_id: id });

            if (!response.message) {
                res.render('class-service', {
                    title: `List class`,
                    section: section,
                    event_id: id,
                    classes: response.data
                })
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering list class page");
            res.redirect(`/cms/${section}`);
        }
    }

    static async renderAddClass(req, res) {
        const { section, id } = req.params;

        try {
            res.render('class-service/add', {
                title: `Add class`,
                section: section,
                id: id,
            })
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering add class page");
            res.redirect(`/cms/${section}`);
        }
    }

    static async addClass(req, res) {
        const { section, id } = req.params;
        const { list } = req.body;

        try {
            let response = await ClassEventService.addClass({ list: list })

            if (response.status == 201) {
                res.status(200).json({ redirectUrl: `/cms/class/list/${section}/${id}`, message: req.flash('msg_info', `${response.message}`) })
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            res.status(error.status).json({ redirectUrl: `/cms/class/add/${section}/${id}`, message: req.flash('msg_error', `${error.message || "Some error occurred while redering add class page"}`) });
        }
    }

    static async deleteClass(req, res) {
        const { section, id } = req.params;
        const { class_id } = req.body;
        try {
            let response = await ClassEventService.removeClass({ id: class_id });
            if (response.status == 200) {
                req.flash('msg_info', response.message);
                res.redirect(`/cms/class/list/${section}/${id}`);
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while deleting class data");
            res.redirect(`/cms/class/list/${section}/${id}`);
        }
    }

    static async renderClassParticipant(req, res) {
        const { section, class_id, event_id } = req.query

        try {
            let selectedName;

            switch (section) {
                case 'baptism':
                    selectedName = 'Baptism';
                    res.render('class-service/class-participant', {
                        title: `Participant List Class ${selectedName}`,
                        legend: `Participant List Class ${selectedName}`,
                        section: section,
                        class_id: class_id,
                        event_id: event_id,
                        serve_menu_open: 'menu-open',
                        serve_active: 'active',
                        baptism_list_active: 'active'
                    })
                    break;
                case 'marriage':
                    selectedName = 'BPN';
                    res.render('class-service/class-participant', {
                        title: `Participant List Class ${selectedName}`,
                        section: section,
                        class_id: class_id,
                        event_id: event_id,
                        serve_menu_open: 'menu-open',
                        serve_active: 'active',
                        marriage_list_active: 'active'
                    })
                    break;
                default:
                    break;
            }

        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering add class page");
            res.redirect(`/cms/class/list/${section}/${event_id}`);
        }
    }

    static async getParticipantList(req, res) {
        let { search, length, draw, start, order, columns, class_id } = req.query;

        try {
            let response = await DataTableService.classParticipantList({ search, length, draw, start, order, columns, class_id })

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

    static async statusParticipantClass(req, res) {
        const { section, event_id } = req.params;
        const { id, status, class_id, user_id } = req.body

        try {
            let response = await ClassEventService.userParticipantStatus({status, id, user_id, section, event_id, class_id});

            if(response.status == 200){
                req.flash('msg_info', response.message);
                res.redirect(response.redirect);
                // res.redirect(`/cms/class/participant?section=${section}&class_id=${class_id}&event_id=${event_id}`);
            } else {
                throw({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message);
            res.redirect(response.redirect);
            // res.redirect(`/cms/class/participant?section=${section}&class_id=${class_id}&event_id=${event_id}`);
        }
    }

    static async renderParticipantClass (req, res){
        const { user_id } = req.params;
        const { section, event_id } = req.query

        try {
            let response = await ClassEventService.getUserClass({ section, event_id, user_id });

            if (!response.message) {
                res.render('class-service/participant-class', {
                    title: `List class`,
                    section,
                    event_id,
                    user_id,
                    classes: response.data
                })
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            req.flash('msg_error', error.message || "Some error occurred while redering list class page");
            res.redirect(`/cms/class/user-class/${user_id}`);
        }
    }
}

module.exports = ServiceClassController;