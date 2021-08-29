const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt')

async function authentification(req, res, next) {
    const {
        access_token
    } = req.headers

    try {
        const decoded = verifyToken(access_token);

        const user = await User.findOne({
            where: {
                email: decoded.email
            }
        })

        if (user) {
            req.userId = decoded.id;
            req.classified = {
                email: decoded.email,
                id: decoded.id
            }
            next()
        } else throw ({
            status: 401,
            message: `Authentification Failed`
        })
    } catch (error) {
        next({
            error
        })
    }
}

module.exports = {
    authentification
};