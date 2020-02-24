// 06.09 JavasScript code

function tellInfractionFine() {

    var drivingSpeed;
    var speedLimit;
    var difference;
    var outputText;

    drivingSpeed = Number(document.getElementById("txtDrivingSpeed").value);
    speedLimit = Number(document.getElementById("txtSpeedLimit").value);

    difference = drivingSpeed - speedLimit;

    if (speedLimit >= 10 && speedLimit <= 60 && difference > 0 && difference <= 15) {
        outputText = "Infraction Fine is 85 euros.";
    } else if (speedLimit >= 10 && speedLimit <= 60 && difference > 15 && difference <= 20) {
        outputText = "Infraction Fine is 115 euros.";
    } else if (speedLimit >= 70 && speedLimit <= 120 && difference > 0 && difference <= 15) {
        outputText = "Infraction Fine is 70 euros.";
    } else if (speedLimit >= 70 && speedLimit <= 120 && difference > 15 && difference <= 20) {
        outputText = "Infraction Fine is 100 euros";
    } else if (difference <= 0) {
        outputText = "No speeding, no fine.";
    } else {
        outputText = "Income-based unit fine.";
    }

    document.getElementById("divAnswer").innerHTML = outputText;
}

    
