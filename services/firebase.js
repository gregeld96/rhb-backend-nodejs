const firebase = require('firebase');

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
});

const firestore = app.firestore();
const chat = firestore.collection('chats');

class FirebaseChatService {
    static async sendMessage({ userFirebaseToken, body }) {
        try {
            let user = chat.doc(userFirebaseToken);
            await user.collection('message').doc().set(body);
            await user.update({
                updatedAt: new Date().getTime(),
            });

            return { status: 200, message: 'Data berhasil di update' }
        } catch (error) {
            throw { error }
        }
    }

    static async getMessages({ userFirebaseToken }) {
        try {
            let userData = await chat.doc(userFirebaseToken).collection('message').orderBy('sentAt', 'asc').limitToLast(30).get();
            let message = [];

            if (userData.empty) {
                return { status: 200, message: message }
            } else {
                userData.forEach((e) => {
                    let isoDateSeen = e.data().seenAt != '' ? new Date(e.data().seenAt) : e.data().seenAt;
                    let isoDateSent = new Date(e.data().sentAt);

                    let temp = {
                        user_id: e.data().user_id,
                        seenAt: isoDateSeen != '' ? isoDateSeen : isoDateSeen,
                        sentAt: isoDateSent,
                        message: e.data().message,
                    }
                    message.push(temp);
                });
            }

            return { status: 200, message: message }

        } catch (error) {
            throw { error }
        }
    }

    static async updateSeen({ userFirebaseToken, user_id, limit = 15 }) {
        try {
            let user = chat.doc(userFirebaseToken).collection('message');
            let userData = await user.orderBy('sentAt', 'asc').limitToLast(limit).get();

            if (userData.empty) {
                return { status: 200 }
            } else {
                userData.forEach(async (e) => {
                    if (e.data().user_id != user_id && e.data().seenAt == '') {
                        console.log('ini dulu');
                        let temp = {
                            user_id: e.data().user_id,
                            seenAt: new Date().getTime(),
                            sentAt: e.data().sentAt,
                            message: e.data().message,
                        }
                        await user.doc(e.id).update(temp);
                    }
                });
            }
            return { status: 200 }
        } catch (error) {
            throw ({
                error: {
                    status: 400,
                    message: error.message ? error.message : 'Terjadi kesalahan pada pembaharuan chat User Firebase'
                }
            })
        }
    }

    static async createProfile({ name, user_id }) {
        try {
            let date = new Date().getTime();

            const data = {
                user_id: user_id,
                createdAt: date,
                updatedAt: date,
            }

            let response = await chat.doc(`${name}-${user_id}`).set(data);

            return response;
        } catch (error) {
            throw {
                error: {
                    status: 400,
                    message: error.message ? error.message : 'Terjadi kesalahan pada pembuatan account User Firebase'
                }
            }
        }
    }

    static async getAllMessages() {
        try {
            let data = await chat.orderBy('updatedAt', 'desc').get();
            let list = [];

            if (data.empty) {
                list = [];
            } else {
                let tempList = [];
                
                data.forEach((doc) => {
                    const temp = {
                        id: doc.id,
                        user_id: doc.data().user_id,
                        updatedAt: doc.data().updatedAt,
                    }

                    tempList.push(temp);
                });

                for (let doc of tempList){
                    let chats = await chat.doc(doc.id).collection('message').orderBy('sentAt', 'asc').limitToLast(20).get();

                    let message = [];
                    
                    if (chats.empty) {
                        message = [];
                    } else {
                        chats.forEach((e) => {
                            const tempChat = {
                                user_id: e.data().user_id,
                                seenAt: e.data().seenAt,
                                sentAt: e.data().sentAt,
                                message: e.data().message,
                            }

                            message.push(tempChat)
                        });
                    }

                    const temp = {
                        id: doc.id,
                        user_id: doc.user_id,
                        messages: message.length > 0 ? message[message.length - 1] : '',
                        updatedAt: doc.updatedAt,
                    }

                    list.push(temp);
                }
            }

            return { status: 200, data: list }

        } catch (error) {
            throw {
                error: {
                    status: 400,
                    message: error.message ? error.message : 'Terjadi kesalahan pada pengambilan list chat User Firebase'
                }
            }
        }
    }
}

module.exports = FirebaseChatService;