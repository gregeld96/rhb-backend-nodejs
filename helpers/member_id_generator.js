function member_generator (userRegisteredId) {
    const regionCode = String(31);
    const churchCode = '001';
    const userId = String(userRegisteredId);
    const memberCode = userId.padStart(5, '0');

    return `${regionCode}${churchCode}${memberCode}`
}

module.exports = member_generator