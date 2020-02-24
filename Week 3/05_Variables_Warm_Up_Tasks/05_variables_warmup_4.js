// 05_variables_warmup_4 JavasScript code

function showHoursAndMinutes() {
    var totalMinutes;
    var totalHours;
    var minutesRemaining

    totalMinutes = Number(document.getElementById("txtMinutes").value);
    minutesRemaining = totalMinutes % 60
    totalHours = (totalMinutes - minutesRemaining) / 60

    document.getElementById("pOutput").innerHTML = totalHours + " h " + minutesRemaining + " min"
}