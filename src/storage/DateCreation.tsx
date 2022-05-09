export function createDate ():Date{
    var currentDate = new Date();
    currentDate.setUTCDate(0);
    return currentDate;
}