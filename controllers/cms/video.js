const { Video, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');

class VideoController {
    static async renderVideoPage(req, res) {
        try {
            let completeList = [];

            let list = await Video.findAll({
                attributes: [
                    'id',
                    'video_file',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        video_file: detail.video_file,
                        section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.render('video', {
                title: 'Video',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                data: completeList,
                video_list_active: 'active'
            })
        } catch (error) {
            res.redirect('/cms/home')
        }
    }

    static async renderAddVideoPage(req, res) {
        try {
            res.render('video/add', {
                title: 'Video',
                legend: 'Add Video',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                video_list_active: 'active'
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render video page`);
            res.redirect('/cms/dynamic-pages/video/')
        }
    }

    static async addVideo(req, res) {
        const data = req.session;
        let request = req.body;
        let path = 'Public/photos/public/video/'

        try {
            let newData = {
                section: request.section,
                video_file: req.files[0].filename,
            }

            let response = await Video.create(newData);

            let log = {
                log: JSON.stringify(newData),
                method: `CREATE - Video`,
                user: data.name
            }

            await Log.create(log);

            if (response) {
                req.flash('msg_info', 'Video successful created');
                res.redirect('/cms/dynamic-pages/video/')
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            if (req.files.length > 0) {
                removePhoto(path + req.files[0].filename);
            }
            req.flash('msg_error', error.message || `Got problem during create video`);
            res.redirect('/cms/dynamic-pages/video/add');
        }
    }

    static async renderEditVideoPage(req, res) {
        const { id } = req.params;

        try {
            let data = await Video.findOne({
                where: {
                    id: id
                },
                attributes: [
                    'id',
                    'video_file',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                video_file: data.video_file,
                section: data.section
            }

            res.render('video/edit', {
                title: `Video`,
                legend: 'Edit Video',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                video_list_active: 'active',
                data: temp
            })
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during render edit video page`);
            res.redirect('/cms/dynamic-pages/video/');
        }
    }

    static async editVideo(req, res) {
        const { id } = req.params
        const data = req.session;
        let request = req.body;
        let path = 'Public/photos/public/video/'

        try {
            let oldData = await Video.findOne({ where: { id: id } });

            let updatedData = {
                video_file: req.files.length > 0 ? req.files[0].filename : oldData.video_file,
                section: request.section ? request.section : oldData.section
            }

            let response = await Video.update(updatedData, { where: { id: id } });

            if (req.files.length > 0) {
                if (oldData.video_file) {
                    removePhoto(path + oldData.video_file);
                }
            }

            let log = {
                log: JSON.stringify(updatedData),
                method: `UPDATE - Video`,
                user: data.name
            }

            await Log.create(log);

            if (response) {
                req.flash('msg_info', 'Video successful updated');
                res.redirect('/cms/dynamic-pages/video/')
            } else {
                throw ({
                    message: response.message
                })
            }
        } catch (error) {
            if (req.files.length > 0) {
                removePhoto(path + req.files[0].filename);
            }
            req.flash('msg_error', error.message || `Got problem during edit video`);
            res.redirect(`/cms/dynamic-pages/video/edit/${id}`);
        }
    }

    static async deleteVideo(req, res) {
        const { video_id } = req.body;
        const session = req.session

        try {
            let data = await Video.findOne({ where: { id: video_id } });
            let path = 'Public/photos/public/video/'

            await Video.destroy({ where: { id: video_id } })

            if (data.video_file) {
                removePhoto(path + data.video_file);
            }

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - Video`,
                user: session.name
            }

            await Log.create(log);

            req.flash('msg_info', 'Successful deleted');
            res.redirect('/cms/dynamic-pages/video/')
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete video`);
            res.redirect(`/cms/dynamic-pages/video/`);
        }
    }
}

module.exports = VideoController;