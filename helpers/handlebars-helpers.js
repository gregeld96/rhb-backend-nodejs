const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;
global.document = document
var $ = jQuery = require("jquery")(window);

module.exports = {
    checkManagerAndDepartmentForTheAction(user_permission_level, user_department, options) {
        const min_level = 'Manager'

        if (user_permission_level == min_level) {
            switch (user_department) {
                case 'Pemusik & Multimedia':
                case 'Design & Creative':
                case 'Security MAG':
                case 'Security Kirana':
                case 'Penjadwalan':
                case 'Sunday School':
                case 'Pelayanan Jemaat':
                    return options.fn(this);
                    break;
                default:
                    return options.inverse(this)
                    break;
            }
        } else {
            return options.inverse(this)
        }
    },

    checkImportantDepartmentForTheAction(user_permission_level, user_department, options) {
        const min_level = 'Manager'

        if (user_permission_level == min_level) {
            switch (user_department) {
                case 'Ruangan MAG':
                case 'Ruangan Kirana':
                case 'Pemusik & Multimedia':
                case 'Design & Creative':
                case 'Security MAG':
                case 'Security Kirana':
                case 'Penjadwalan':
                case 'Social Media':
                case 'IT':
                    return options.fn(this);
                    break;
                default:
                    return options.inverse(this)
                    break;
            }
        } else {
            return options.inverse(this)
        }
    },

    checkDepartmentPenjadwalanForTheAction(user_permission_level, user_department, options) {
        const min_level = 'Manager';
        const department_authorized = 'Penjadwalan';

        if (user_permission_level == min_level) {
            if (user_department == department_authorized) {
                return options.fn(this);
            } else {
                return options.inverse(this)
            }
        } else {
            return options.inverse(this)
        }
    },

    ifDepartment(user_department, desire_department, options) {
        if (user_department === desire_department) {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    },

    checkAdminDepartmentAndPermitedDepartment(user_department, permited_department, user_level, options) {
        if (user_level === 'Manager') {
            if (user_department === permited_department) {
                return options.fn(this)
            } else {
                return options.inverse(this)
            }
        } else {
            return options.inverse(this)
        }
    },

    checkCreativeDesignDepartment(user_department, user_level, options) {
        if (user_level === 'Admin' || user_level === 'Manager') {
            switch (user_department) {
                case 'Creative':
                case 'Design':
                case 'Design & Creative':
                    return options.fn(this)
                default:
                    return options.inverse(this)
            }
        } else {
            return options.inverse(this)
        }
    },

    sectionMode(section_mode, options) {
        if (section_mode != 'section') {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    },

    GeneralSectionMode(section_mode, desire_section, options) {
        if (section_mode === desire_section) {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    },

    checkComissionRuanganOnly(user_department, user_level, view_mode, options) {
        if (view_mode) {
            return options.fn(this)
        } else {
            if (user_level === 'Manager') {
                switch (user_department) {
                    case 'Ruangan MAG':
                    case 'Ruangan Kirana':
                        return options.fn(this)
                    default:
                        return options.inverse(this)
                }
            } else {
                return options.inverse(this)
            }
        }
    },

    checkPermitedDepartmentEditModeOrViewMode(user_department, permited_department, view_mode, options) {
        if (view_mode) {
            return options.fn(this)
        } else {
            if (user_department === permited_department) {
                return options.fn(this)
            } else {
                return options.inverse(this)
            }
        }
    },

    checkEditModeOrViewMode(view_mode, options) {
        if (view_mode) {
            return options.inverse(this)
        } else {
            return options.fn(this)
        }
    },

    checkValueTrue(parameter, desired_value) {
        return parameter == desired_value ? 'checked' : ''
    },

    selectValueTrue(value, options) {
        var $el = $('<select />').html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    },

    checkArrayValue(parameter, desired_value) {
        let selected = true;
        let num = 0;

        while (selected) {
            if (parameter[num] == desired_value) {
                selected = false;
                return 'checked';
            } else {
                if (num == parameter.length - 1) {
                    selected = false;
                    return ''
                } else {
                    num++
                }
            }
        }
    },

    requiredTrueParameter(parameter, options) {
        if (parameter) {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    },

    filterResultSectionCategory(list, section_mode) {
        let body;
        let fix;

        list.forEach((data) => {
            if (section_mode != 'section') {
                body = `
                <td>${data.section}</td>
                <td>
                    <img src="/photos/public/mass/${data.thumbnail}" alt="${data.title}" width="80" height="60">
                </td>
                <td>
                    <a class="btn btn-secondary btn-sm" href="/cms/penjadwalan/edit-category/${data.id}">
                        <i class="fas fa-pencil-alt pr-1"></i>
                        Edit
                    </a>
                    <a class="btn btn-info btn-sm" href="/cms/penjadwalan/${data.id}">
                        <i class="fas fa-list pr-1"></i>
                        View Event
                    </a>
                `
            } else {
                body = `
                <td>
                    <a class="btn btn-secondary btn-sm" href="/cms/penjadwalan/edit-section/${data.id}">
                        <i class="fas fa-pencil-alt pr-1">
                        </i>
                        Edit
                    </a>
                    <a class="btn btn-info btn-sm" href="/cms/penjadwalan/category">
                        <i class="fas fa-list pr-1">
                        </i>
                        View Categories
                    </a>
                `
            }


            fix = fix + `<tr> 
            <td>${data.title}</td>
            ${body}
            <a href="javascript:void(0);" class="btn btn-sm btn-danger delete" data-id="${data.id}">
                <i class="fas fa-trash pr-1"></i>
                Delete
            </a></td></tr>

            `
        })

        return fix;
    }
}