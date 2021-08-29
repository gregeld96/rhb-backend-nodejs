const { User, User_Commission_Role, Commission } = require('../models');
const FirebaseChatService = require('../services/firebase');
const OneSignalService = require('../services/onesignal');
const { birthDateISOString } = require('../helpers/date-string');

class ChatController {
    static async startChat(req, res, next) {
        const userId = req.userId;
        let request = req.body

        try {
            let it = [];

            let user = await User.findOne({
                where: {
                    id: userId,
                }
            });

            let itUser = await User_Commission_Role.findAll({
                include: [
                    {
                        model: Commission,
                        where: {
                            name: 'IT'
                        }
                    },
                    {
                        model: User,
                        attributes: [
                            'full_name',
                            'token_oneSignal',
                        ]
                    }
                ]
            });

            for(let data of itUser){
                if(data.User.token_oneSignal){
                    it.push(data.User.token_oneSignal);
                }
            }
            

            let currentDate = new Date().getTime();

            let response = await FirebaseChatService.sendMessage({
                userFirebaseToken: user.token_firebase,
                body: {
                    user_id: user.id,
                    message: request.message,
                    sentAt: currentDate,
                    seenAt: '',
                }
            })

            if (response.status == 200) {
                if(it.length > 0){
                    let onesignalRes = await OneSignalService.chatNotif({onesignal_ids: it, name: 'Chat Notif CMS', fullname: user.full_name});
                    if(onesignalRes.status == 200){
                        res.status(200).json({ data: 'Success', message: '', });
                    }
                } else {
                    res.status(200).json({ data: 'Success', message: '', });
                }
            }
        } catch (error) {
            next({
                error
            })
        }
    }

    static async updateSeenChat(req, res, next) {
        const userId = req.userId;

        try {
            let user = await User.findOne({
                where: {
                    id: userId
                }
            });

            let response = await FirebaseChatService.updateSeen({ userFirebaseToken: user.token_firebase, user_id: userId })

            if (response.status == 200) {
                res.status(200).json({ data: null, message: 'Berhasil di update' });
            }
        } catch (error) {
            next({
                error
            })
        }
    }

    static async checkFirebaseUser(req, res, next) {
        const userId = req.userId;

        try {
            let user = await User.findOne({
                where: {
                    id: userId
                }
            });

            let firebaseToken = null;

            if (!user.token_firebase) {
                let editedName = user.full_name.replace(/\s/g, '_')
                firebaseToken = `${editedName}-${user.id}`
                FirebaseChatService.createProfile({ name: editedName, user_id: user.id })
            } else {
                firebaseToken = user.token_firebase;
            }

            User.update({
                token_firebase: firebaseToken
            }, {
                where:
                {
                    id: userId
                }
            });

            let data = {
                id: user.id,
                full_name: user.full_name,
                birth_place: user.birth_place,
                birth_of_date: birthDateISOString(user.birth_of_date),
                gender: user.gender,
                occupation: user.occupation,
                address: JSON.parse(user.address),
                phone_number: user.phone_number,
                email: user.email,
                QRcode: user.QRcode,
                member_id: user.member_id ?? null,
                isVerified: user.isVerified,
                profile_pic: user.profile_pic ?? '',
                token_user: user.token_user,
                token_oneSignal: user.token_oneSignal,
                token_firebase: firebaseToken ?? user.token_firebase,
            }

            res.status(200).json({ data: data, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = ChatController;