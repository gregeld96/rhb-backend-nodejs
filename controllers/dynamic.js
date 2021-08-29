const { Video, Testimonial, Help, Notification, Giving, Flash, News, Shepherd_Letter, Home, Contact_Commission, Crisis_Center } = require('../models');
const { stringDateConverter } = require('../helpers/date-string');

class DynamicPageController {
    static async getIntro(req, res, next) {
        try {
            let completeList = [];

            let list = await Flash.findAll({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'image',
                    'order'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        title: detail.title,
                        description: detail.description,
                        image: detail.image,
                        order: detail.order
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.status(200).json({ data: completeList, message: `` })
        } catch (error) {
            next({ error });
        }
    }

    static async getConcom(req, res, next) {
        try {
            let completeList = await Contact_Commission.findAll({
                attributes: ['id', 'title', 'description', 'logo', 'leader_name', 'leader_phone', 'leader_pic']
            });

            res.status(200).json({ data: completeList, message: '' })
        } catch (error) {
            next({ error });
        }
    }

    static async getCriscen(req, res, next) {
        try {
            let completeList = await Crisis_Center.findAll({
                attributes: ['id', 'name', 'phone_number', 'profile_pic']
            });

            res.status(200).json({ data: completeList, message: '' })
        } catch (error) {
            next({ error });
        }
    }

    static async getNews(req, res, next) {
        const { section, start, limit } = req.query;

        try {
            let completeList = await News.findAndCountAll({
                where: {
                    section: section,
                },
                order: [
                    ['publishedAt', 'DESC']
                ],
                limit: limit ? Number(limit) : null,
                offset: start ? Number(start) : null,
                attributes: ['id', 'picture', 'description', 'publishedAt', 'url']
            });

            res.status(200).json({ data: completeList, message: '' })
        } catch (error) {
            next({ error });
        }
    }

    static async getShepherdLetter(req, res, next) {
        let { limit, start } = req.query;

        try {
            let completeList = await Shepherd_Letter.findAndCountAll({
                order: [
                    ['publishedAt', 'DESC']
                ],
                limit: limit ? Number(limit) : null,
                offset: start ? Number(start) : null,
            })

            let list = [];

            if (completeList.rows.length > 0) {
                completeList.rows.forEach(data => {
                    let summary, datePublish, maxLength = 150;
                    datePublish = stringDateConverter(data.publishedAt);

                    if (data.description.length > maxLength) {
                        summary = data.description.substring(0, maxLength);
                    } else {
                        summary = data.description;
                    }

                    let temp = {
                        id: data.id,
                        title: data.title,
                        summary,
                        description: data.description,
                        publishedAt: datePublish
                    }

                    list.push(temp)
                });
            }

            res.status(200).json({ message: '', data: list, total: completeList.count })
        } catch (error) {
            next({ error });
        }
    }

    static async specificShepherdLetter (req, res, next){
        const { id } = req.params;

        try {
            let choosenLetter = await Shepherd_Letter.findOne({
                where: {
                    id: id,
                }
            });

            let summary, maxLength = 150;
            let datePublish = stringDateConverter(choosenLetter.publishedAt);

            if (choosenLetter.description.length > maxLength) {
                summary = choosenLetter.description.substring(0, maxLength);
            } else {
                summary = choosenLetter.description;
            }

            let list = [];

            let temp = {
                id: choosenLetter.id,
                title: choosenLetter.title,
                summary,
                description: choosenLetter.description,
                publishedAt: datePublish
            }

            list.push(temp);

            res.status(200).json({ message: '', data: list })
        } catch (error) {
            next({ error });
        }
    }

    static async getTestimonial(req, res, next) {
        let { section } = req.query

        try {
            let list = await Testimonial.findAll({
                where: {
                    section: section
                },
                attributes: [
                    'id',
                    'name',
                    'testimony',
                    'photo',
                    'section'
                ]
            });

            res.status(200).json({ data: list, message: '' })
        } catch (error) {
            next({ error });
        }
    }

    static async getGivingPage(req, res, next) {
        try {
            let data = await Giving.findOne({
                attributes: [
                    'id',
                    'bank',
                    'holder',
                    'no_rek',
                    'qr'
                ]
            });

            res.status(200).json({ data: data, message: '' })
        } catch (error) {
            next({ error })
        }
    }

    static async getHotline(req, res, next) {
        const { section } = req.query;

        try {
            let data = await Notification.findOne({
                where: {
                    section: section
                },
                attributes: [
                    'id',
                    'address',
                    'city',
                    'code_post',
                    'hotline',
                    'section'
                ]
            });

            let temp = {
                id: data.id,
                address: data.address ? data.address : 'N/A',
                city: data.city ? data.city : 'N/A',
                code_post: data.code_post ? data.code_post : 'N/A',
                hotline: data.hotline,
                section: data.section
            }

            res.status(200).json({ data: temp, message: '' })
        } catch (error) {
            next({ error })
        }
    }

    static async getHomePage(req, res, next) {
        try {
            let completeList = [];

            let list = await Home.findAll({
                attributes: [
                    'id',
                    'area',
                    'day',
                    'time',
                    'section'
                ]
            });

            if (list.length > 0) {
                list.forEach(detail => {
                    let temp = {
                        id: detail.id,
                        area: detail.area,
                        day: detail.day,
                        time: detail.time,
                        section: detail.section
                    }

                    completeList.push(temp)
                })
            } else {
                completeList = []
            }

            res.status(200).json({ data: completeList, message: `` })
        } catch (error) {
            next({ error })
        }
    }

    static async getHelp(req, res, next) {
        try {
            let detail = await Help.findOne({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'section'
                ]
            });

            let temp = {
                id: detail.id,
                title: detail.title,
                description: detail.description,
                // section: detail.section
            }

            res.status(200).json({ data: temp, message: '' })
        } catch (error) {
            next({ error })
        }
    }

    static async geVideo(req, res, next) {
        const { section } = req.query;

        try {
            let list = await Video.findAll({
                where: {
                    section: section
                },
                attributes: [
                    'id',
                    'video_file',
                    'section'
                ]
            });


            res.status(200).json({ data: list, message: '' })
        } catch (error) {
            next({ error })
        }
    }
}

module.exports = DynamicPageController;