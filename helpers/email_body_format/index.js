const registerMail = require('./register')
const forgotMail = require('./forgot_password')
const notifRequest = require('./notification_request')

const listMail = {
    registerMail,
    forgotMail,
    notifRequest
}

module.exports = listMail