// 07.10_functions JavasScript code

// Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 
 function allCapsTitleTrimmed(title) {
    title.value = title.value.trim().toUpperCase();
    
 }




function isSunday(dateText) {
    var date = dateText;
    var parts = date.split(".");
    var day = parts[0];
    var month = parts[1] - 1;
    var year = parts[2];
    var myDate = new Date();
    myDate.setFullYear(year);
    myDate.setMonth(month);
    myDate.setDate(day);
    var dayOfWeek = myDate.getDay();

    if (dayOfWeek == 0) {
        return true;
    } else {
        return false;
    }
}
   






