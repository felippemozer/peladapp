module.exports = function parseStringToDay(dayString, timeString) {
    const daySplittedString = dayString.trim().split('/');
    const timeSplittedString = timeString.trim().split(':');
    const date = parseInt(daySplittedString[0]);
    const month = parseInt(daySplittedString[1]);
    const year = parseInt(daySplittedString[2]);
    const hours = parseInt(timeSplittedString[0]);
    const minutes = parseInt(timeSplittedString[1]);
    const fullDate = new Date(year, month-1, date, hours, minutes);
    return fullDate;
}