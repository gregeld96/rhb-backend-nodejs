const { User, User_Commission_Role, Role } = require('../models');
const { Op } = require('sequelize')

async function authentification_cms(req, res, next) {
    const data = req.session;

    try {
        if (data.email) {
            if (data.permission.role_name == 'Manager' || data.permission.role_name == 'Admin' || data.permission.role_name == 'SuperAdmin') {
                next()
            } else {
                throw ({
                    status: 403,
                    message: 'You are forbidden'
                })
            }
        } else {
            req.flash('msg_error', 'Please Login First');
            res.redirect('/cms/login')
        }
    } catch (error) {
        res.status(error.status).send(error.message)
    }
}

module.exports = { authentification_cms };