function dateConverter(start, end) {
    let stringDate, day, startMonthString, endMonthString;
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    //Day Month Year Setting Start
    let startDate = start.getDate();
    let startMonth = start.getMonth();
    let startYear = start.getFullYear();

    //Day Month Year Setting End
    let endDate = end.getDate();
    let endMonth = end.getMonth();
    let endYear = end.getFullYear();

    //Time Setting
    let startHour = start.getHours();
    let startMinute = start.getMinutes();
    let endHour = end.getHours();
    let endMinute = end.getMinutes();

    if (startHour < 10) {
        startHour = `0${startHour}`
    }

    if (endHour < 10) {
        endHour = `0${endHour}`
    }

    if (startMinute < 10) {
        startMinute = `0${startMinute}`
    }

    if (endMinute < 10) {
        endMinute = `0${endMinute}`
    }

    for (let i = 0; i < monthList.length; i++) {
        if (i == startMonth) {
            startMonthString = monthList[i]
        }

        if (i == endMonth) {
            endMonthString = monthList[i]
        }
    }

    if ((startMonthString !== endMonthString) || (startDate !== endDate) || (startYear !== endYear)) {
        stringDate = `${startDate} ${startMonthString} ${startYear} ${startHour}:${startMinute} - ${endDate} ${endMonthString} ${endYear} ${endHour}:${endMinute}`
    } else {
        stringDate = `${startDate} ${startMonthString} ${startYear} ${startHour}:${startMinute} - ${endHour}:${endMinute}`
    }

    return stringDate
}

function singleDateConverter(input) {
    let stringDate, stringDay, stringMonth;
    const dayList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    // const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //Day Month Year Setting Start
    let day = input.getDay();
    let date = input.getDate();
    let month = input.getMonth();
    let year = input.getFullYear();
    let hour = input.getHours();
    let minute = input.getMinutes();

    if (hour < 10) {
        startHour = `0${hour}`
    }

    if (minute < 10) {
        minute = `0${minute}`
    }

    for (let i = 0; i < monthList.length; i++) {
        if (i == month) {
            stringMonth = monthList[i]
        }
    }

    for (let i = 0; i < dayList.length; i++) {
        if (i == day) {
            stringDay = dayList[i]
        }
    }

    stringDate = `${stringDay}, ${date} ${stringMonth} ${year} - ${hour}:${minute}`

    return stringDate;
}

function onlyDate(input) {
    let stringDate, stringMonth;

    //Day Month Year Setting Start
    let date = input.getDate();
    let month = input.getMonth();
    let year = input.getFullYear();

    stringDate = date < 10 ? `0${date}` : date
    stringMonth = month < 10 ? `0${month + 1}` : month

    let full = `${stringDate}/${stringMonth}/${year}`

    return full;
}

function dateAndDay(input) {
    let stringDate, stringDay, stringMonth;
    const dayList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    //Day Month Year Setting Start
    let day = input.getDay();
    let date = input.getDate();
    let month = input.getMonth();
    let year = input.getFullYear();

    for (let i = 0; i < monthList.length; i++) {
        if (i == month) {
            stringMonth = monthList[i]
        }
    }

    for (let i = 0; i < dayList.length; i++) {
        if (i == day) {
            stringDay = dayList[i]
        }
    }

    stringDate = `${stringDay}, ${date} ${stringMonth} ${year}`

    return stringDate;
}

function stringDateConverter(input) {
    let stringMonth;
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    //Day Month Year Setting Start
    let date = input.getDate();
    let month = input.getMonth();
    let year = input.getFullYear();

    for (let i = 0; i < monthList.length; i++) {
        if (i == month) {
            stringMonth = monthList[i]
        }
    }

    stringDate = `${date} ${stringMonth} ${year}`

    return stringDate;
}

function hourStartEnd(start, end) {
    let startHour = start.getHours();
    let startMinute = start.getMinutes();
    let endHour = end.getHours();
    let endMinute = end.getMinutes();
    let stringStartHour;
    let stringStartMinute;
    let stringEndHour;
    let stringEndMinute;

    if (startHour < 10) {
        stringStartHour = `0${startHour}`
    } else {
        stringStartHour = `${startHour}`
    }

    if (endHour < 10) {
        stringEndHour = `0${endHour}`
    } else {
        stringEndHour = `${endHour}`
    }

    if (startMinute < 10) {
        stringStartMinute = `0${startMinute}`
    } else {
        stringStartMinute = `${startMinute}`
    }

    if (endMinute < 10) {
        stringEndMinute = `0${endMinute}`
    } else {
        stringEndMinute = `${endMinute}`
    }

    return `${stringStartHour}:${stringStartMinute}-${stringEndHour}:${stringEndMinute}`
}

function reminderDate(start) {
    let startDate = start.getDate() - 1;
    let startMonth = start.getMonth() + 1;
    let startYear = start.getFullYear();
    let startHour = start.getHours();
    let startMinute = start.getMinutes();
    let stringStartHour;
    let stringStartMinute;
    let stringStartDate;
    let stringStartMonth;

    startDate < 10 ? stringStartDate = `0${startDate}` : stringStartDate = `${startDate}`;
    startMonth < 10 ? stringStartMonth = `0${startMonth}` : stringStartMonth = `${startMonth}`;
    startHour < 10 ? stringStartHour = `0${startHour}` : stringStartHour = `${startHour}`;
    startMinute < 10 ? stringStartMinute = `0${startMinute}` : stringStartMinute = `${startMinute}`;

    return `${startYear}-${stringStartMonth}-${stringStartDate} ${stringStartHour}:${stringStartMinute}:00 GMT+0700`
}

function manualISOString(date) {
    let startDate = date.getDate();
    let startMonth = date.getMonth() + 1;
    let startYear = date.getFullYear();
    let startHour = date.getHours();
    let startMinute = date.getMinutes();
    let stringStartHour;
    let stringStartMinute;
    let stringStartDate;
    let stringStartMonth;

    startDate < 10 ? stringStartDate = `0${startDate}` : stringStartDate = `${startDate}`;
    startMonth < 10 ? stringStartMonth = `0${startMonth}` : stringStartMonth = `${startMonth}`;
    startHour < 10 ? stringStartHour = `0${startHour}` : stringStartHour = `${startHour}`;
    startMinute < 10 ? stringStartMinute = `0${startMinute}` : stringStartMinute = `${startMinute}`;

    return `${startYear}-${stringStartMonth}-${stringStartDate}T${stringStartHour}:${stringStartMinute}:00`
}

function birthDateISOString(date) {
    let startDate = date.getDate();
    let startMonth = date.getMonth() + 1;
    let startYear = date.getFullYear();
    let startHour = date.getHours();
    let startMinute = date.getMinutes();
    let stringStartHour;
    let stringStartMinute;
    let stringStartDate;
    let stringStartMonth;

    startDate < 10 ? stringStartDate = `0${startDate}` : stringStartDate = `${startDate}`;
    startMonth < 10 ? stringStartMonth = `0${startMonth}` : stringStartMonth = `${startMonth}`;
    startHour < 10 ? stringStartHour = `0${startHour}` : stringStartHour = `${startHour}`;
    startMinute < 10 ? stringStartMinute = `0${startMinute}` : stringStartMinute = `${startMinute}`;

    return `${startYear}-${stringStartMonth}-${stringStartDate}T${stringStartHour}:${stringStartMinute}:00Z`
}

function userInput(date) {
    let temp = date.split('/');
    let string = `${temp[2]}-${temp[1]}-${temp[0]}`
    let newDate = new Date(string).toISOString();

    return newDate
}

function hourMinute(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();

    hour < 10 ? stringHour = `0${hour}` : stringHour = `${hour}`;
    minute < 10 ? stringMinute = `0${minute}` : stringMinute = `${minute}`;

    return `${stringHour}:${stringMinute}`;
}

module.exports = { 
    dateConverter, 
    singleDateConverter, 
    onlyDate, 
    dateAndDay, 
    stringDateConverter, 
    hourStartEnd, 
    reminderDate, 
    manualISOString, 
    birthDateISOString, 
    userInput, 
    hourMinute,
}