const forgotMail = (userEmail, newPassword) => {
    let subject = `Forgot Password dari GKI Rehobot`
    let html = `
    <h1>Shalom jemaat GKI Rehobot Terkasih</h1> <br />
    <p>Kamu mendapat email ini karena kamu lupa akan password account Rehobot kamu.</p><br />
    <p>Email: ${userEmail}</p>
    <p>Temporary Password: ${newPassword}</p>
    `

    return {subject, html}
}

module.exports = forgotMail;