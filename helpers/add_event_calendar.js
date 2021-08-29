const { google } = require('googleapis');
const CREDENTIALS = JSON.parse(process.env.CREDENTIAL);

//Google Calendar API Settings
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const calendar = google.calendar({version: 'v3'})
const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
)

async function deleteEvent (eventId, calendarId){
    try {
        let response = await calendar.events.delete({
            auth,
            calendarId,
            eventId
        })

        if(response.data == ''){
            return response
        } else {
            throw ({
                message: 'Error saat mendelete google calendar event'
            });
        }
    } catch (error) {
        console.log(`Error at deleteEvent --> ${error}`);
        return {message: error.message};
    }
}

async function inserEvent (event, calendarId) {
    try {
        let response = await calendar.events.insert({
            auth,
            calendarId,
            resource: event
        })

        if(response['status'] == 200 && response['statusText'] === 'OK'){
            return response
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
}

async function eventFormat (title, location, totalPax, roomName, consumptionList, tableUnit, openHour, airconStart, timeStart, timeEnd) {
    let event = {
        'summary': `${title}, ${location}`,
        'description': `Pax: ${totalPax} orang, Ruangan: ${roomName}, Konsumsi: ${String(consumptionList)}, Meja: ${tableUnit}, Buka Ruangan: ${openHour}, AC dinyalakan: ${airconStart}`,
        'start': {
            'dateTime': timeStart,
            'timeZone': 'Asia/Jakarta'
        },
        'end': {
            'dateTime': timeEnd,
            'timeZone': 'Asia/Jakarta'
        }
    }

    return event
}

module.exports = {inserEvent, deleteEvent, eventFormat};