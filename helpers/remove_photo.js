const fs = require('fs');

function removePhoto (path) {
    fs.unlink(path, function (error) {
        if(error) return '';
    })
}

module.exports = removePhoto;