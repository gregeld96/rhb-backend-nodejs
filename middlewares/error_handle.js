const removePhoto = require('../helpers/remove_photo')

module.exports = function (err, req, res, next) {
    let statusCode = 500;
    let errorMessage = [];
    const {error, files} = err
    

    if(files){
        files.map(fileData => {
            removePhoto(fileData.path)
        })
    }

    switch (error.name) {
        case "SequelizeUniqueConstraintError" :
        case "SequelizeValidationError" :
        case "ValidationErrorItem" :
            statusCode = 422;
            error.errors.forEach(errData => {
                errorMessage.push(errData.message);
            });
            break;
        case "JsonWebTokenError":
            statusCode = 401;
            errorMessage.push('Token invalid');
            break;
        default:
            let message = error.message || 'Internal Server Error';
            errorMessage.push(message);
            statusCode = error.status || statusCode
            break;
    }

    res.status(statusCode).json({message: errorMessage.toString()});

}