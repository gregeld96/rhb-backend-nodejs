function notifRequest (commission_name, event_name, event_date) {
    let subject = `Request untuk ${commission_name}`
    let html = `
    <h1>Shalom</h1> <br />
    <p>Kamu mendapat email ini karena ada request yang perlu kamu cek.</p><br />
    <p>Event: ${event_name}</p>
    <p>Date: ${event_date}</p>
    `
    return {subject, html}
}

module.exports = notifRequest;