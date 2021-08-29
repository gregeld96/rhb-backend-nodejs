const multer = require('multer');
var fs = require('fs');
const privateUrl = `Public/photos/private`;
const publicUrl = 'Public/photos/public';
let folder;

let userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        switch (file.fieldname) {
            case 'identification_file':
                folder = `./${privateUrl}/user/ktp`
                break;
            case 'birth_certification_file':
                folder = `./${privateUrl}/user/akte-lahir`
                break;
            case 'family_certificate':
                folder = `./${privateUrl}/user/kartu-keluarga`
                break;
            case 'baptism_certification_file':
                folder = `./${privateUrl}/user/akte-baptis`
                break;
            case 'children_birth_certification_file':
                folder = `./${privateUrl}/akte-anak`
                break;
            case 'partner_birth_certification_file':
                folder = `./${privateUrl}/partner/akte-lahir`
                break;
            case 'partner_identification_file':
                folder = `./${privateUrl}/partner/ktp`
                break;
            case 'partner_family_certification_file':
                folder = `./${privateUrl}/partner/kartu-keluarga`
                break;
            case 'partner_baptism_certification_file':
                folder = `./${privateUrl}/partner/akte-baptis`
                break;
            case 'marriage_photo':
                folder = `./${privateUrl}/marriage`
                break;
            default:
                folder = ''
                break;
        }

        if (folder) {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, {
                    recursive: true
                });
            }
            cb(null, folder)
        } else {
            cb(null, null)
        }
    },
    filename: function (req, file, cb) {
        let name = req.body.full_name.replace(/\s/g, '_')

        if (req) {
            let extArray = file.mimetype.split('/');
            let extension = extArray[extArray.length - 1]
            if (extension == 'octet-stream') {
                cb(null, file.fieldname + '-' + name + '-' + Date.now() + '.png')
            } else {
                cb(null, file.fieldname + '-' + name + '-' + Date.now() + '.' + extension) //req.body.full_name sensitive harus di atas photo
            }
        } else {
            cb(null, null)
        }
    }
})

let generalStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        switch (file.fieldname) {
            case 'shepherd_image':
                folder = `./${publicUrl}/shepherd_letter`
                break;
            case 'mass_thumbnail':
                folder = `./${publicUrl}/mass`
                break;
            case 'sunday_school':
                folder = `./${publicUrl}/sunday-school`
                break;
            case 'news':
                folder = `./${publicUrl}/news`
                break;
            case 'concom_logo':
                folder = `./${publicUrl}/contact-commission/logo`
                break;
            case 'leader_pic':
                folder = `./${publicUrl}/contact-commission/leader`
                break;
            case 'criscen_pic':
                folder = `./${publicUrl}/crisis_center`
                break;
            case 'profile_pic':
                folder = `./${publicUrl}/profile_pic`
                break;
            case 'child_profile_pic':
                folder = `./${publicUrl}/child-profile-pic`
                break;
            case 'testimonial_pic':
                folder = `./${publicUrl}/testimonial`
                break;
            case 'giving_pic':
                folder = `./${publicUrl}/giving`
                break;
            case 'flash':
                folder = `./${publicUrl}/flash-page`
                break;
            case 'video':
                folder = `./${publicUrl}/video`
                break;
            case 'banner':
                folder = `./${publicUrl}/banner`
                break;
            case 'instagram-banner':
                folder = `./${publicUrl}/instagram-banner`
                break;
            default:
                folder = '';
                break;
        }

        if (folder) {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, {
                    recursive: true
                });
            }
            cb(null, folder)
        } else {
            cb(null, null)
        }
    },
    filename: function (req, file, cb) {
        if (req) {
            let extArray = file.mimetype.split('/');
            let extension;
            let name;

            if (extArray[extArray.length - 1] == 'octet-stream') {
                let fileArr = file.originalname.split('.');
                extension = fileArr[fileArr.length - 1];
                name = req.body.name.replace(/\s/g, '')
            } else if (req.body.title) {
                extension = extArray[extArray.length - 1]
                name = req.body.title.replace(/\s/g, '')
            } else if (req.body.name) {
                extension = extArray[extArray.length - 1]
                name = req.body.name.replace(/\s/g, '')
            }

            cb(null, file.fieldname + '-' + name + '-' + Date.now() + '.' + extension)
        } else {
            cb(null, null)
        }
    }
})

const generalUpload = multer({
    storage: generalStorage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
})

const userUpload = multer({
    storage: userStorage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|pdf|mp4|octet-stream/;
    let extArray = file.mimetype.split('/');
    let extension = extArray[extArray.length - 1]
    const extname = filetypes.test(extension)
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Image Only'), false)
    }

}

module.exports = { userUpload, generalUpload }