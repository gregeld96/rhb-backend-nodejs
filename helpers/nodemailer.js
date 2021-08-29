const nodemailer = require("nodemailer");

const mail = (userInformation, mailInformation) => {
    const { email } = userInformation;
    const { subject, html } = mailInformation;
    const transportEmail = 'candoteam.official@gmail.com'; //Email for transporter (gmail preferred)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: transportEmail,
            pass: 'candodummy'
        }
    })

    let transporterEmailInfo = {
        from: `${transportEmail}`, //Sender address
        to: `${email}`,  //user email
        subject: `${subject}`, //Subject on email
        html: html // Email body format
    }

    transporter.sendMail(transporterEmailInfo, (error, info) => {
        if(error) {
            throw error;
        }
    });
}

module.exports = mail;