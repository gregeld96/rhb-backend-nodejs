const { Mass_Schedule, Mass_Category, User_Event, User } = require('../models');
const OneSignalService = require('./onesignal');

class CronService {
    static async checkInComingEvent() {
        try {
            let currentHour = new Date();
            let nextHour = new Date().setHours(currentHour.getHours() + 1);

            let events = await Mass_Schedule.findAll({
                where: {
                    time_start: nextHour
                },
                include: [
                    {
                        model: Mass_Category,
                    }
                ]
            });

            if(events.length > 0){
                for(let detail of events){
                    let onesignalIds = [];
                    let users = await User_Event.findAll({
                        where: {
                            section: null,
                            event_id: detail.id
                        },
                        include: [
                            {
                                model: User
                            }
                        ]
                    })

                    if(users.length > 0){
                        for(let data of users){
                            if(data.User.token_oneSignal){
                                onesignalIds.push(data.User.token_oneSignal)
                            }
                        }
                    }

                    if(onesignalIds.length > 0) {
                        OneSignalService.reminderEvent({
                            onesignal_ids: onesignalIds,
                            event: {
                                category: detail.Mass_Category.title,
                                name: detail.name,
                                time_start: detail.time_start,
                                time_end: detail.time_end,
                            },
                            name: 'Reminder Schedule Worship'
                        })
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CronService;