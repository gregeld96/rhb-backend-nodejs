const { User } = require('../../models');
const FirebaseChatService = require('../../services/firebase');
const OneSignalService = require('../../services/onesignal');
const { hourMinute, stringDateConverter } = require('../../helpers/date-string');
const { chat } = require('googleapis/build/src/apis/chat');

class ChatCmsController {
    static async renderChatScreen(req, res) {
        const session = req.session;

        try {
            let messages = [];
            let response = await FirebaseChatService.getAllMessages();

            if (response.status == 200) {
                if (response.data.length > 0) {
                    for (let detail of response.data) {
                        let user = await User.findOne({
                            where: {
                                id: detail.user_id,
                            }
                        });

                        let newMessage = false;

                        if (detail.messages.user_id != session.user_id && detail.messages.seenAt == '') {
                            newMessage = true;
                        }

                        let messageDetail = {
                            userId: detail.user_id,
                            username: user.full_name,
                            userProfile: user.profile_pic,
                            message: detail.messages.message,
                            statusMessage: newMessage,
                        }

                        messages.push(messageDetail);
                    }
                }
            }

            res.render('chat', {
                title: 'User Message',
                data: messages,
                chat_active: 'active',
            });

        } catch (error) {
            console.log(error);
            req.flash('msg_error', error.message || "Some error occurred while rendering chat page.");
            res.redirect('/cms/home');
        }
    }

    static async renderUserChatDetail(req, res) {
        const session = req.session;
        let { id } = req.query;

        try {
            let user = await User.findOne({
                where: {
                    id: id
                }
            });

            let resUpdate = await FirebaseChatService.updateSeen({ userFirebaseToken: user.token_firebase, user_id: session.user_id });

            if(resUpdate.status == 200){
                let chatList = [];
                let timeFilter = [];
                let dateFilter = [];

                let response = await FirebaseChatService.getMessages({
                    userFirebaseToken: user.token_firebase,
                });

                if(response.message.length > 0){
                    for(let idx in response.message){
                        let temp = {
                            belongsAdmin: response.message[idx].user_id == session.user_id ? true : false,
                            message: response.message[idx].message,
                            seenAt: response.message[idx].seenAt != '' ? stringDateConverter(response.message[idx].seenAt) : '',
                            sentAt: hourMinute(response.message[idx].sentAt),
                        }

                        timeFilter.push(stringDateConverter(response.message[idx].sentAt));
                        chatList.push(temp);
                    }
                }

                for(let idx in response.message){
                    let indexTime = timeFilter.findIndex((e) => e == stringDateConverter(response.message[idx].sentAt));
                    if(indexTime == idx){
                        chatList[idx].status = true;
                        chatList[idx].date = stringDateConverter(response.message[idx].sentAt);
                        dateFilter.push(true);
                    } else {
                        chatList[idx].status = false;
                        chatList[idx].date = stringDateConverter(response.message[idx].sentAt);
                        dateFilter.push(false);
                    }
                }
    
                if (response.status == 200) {
                    res.render('chat/detail', {
                        title: 'Detail',
                        section: user.full_name,
                        message: chatList,
                        dateIndex: dateFilter,
                        time: timeFilter,
                        session_id: session.user_id,
                        user_id: id,
                    });
                }
            }
        } catch (error) {
            console.log(error);
            req.flash('msg_error', error.message || "Some error occurred while rendering chat page.");
            res.redirect('/cms/home');
        }
    }

    static async replyMessage (req, res) {
        const { user_id, message } = req.body;
        const session = req.session;

        try {
            let user = await User.findOne({
                where: {
                    id: user_id,
                }
            });

            let reply = {
                user_id: session.user_id,
                message: message,
                sentAt: new Date().getTime(),
                seenAt: ""
            }

            let response = await FirebaseChatService.sendMessage({userFirebaseToken: user.token_firebase, body: reply });

            if(response.status == 200){
                let onesignalRes = await OneSignalService.chatNotif({onesignal_ids: [user.token_oneSignal], name: 'Chat Notif', fullname: session.name});
                if(onesignalRes.status == 200){
                    res.redirect(`/cms/chat/detail?id=${user_id}`)
                }
            }
        } catch (error) {
            console.log(error);
            req.flash('msg_error', error.message || "Some error occurred while reply chat.");
            res.redirect(`/cms/chat/detail?id=${user_id}`);
        }
    }
}

module.exports = ChatCmsController;