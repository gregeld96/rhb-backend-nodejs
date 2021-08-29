const { User, Parent, Partner, Children, Emergency, Commission, Need, Mass_Category, Mass_Schedule, User_Commission_Role, User_Event, User_Job_Event, Role } = require('../models');
const { generateToken } = require('../helpers/jwt');
const OTPGenerator = require('../helpers/otp_generator');
const { checkPassword, hashPassword } = require('../helpers/bcrypt');
const { dateAndDay, hourStartEnd, birthDateISOString, userInput } = require('../helpers/date-string');
const removePhoto = require('../helpers/remove_photo');
const memberGenerator = require('../helpers/member_id_generator');
const TwillioService = require('../services/twillio');
const FirebaseChatService = require('../services/firebase');
const { Op } = require('sequelize');

class UserController {
    static async emailCheck(req, res, next) {
        const { email } = req.body;

        try {
            let user = await User.findOne({
                where:
                {
                    email: email,
                }
            });

            if(user){
                throw({
                    status: 400,
                    message: 'Email sudah terdaftar'
                })
            } else {
                res.status(200).json({data: null, message: 'Email belum digunakan'});
            }
        } catch (error) {
            next({
                error
            })
        }
    }

    static async login(req, res, next) {
        let { inputUser, password, device_type, onesignal_token } = req.body

        try {
            let user = await User.findOne({
                where:
                {
                    [Op.or]: [
                        {
                            phone_number: inputUser
                        },
                        {
                            email: inputUser
                        }
                    ]
                }
            });

            if (!user) {
                throw ({
                    status: 400,
                    message: 'Password atau Email/Telephone salah'
                })
            } else {
                if (!checkPassword(password, user.password)) {
                    throw ({
                        status: 400,
                        message: 'Password atau Email/Telephone salah'
                    })
                } else {
                    let token = generateToken({ id: user.id, email: user.email });
                    let firebaseToken = user.token_firebase;

                    if (!firebaseToken) {
                        let editedName = user.full_name.replace(/\s/g, '_')
                        firebaseToken = `${editedName}-${user.id}`
                        FirebaseChatService.createProfile({ name: editedName, user_id: user.id })
                    }

                    User.update({
                        token_user: token,
                        device_type: device_type,
                        token_oneSignal: onesignal_token,
                        token_firebase: firebaseToken
                    }, {
                        where:
                        {
                            [Op.or]: [
                                {
                                    phone_number: inputUser
                                },
                                {
                                    email: inputUser
                                }
                            ]
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
                        token_user: token,
                        token_oneSignal: onesignal_token,
                        token_firebase: firebaseToken ?? '',
                        device_type: Number(device_type)
                    }

                    res.status(200).json({ data: data, message: '' });
                }
            }
        } catch (error) {
            next({ error })
        }
    }

    static async otp(req, res, next) {
        const { phone_number } = req.body;

        try {
            let selected_otp = await OTPGenerator(4);
            await User.update({ otp: Number(selected_otp) }, { where: { phone_number: phone_number } });
            let sms_response = await TwillioService.smsOutbound(phone_number, selected_otp);

            if (sms_response.status == 200) {
                res.status(200).json({ message: `OTP berhasil dikirim ke ${phone_number}` });
            } else {
                throw ({
                    message: sms_response.error
                })
            }
        } catch (error) {
            next({ error });
        }
    }

    static async verificationOTP(req, res, next) {
        const { phone_number, otp } = req.body;

        try {
            let user = await User.findOne({ where: { phone_number: phone_number } });

            if (Number(otp) == Number(user.otp)) {
                await User.update({ otp: null }, { where: { phone_number: phone_number } })
                res.status(200).json({ message: 'Berhasil OTP' });
            } else {
                throw ({
                    error: {
                        status: 400,
                        message: `OTP tidak benar`
                    }
                })
            }
        } catch (error) {
            next({ error });
        }
    }

    static async verificationPassword(req, res, next) {
        let { password } = req.body;
        const { id } = req.classified;

        try {
            let user = await User.findOne({
                where:
                {
                    id: id,
                }
            });

            if (!checkPassword(password, user.password)) {
                throw ({
                    status: 400,
                    message: 'Password salah'
                })
            } else {
                res.status(200).json({ message: '' });
            }
        } catch (error) {
            next({
                error
            })
        }
    }

    static async changePassword(req, res, next) {
        let { password } = req.body
        const { id } = req.classified;

        try {
            await User.update({ password: hashPassword(password) }, { where: { id: id } })
            res.status(200).json({ message: 'Password berhasil diubah' })
        } catch (error) {
            next({ error })
        }
    }

    static async updatePassword(req, res, next) {
        let { password, phone_number } = req.body

        try {
            await User.update({ password: hashPassword(password) }, { where: { phone_number: phone_number } })
            res.status(200).json({ message: 'Password berhasil diubah' })
        } catch (error) {
            next({ error })
        }
    }

    static async updateProfilePicture(req, res, next) {
        const { id } = req.classified;
        let path = "Public/photos/public/profile_pic/"

        try {
            let userData = await User.findOne({ where: { id: id } })

            if (req.files.length > 0) {
                if (userData.profile_pic) {
                    removePhoto(path + userData.profile_pic)
                }
            }

            await User.update({ profile_pic: req.files[0].filename }, { where: { id: id } })
            res.status(200).json({ message: 'Profile picture updated', data: { profile_pic: req.files[0].filename } });
        } catch (error) {
            next({
                files: req.files,
                error
            })
        }
    }

    static async removeProfilePicture(req, res, next) {
        const { id } = req.classified;
        let path = "Public/photos/public/profile_pic/"

        try {
            let user = await User.findOne({ where: { id: id } })

            if (user.profile_pic) {
                removePhoto(path + user.profile_pic)
            }

            await User.update({ profile_pic: null }, { where: { id: id } })
            res.status(200).json({ message: 'Profile picture deleted', data: { profile_pic: null } });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async register(req, res, next) {
        let {
            full_name,
            birth_place,
            birth_of_date,
            gender,
            occupation,
            address,
            phone_number,
            email,
            password,
            emergency,
            parents,
            childrens,
            partner
        } = req.body

        try {
            let findUserEmail = await User.findOne({ where: { email } });

            if (!findUserEmail) {
                const newUserInfo = {
                    full_name,
                    birth_place,
                    birth_of_date: userInput(birth_of_date),
                    gender,
                    occupation,
                    address: JSON.stringify(address),
                    phone_number: Number(phone_number),
                    email,
                    password,
                    identification_file: req.files.length > 0 ? req.files[0].filename : '',
                    isVerified: false,
                }

                const userRegister = await User.create(newUserInfo);
                const member_id = memberGenerator(userRegister.id);
                await User.update({ member_id }, { where: { id: userRegister.id } })

                let emergencyData = {
                    full_name: emergency.full_name,
                    relationship: emergency.relationship,
                    gender: emergency.gender,
                    address: JSON.stringify(emergency.address),
                    phone_number: Number(emergency.phone_number),
                    user_id: userRegister.id
                }

                await Emergency.create(emergencyData);

                if (partner) {
                    const partnerData = {
                        full_name: partner.full_name,
                        birth_place: partner.birth_place,
                        birth_of_date: userInput(partner.birth_of_date),
                        gender: partner.gender,
                        user_id: userRegister.id
                    }

                    await Partner.create(partnerData);
                }

                if (parents && parents.length > 0) {
                    let tempArray = []

                    parents.forEach(parentData => {
                        let userParents = {
                            full_name: parentData.full_name,
                            birth_place: parentData.birth_place,
                            birth_of_date: userInput(parentData.birth_of_date),
                            gender: parentData.gender,
                            user_id: userRegister.id
                        }

                        tempArray.push(userParents)
                    })

                    await tempArray.forEach(userParentData => {
                        Parent.create(userParentData)
                    })
                }

                if (childrens && childrens.length > 0) {
                    let tempArray = [];

                    childrens.forEach((childData, index) => {
                        let userChild = {
                            full_name: childData.full_name,
                            birth_place: childData.birth_place,
                            birth_of_date: userInput(childData.birth_of_date),
                            gender: childData.gender,
                            user_id: userRegister.id
                        }

                        tempArray.push(userChild)
                    })

                    await tempArray.forEach(userChildrenData => {
                        Children.create(userChildrenData)
                    })
                }

                res.status(201).json({ message: 'Success register' })
            } else {
                throw ({
                    message: 'Email sudah terdaftar'
                })
            }
        } catch (error) {
            next({
                files: req.files,
                error
            });
        }
    }

    static async emergencyData(req, res, next) {
        const { id } = req.classified;

        try {
            let info;
            let emergency = await Emergency.findOne({
                where: {
                    user_id: id
                }
            });

            if (emergency) {
                info = {
                    full_name: emergency.full_name,
                    relationship: emergency.relationship,
                    gender: emergency.gender,
                    address: JSON.parse(emergency.address),
                    phone_number: emergency.phone_number,
                }
            } else {
                info = null
            }

            res.status(200).json({ data: info, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async updateUser(req, res, next) {
        const { id } = req.classified;
        let request = req.body;

        try {
            let newToken;

            let dataUser = await User.findOne({
                where: {
                    id: id
                }
            });

            let dataEmergency = await Emergency.findOne({
                where: {
                    user_id: id
                }
            });

            if (dataUser.email != request.user.email) {
                newToken = generateToken({ id: id, email: request.user.email })
            }

            let updatedUser = {
                full_name: request.user.full_name ? request.user.full_name : dataUser.full_name,
                birth_place: request.user.birth_place ? request.user.birth_place : dataUser.birth_place,
                birth_of_date: request.user.birth_of_date ? userInput(request.user.birth_of_date) : dataUser.birth_of_date,
                gender: request.user.gender ? request.user.gender : dataUser.gender,
                occupation: request.user.occupation ? request.user.occupation : dataUser.occupation,
                address: request.user.address ? JSON.stringify(request.user.address) : dataUser.address,
                phone_number: request.user.phone_number ? Number(request.user.phone_number) : dataUser.phone_number,
                email: request.user.email ? request.user.email : dataUser.email,
                token_user: newToken ? newToken : dataUser.token_user,
                token_oneSignal: dataUser.token_oneSignal,
                token_firebase: dataUser.token_firebase ?? '',
            }

            let updatedEmergency = {
                full_name: request.emergency.full_name ? request.emergency.full_name : dataEmergency.full_name,
                relationship: request.emergency.relationship ? request.emergency.relationship : dataEmergency.relationship,
                gender: request.emergency.gender ? request.emergency.gender : dataEmergency.gender,
                address: request.emergency.address ? JSON.stringify(request.emergency.address) : dataEmergency.address,
                phone_number: request.emergency.phone_number ? Number(request.emergency.phone_number) : dataEmergency.phone_number,
                user_id: userId,
            }

            await User.update(updatedUser, { where: { id: userId } });

            if (dataEmergency == null) {
                await Emergency.create(updatedEmergency);
            } else {
                await Emergency.update(updatedEmergency, { where: { user_id: id } })
            }

            let newUpdate = {
                id: id,
                full_name: request.user.full_name ? request.user.full_name : dataUser.full_name,
                birth_place: request.user.birth_place ? request.user.birth_place : dataUser.birth_place,
                birth_of_date: request.user.birth_of_date ? userInput(request.user.birth_of_date) : dataUser.birth_of_date,
                gender: request.user.gender ? request.user.gender : dataUser.gender,
                occupation: request.user.occupation ? request.user.occupation : dataUser.occupation,
                address: request.user.address ? request.user.address : dataUser.address,
                phone_number: request.user.phone_number ? Number(request.user.phone_number) : dataUser.phone_number,
                email: request.user.email ? request.user.email : dataUser.email,
                QRcode: dataUser.QRcode,
                member_id: dataUser.member_id ?? null,
                isVerified: dataUser.isVerified,
                profile_pic: dataUser.profile_pic ?? '',
                token_user: newToken ? newToken : dataUser.token_user,
                token_oneSignal: dataUser.token_oneSignal,
                token_firebase: dataUser.token_firebase ?? '',
            }

            res.status(200).json({ data: newUpdate, message: '' })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async jobHistory(req, res, next) {
        const { id } = req.classified;
        const { start, limit } = req.query;

        try {
            let completedList = [];
            let currentDate = new Date();

            // Dapetin List Job yang pernah di accept
            let jobs = await User_Job_Event.findAndCountAll({
                where: {
                    user_id: id,
                    approval: true
                },
                offset: start ? Number(start) : null,
                limit: limit ? Number(limit) : null,
                include: [
                    {
                        model: Commission,
                    },
                    {
                        model: Role,
                        attributes: [
                            'name'
                        ]
                    },
                    {
                        model: Need,
                        where: {
                            time_end: {
                                [Op.lt]: currentDate
                            }
                        },
                        attributes: [
                            'event_name',
                            'time_start',
                            'time_end',
                            'event_id',
                            'section'
                        ]
                    }
                ]
            })

            // Dapetin Logo setiap event yang sudah user ikuti sebagai pelayan
            if (jobs.rows.length > 0) {
                for (let detail of jobs.rows) {
                    let category;

                    if (!detail.Need.section) {
                        category = await Mass_Schedule.findOne({
                            where: {
                                id: detail.Need.event_id
                            },
                            include: [
                                {
                                    model: Mass_Category,
                                    attributes: [
                                        'thumbnail'
                                    ]
                                }
                            ]
                        })
                    }

                    let temp = {
                        title: detail.Need.event_name,
                        date: dateAndDay(detail.Need.time_start),
                        time: hourStartEnd(detail.Need.time_start, detail.Need.time_end),
                        thumbnail: category ? category.Mass_Category.thumbnail : '',
                        role: detail.Role.name == 'Admin' ? detail.Commission.name : detail.Role.name
                    }

                    completedList.push(temp)
                }
            } else {
                completedList = []
            }

            res.status(200).json({ data: completedList, totalData: jobs.count, message: '' })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async jobRequest(req, res, next) {
        const { id } = req.classified;

        try {
            let completedList = [];
            let currentDate = new Date();

            let jobs = await User_Job_Event.findAll({
                where: {
                    user_id: id,
                    approval: {
                        [Op.not]: false,
                    },
                },
                include: [
                    {
                        model: Commission,
                    },
                    {
                        model: Role,
                        attributes: [
                            'name'
                        ]
                    },
                    {
                        model: Need,
                        where: {
                            time_start: {
                                [Op.gt]: currentDate
                            }
                        },
                        attributes: [
                            'event_name',
                            'time_start',
                            'time_end',
                            'event_id',
                            'musicMultimedia',
                            'ruangan',
                            'socialMedia',
                            'event_pic'
                        ]
                    }
                ]
            })

            if (jobs.length > 0) {
                for (let detail of jobs) {
                    let location, team, banner;

                    let music = detail.Need.musicMultimedia ? JSON.parse(detail.Need.musicMultimedia) : null;
                    let ruangan = detail.Need.ruangan ? JSON.parse(detail.Need.ruangan) : null
                    let social = detail.Need.socialMedia ? JSON.parse(detail.Need.socialMedia) : null

                    if (ruangan) {
                        location = ruangan.roomName ? ruangan.roomName : ruangan.location
                    } else {
                        location = ruangan
                    }

                    if (social) {
                        if (social.required) {
                            banner = detail.Need.event_pic
                        } else {
                            banner = social
                        }
                    } else {
                        banner = social
                    }

                    if (music) {
                        if (music.members) {
                            team = music.members
                        } else {
                            team = null
                        }
                    } else {
                        team = music
                    }

                    let temp = {
                        id: detail.id,
                        title: detail.Need.event_name,
                        date: dateAndDay(detail.Need.time_start),
                        time: hourStartEnd(detail.Need.time_start, detail.Need.time_end),
                        role: detail.Role.name == 'Admin' ? detail.Commission.name : detail.Role.name,
                        location: location || 'TBA',
                        banner: banner || '',
                        team: team || [],
                        approval: detail.approval
                    }

                    completedList.push(temp)
                }
            } else {
                completedList = []
            }

            res.status(200).json({ data: completedList, message: '' })
        } catch (error) {
            next({ error })
        }
    }

    static async acceptJobRequest(req, res, next) {
        const { job_id } = req.params;
        const { approval } = req.body;

        try {
            let data = {
                approval
            }

            let info = await User_Job_Event.findOne({
                where: {
                    id: job_id
                },
                include: [
                    {
                        model: Need
                    }
                ]
            })

            let newData = {
                user_id: info.user_id,
                role_id: info.role_id,
                approval: approval,
                event_id: info.Need.event_id,
                section: info.Need.section
            }

            await User_Job_Event.update(data, { where: { id: job_id } });
            await User_Event.create(newData);

            res.status(200).json({ message: 'Success' });
        } catch (error) {
            next({ error })
        }
    }

    static async roleList(req, res, next) {
        const { id } = req.classified;

        try {
            let roleIds = [];

            let roles = await Role.findAll({
                where: {
                    name: ['Jemaat']
                }
            })

            for (let index in roles) {
                roleIds.push(roles[index].id);
            }

            let userJob = await User_Commission_Role.findAll({
                where: {
                    user_id: id,
                    role_id: {
                        [Op.ne]: roleIds
                    }
                }
            })

            res.status(200).json({ data: userJob.length, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async logout(req, res, next) {
        const { id } = req.classified;

        try {
            await User.update({
                token_user: null,
                token_oneSignal: null,
            }, {
                where: {
                    id: id
                }
            })

            res.status(200).json({ message: 'Success logout', data: null });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async fetchData(req, res, next) {
        const { id } = req.classified;

        try {
            let user = await User.findOne({
                where: {
                    id: id
                }
            })

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
                token_firebase: user.token_firebase ?? '',
                device_type: Number(user.device_type)
            }

            res.status(200).json({ message: '', data: data });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async ongoingRequest(req, res, next) {
        const { id } = req.classified;

        try {
            let completedList = [];
            let currentDate = new Date();

            let jobs = await User_Job_Event.findAll({
                where: {
                    user_id: id,
                    approval: true,
                },
                include: [
                    {
                        model: Commission,
                    },
                    {
                        model: Role,
                        attributes: [
                            'name'
                        ]
                    },
                    {
                        model: Need,
                        where: {
                            time_start: {
                                [Op.lte]: currentDate
                            },
                            time_end: {
                                [Op.gte]: currentDate
                            },
                            deletedAt: null
                        },
                        attributes: [
                            'event_name',
                            'time_start',
                            'time_end',
                            'event_id',
                            'musicMultimedia',
                            'ruangan',
                            'socialMedia',
                            'event_pic'
                        ]
                    }
                ]
            })

            if (jobs.length > 0) {
                for (let detail of jobs) {
                    let location, team, banner;

                    let music = detail.Need.musicMultimedia ? JSON.parse(detail.Need.musicMultimedia) : null;
                    let ruangan = detail.Need.ruangan ? JSON.parse(detail.Need.ruangan) : null
                    let social = detail.Need.socialMedia ? JSON.parse(detail.Need.socialMedia) : null

                    if (ruangan) {
                        location = ruangan.roomName ? ruangan.roomName : ruangan.location
                    } else {
                        location = ruangan
                    }

                    if (social) {
                        if (social.required) {
                            banner = detail.Need.event_pic
                        } else {
                            banner = social
                        }
                    } else {
                        banner = social
                    }

                    if (music) {
                        if (music.members) {
                            team = music.members
                        } else {
                            team = null
                        }
                    } else {
                        team = music
                    }

                    let temp = {
                        id: detail.id,
                        title: detail.Need.event_name,
                        date: dateAndDay(detail.Need.time_start),
                        time: hourStartEnd(detail.Need.time_start, detail.Need.time_end),
                        role: detail.Role.name == 'Admin' ? detail.Commission.name : detail.Role.name,
                        location: location || 'TBA',
                        banner: banner || '',
                        team: team || [],
                        approval: detail.approval
                    }

                    completedList.push(temp)
                }
            } else {
                completedList = []
            }

            res.status(200).json({ data: completedList, message: '' })
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = UserController;