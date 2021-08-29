//Twillio Credential
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twillioNumber = process.env.TWILIO_PHONE_NUMBER;

//Twillio Setting
const client = require('twilio')(accountSid, authToken);

class TwillioService{
    static async smsOutbound(phone_number, otp_number) {
        try {
            let response = await client.messages
                .create({
                    body: `Jangan share nomor OTP anda. OTP number: ${otp_number}`,
                    from: twillioNumber,
                    to: `+${phone_number}`
                });
            
            if ((response.status == 'queued') || (response.status == 'sent')) {
                return {status: 200}
            } else {
                throw ({
                    error: {
                        status: 400,
                        message: `Terjadi kesalahan saat mengirim otp ke nomor ${phone_number}`
                    }
                })
            }
        } catch (error) {
            return {error}
        }
    }
}


module.exports = TwillioService;