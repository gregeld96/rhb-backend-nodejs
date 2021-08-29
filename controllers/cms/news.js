const { News, Log } = require('../../models');
const removePhoto = require('../../helpers/remove_photo');
const { singleDateConverter } = require('../../helpers/date-string');

class NewsController {
    static async renderListNews(req, res) {
        try {
            res.render('news', {
                title: 'List of News',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                news_list_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async getListNews(req, res) {
        let { length, draw, start, order, columns } = req.query;
        let selected, list;

        try {
            for (let key in columns) {
                if (key == order[0].column) {
                    selected = columns[key].name
                }
            }

            let table = {
                draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []
            }

            list = await News.findAndCountAll({
                order: [[`${selected}`, `${order[0].dir}`]],
                limit: Number(length),
                offset: Number(start)
            });

            table.recordsTotal = list.count;
            table.recordsFiltered = list.count;

            for (let key in list.rows) {
                let date_publish;
                date_publish = singleDateConverter(list.rows[key]['publishedAt']);

                table.data.push(
                    {
                        date: date_publish,
                        description: list.rows[key]['description'] || 'N/A',
                        section: list.rows[key]['section'],
                        picture: list.rows[key]['picture'],
                        id: list.rows[key]['id'],
                        url: list.rows[key]['url']
                    }
                );
            }

            res.json(table);

        } catch (error) {
            console.log(error)
        }
    }

    static async renderAddNews(req, res) {
        try {
            res.render('news/add', {
                title: 'Add News',
                legend: 'Add News',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                news_list_active: 'active'
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async addNews(req, res) {
        const { publishedAt, section, description, url } = req.body
        const data = req.session

        try {
            if (req.files.length < 1 || !publishedAt) {
                throw ({
                    message: 'Please fill up all the form'
                })
            } else {
                let newNews = {
                    publishedAt,
                    picture: req.files.length > 0 ? req.files[0].filename : '',
                    description,
                    section, 
                    url
                }

                let created = await News.create(newNews);
                if (created) {
                    let log = {
                        log: JSON.stringify(req.body),
                        method: `CREATE - News`,
                        user: data.name
                    }

                    await Log.create(log)

                    req.flash('msg_info', `News successful created`);
                    res.redirect(`/cms/news/`)
                } else {
                    throw ({
                        message: 'Got problem during create, please try again'
                    })
                }
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || `Got problem during create news`);
            res.redirect(`/cms/news/add`)
        }
    }

    static async renderEditNews(req, res) {
        const { id } = req.params

        try {
            const data = await News.findOne({ where: { id: id } })

            res.render('news/edit', {
                title: 'Edit News',
                legend: 'Edit News',
                mobile_content_menu_open: 'menu-open',
                mobile_content_active: 'active',
                news_list_active: 'active',
                data: {
                    id: data.id,
                    description: data.description,
                    publishedAt: data.publishedAt.toISOString().substring(0, 10),
                    picture: data.picture,
                    section: data.section,
                    url: data.url,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async editNews(req, res) {
        const { publishedAt, description, section, url} = req.body;
        const { id } = req.params;
        const data = req.session

        try {
            const letter = await News.findOne({ where: { id: id } })

            if (req.files.length > 0) {
                if (letter.picture) {
                    removePhoto('Public/photos/public/news/' + letter.picture)
                }
            }

            let updatedNews = {
                description,
                section,
                publishedAt: publishedAt ? publishedAt : letter.publishedAt,
                picture: req.files.length > 0 ? req.files[0].filename : letter.picture,
                url
            }

            const update = await News.update(updatedNews, { where: { id: id } });

            if (update) {
                let log = {
                    log: JSON.stringify(req.body),
                    method: `UPDATE - News`,
                    user: data.name
                }

                await Log.create(log)

                req.flash('msg_info', `News successful updated`);
                res.redirect(`/cms/news/`)
            } else {
                throw ({
                    message: 'Got a problem during update, please try again'
                })
            }
        } catch (error) {
            if (req.files.length > 0) {
                req.files.map(fileData => {
                    removePhoto(fileData.path)
                })
            }
            req.flash('msg_error', error.message || `Got problem during update news`);
            res.redirect(`/cms/news/`)
        }
    }

    static async deleteNews(req, res) {
        const { news_id } = req.body;
        const data = req.session;

        try {
            let news = await News.findOne({ where: { id: news_id } })

            await removePhoto('Public/photos/public/news/' + news.picture)

            await News.destroy({ where: { id: news_id } })

            let log = {
                log: JSON.stringify(req.body),
                method: `DELETE - News`,
                user: data.name
            }

            await Log.create(log)

            req.flash('msg_info', `Successful delete news`);
            res.redirect(`/cms/news/`)
        } catch (error) {
            req.flash('msg_error', error.message || `Got problem during delete news`);
            res.redirect(`/cms/news/`)
        }
    }
}

module.exports = NewsController;