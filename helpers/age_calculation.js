function age_calculator (childDate) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let inputDate = new Date(childDate);
    let childYear = inputDate.getFullYear();

    let childAge = Number(currentYear - childYear);

    return childAge

}

module.exports = age_calculator;