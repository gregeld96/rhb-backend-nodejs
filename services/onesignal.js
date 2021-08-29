const axios = require('axios');
const basedUrl = 'https://onesignal.com/api/v1';
const { reminderDate, singleDateConverter, hourStartEnd } = require('../helpers/date-string');

class OneSignalService {
    static async parishEventNotif({onesignal_id, contents, title}){
        try {
            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                headings: {
                    en: title
                },
                contents: {
                    en: contents
                },
                include_player_ids: onesignal_id,
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
            return;
        } catch (error) {
            return { error }
        }
    }

    static async createClassNotif ({onesignal_id, classInfo, section}){
        try {
            let reminder = reminderDate(classInfo.time);
            let start = singleDateConverter(classInfo.time);

            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                headings: {
                    en: `Reminder Kelas ${section} - ${classInfo.topic}`
                },
                contents: {
                    en: `Kelas akan dimulai ${start}. Pengajar: ${classInfo.speaker}`
                },
                include_player_ids: [onesignal_id],
                send_after: reminder
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
            return;
        } catch (error) {
            return { error }
        }
    }

    static async reminderScheduleWorship ({onesignal_id, event, name}){
        try {
            let reminder = reminderDate(event.time_start);
            let start = singleDateConverter(event.time_start);
            let end = singleDateConverter(event.time_end);

            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                name: name,
                headings: {
                    en: `Reminder Acara ${event.Mass_Category.title} - ${event.name}`
                },
                contents: {
                    en: `Acara akan dimulai ${start} sampai ${end}.`
                },
                include_player_ids: [onesignal_id],
                send_after: reminder
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
            return;
        } catch (error) {
            return { error }
        }
    }

    static async jobNotif ({onesignal_id, event, name}){
        try {
            let start = singleDateConverter(event.time_start);
            let end = singleDateConverter(event.time_endt);
            
            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                name: name,
                headings: {
                    en: `Job Request - ${event.name}`
                },
                contents: {
                    en: `Ada request pelayanan untuk ${event.name} yang diselenggarakan ${start} sampai ${end}..`
                },
                include_player_ids: onesignal_id,
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
            return;
        } catch (error) {
            return { error }
        }
    }

    static async managerNotif ({onesignal_id, event, name}){
        try {
            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                name: name,
                headings: {
                    en: `Job Request Manager - ${event.name}`
                },
                contents: {
                    en: `Ada request kebutuhan untuk ${event.name}. Tolong bukan dashboard segera.`
                },
                include_player_ids: onesignal_id,
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
            return;
        } catch (error) {
            return { error }
        }
    }

    static async reminderEvent({onesignal_ids, event, name}){
        try {
            let eventTime = hourStartEnd(event.time_start, event.time_end);

            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                name: name,
                headings: {
                    en: `Reminder Acara ${event.category} - ${event.name}`
                },
                contents: {
                    en: `Acara akan berlangsung dari pukul ${eventTime}.`
                },
                include_player_ids: onesignal_ids,
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return response.data 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
        } catch (error) {
            throw { error }
        }
    }

    static async chatNotif({onesignal_ids, name, fullname}) {
        try {
            let body = {
                app_id: process.env.ONESIGNAL_APP_ID,
                name: name,
                headings: {
                    en: name
                },
                contents: {
                    en: `Ada chat dari ${fullname}.`
                },
                include_player_ids: onesignal_ids,
            }

            let response = await axios({
                method: 'post',
                url: `${basedUrl}/notifications`,
                data: body
            })

            if (response.status === 200) {
                return {status: response.status, data: response.data} 
            } else {
                throw ({
                    status: response.status,
                    message: response.errors
                })
            }
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = OneSignalService;