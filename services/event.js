const { Mass_Schedule, Mass_Category, Mass_Section, Log, Commission, Need, User_Commission_Role, Role, User_Job_Event, User_Event, User } = require('../models');
const { Op } = require("sequelize");
const { singleDateConverter, manualISOString } = require('../helpers/date-string');
const { deleteEvent } = require('../helpers/add_event_calendar');
const removePhoto = require('../helpers/remove_photo');

class EventService {
    /** Event CMS Service */
    static async getEventCategory({ need_id }) {
        try {
            let category = await Mass_Schedule.findOne({
                where: {
                    need_id: need_id
                },
                include: [
                    {
                        model: Mass_Category,
                        attributes: [
                            'id'
                        ]
                    }
                ]
            })

            return { data: category.Mass_Category.id }
        } catch (error) {
            return { data: null, message: error.message }
        }
    }

    static async addEventBanner({ files, info, need_id }) {
        let redirect;

        try {
            let eventBanner = await Mass_Schedule.findOne({
                where: {
                    need_id: need_id
                },
                attributes: [
                    'id',
                    'banner'
                ]
            })

            let result = await this.getEventCategory({ need_id })

            if (info.permission.commission_name == 'Penjadwalan') {
                redirect = `/cms/penjadwalan/${result.data}`;
            } else {
                redirect = '/cms/event/';
            }

            if (eventBanner.banner) {
                let path = 'Public/photos/public/banner/'
                removePhoto(path + eventBanner.banner);
            }

            await Mass_Schedule.update({ banner: files[0].filename }, {
                where: {
                    need_id: need_id
                }
            })

            let log = {
                log: JSON.stringify(files),
                method: `UPDATE - Event Banner`,
                user: info.name
            }

            await Log.create(log);

            return { status: 200, message: 'Successfull update banner', redirect: redirect }
        } catch (error) {
            return { status: error.status, message: error.message || "Some error occurred while add the banner event", redirect: redirect }
        }
    }
}

module.exports = EventService;