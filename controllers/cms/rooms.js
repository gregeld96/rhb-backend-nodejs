const { inserEvent, eventFormat, deleteEvent } = require('../../helpers/add_event_calendar');
const { Need, Commission, Mass_Schedule, Mass_Category, Baptism } = require('../../models');

class RoomController {
    static async addEventRoom(req, res, next) {
        const { need_id } = req.params;
        const { roomName } = req.body;

        try {
            let calendarId, event, eventDetail;
            let data = await Need.findOne({ where: { id: need_id }, attributes: ['ruangan', 'commissionReq_id', 'event_id', 'time_start', 'time_end', 'event_name'] });
            let request = JSON.parse(data.ruangan);
            request.roomName = roomName;
            request.approved = true;

            event = await eventFormat(data.event_name, request.location, request.totalPax, request.roomName, request.consumption, request.unitTable, request.openHour, request.airconStart, data.time_start, data.time_end)

            if (request.location == 'MAG') {
                calendarId = process.env.CALENDAR_ID_MAG //GregEld GCalendar Dev
            } else {
                calendarId = process.env.CALENDAR_ID_KIRANA //Gregorius GCalendar Dev
            }

            const calendar = await inserEvent(event, calendarId);
            await Need.update({ ruangan: JSON.stringify(request), calendarId: calendar.data.id }, { where: { id: need_id } });
            req.flash('msg_info', `Event sudah di tambahkan untuk ${roomName}`)
            res.redirect('/cms/needs/request')
        } catch (error) {
            console.log(error)
        }
    }

    static async showCalendar(req, res) {
        const { permission } = req.session
        try {
            res.render('calendar', {
                title: `${permission.commission_name} Calendar`,
                calendar_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editRuangan (req, res) {
        const { need_id } = req.params;
        const data = req.body;

        try {
            let calendarId, event, eventDetail;
            let needData = await Need.findOne({ where: { id: need_id }, attributes: ['event_name', 'time_start', 'time_end', 'calendarId'] });

            event = await eventFormat(needData.event_name, data.location, data.totalPax, data.roomName, data.consumption, data.unitTable, data.openHour, data.airconStart, needData.time_start, needData.time_end)

            if (data.location == 'MAG') {
                calendarId = process.env.CALENDAR_ID_MAG //GregEld GCalendar Dev
            } else {
                calendarId = process.env.CALENDAR_ID_KIRANA //Gregorius GCalendar Dev
            }

            //Deleted Event on Google Calendar
            const response = await deleteEvent(needData.calendarId, calendarId);

            if(response){
                const calendar = await inserEvent(event, calendarId);
                await Need.update({ ruangan: JSON.stringify(data), calendarId: calendar.data.id }, { where: { id: need_id } });
                res.status('200').json({redirectUrl: `/cms/needs/request`, message: req.flash('msg_info', 'Berhasil mengedit request')})
            } else {
                res.status('400').json({redirectUrl: `/needs/edit/${need_id}`, message: req.flash('msg_error', `${response.message}`)})
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = RoomController;