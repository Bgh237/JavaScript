// 05_variables_warmup_3 JavasScript code

function showMinutes() {
    var givenHours;
    var givenMinutes;

    givenHours = Number(document.getElementById("txtHours").value);
    givenMinutes = Number(document.getElementById("txtMinutes").value);

    var hoursInMinutes = givenHours * 60

    document.getElementById("pOutput").innerHTML = (hoursInMinutes + givenMinutes) + " minutes"
}