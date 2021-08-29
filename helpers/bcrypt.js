const bcrypt = require('bcryptjs');

function hashPassword (inputPassword) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(inputPassword, salt);
}

function checkPassword (inputPassword, hashingPassword) {
    return bcrypt.compareSync(inputPassword,hashingPassword)    
}

module.exports = {hashPassword, checkPassword};