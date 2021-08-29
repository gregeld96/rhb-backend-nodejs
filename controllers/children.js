const { Children } = require('../models');
const removePhoto = require('../helpers/remove_photo');
const { userInput } = require('../helpers/date-string');

class ChildrenController {
    static async getChildren(req, res, next) {
        const { user_id } = req.params;
        try {
            const children = await Children.findAll({
                where:
                {
                    user_id: user_id,
                    deletedAt: null,
                },
                attributes: [
                    'id',
                    'full_name',
                    'birth_of_date',
                    'birth_place',
                    'gender',
                    'dedication',
                    'profile_pic',
                    'qr_code',
                    'child_birth_certification_file',
                    'profile_pic'
                ]
            })

            res.status(200).json({ data: children, message: '' });
        } catch (error) {
            next({ error });
        }
    }

    static async addChild(req, res, next) {
        const userId = req.userId;

        try {
            let newChild = {
                full_name: req.body.full_name,
                birth_of_date: userInput(req.body.birth_of_date),
                birth_place: req.body.birth_place,
                gender: req.body.gender,
                user_id: userId,
                child_birth_certification_file: req.files.length > 0 ? req.files[0].filename : '',
                profile_pic: null,
                qr_code: null,
                dedication: false,
            }

            let child = await Children.create(newChild);

            res.status(201).json(child);
        } catch (error) {
            next({
                files: req.files,
                error
            })
        }
    }

    static async updateData(req, res, next) {
        const { id } = req.params;

        try {
            const childData = await Children.findOne({
                where: {
                    id: id
                }
            });

            if (req.files.length > 0) {
                if (childData.child_birth_certification_file) {
                    let path = 'Public/photos/private/akte-anak/'
                    removePhoto(path + childData.child_birth_certification_file)
                }
            }

            let updatedChild = {
                full_name: req.body.full_name ? req.body.full_name : childData.full_name,
                birth_of_date: userInput(req.body.birth_of_date) ? userInput(req.body.birth_of_date) : childData.birth_of_date,
                birth_place: req.body.birth_place ? req.body.birth_place : childData.birth_place,
                gender: req.body.gender ? req.body.gender : childData.gender,
                profile_pic: childData.profile_pic,
                dedication: childData.dedication,
                qr_code: childData.qr_code,
                child_birth_certification_file: req.files.length > 0 ? req.files[0].filename : childData.child_birth_certification_file
            }

            await Children.update(updatedChild, { where: { id: id } });

            updatedChild.id = Number(id);

            res.status(200).json({ data: updatedChild, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async updateProfPic(req, res, next) {
        const { id } = req.params;

        try {
            const childData = await Children.findOne({
                where: {
                    id: id
                }
            });

            if (req.files.length > 0) {
                if (childData.profile_pic) {
                    let path = 'Public/photos/public/child-profile-pic/'
                    removePhoto(path + childData.profile_pic)
                }
            }

            let updatedChild = {
                profile_pic: req.files.length > 0 ? req.files[0].filename : childData.profile_pic
            }

            await Children.update(updatedChild, { where: { id: id } });

            res.status(200).json({ data: { profile_pic: req.files[0].filename }, message: '' });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async removeProfilePicture(req, res, next) {
        const { id } = req.params
        let path = "Public/photos/public/child-profile-pic/"

        try {
            let childData = await Children.findOne({
                where: {
                    id: id
                }
            });

            if (childData.profile_pic) {
                removePhoto(path + childData.profile_pic)
            }

            await Children.update({ profile_pic: null }, { where: { id: id } })
            res.status(200).json({ message: 'Profile picture deleted', data: { profile_pic: null } });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async removeChild(req, res, next) {
        const { id } = req.params;

        try {
            let currentDate = {
                deletedAt: new Date()
            };

            await Children.update(currentDate, { where: { id: id} });

            res.status(200).json({ message: 'child deleted'});
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = ChildrenController;