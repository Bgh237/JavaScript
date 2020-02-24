// 06.03 JavasScript code

function comparePackages() {

    var textMessages;
    var callTime;
    var messageCost;
    var callCost;
    var specialCost;
    var outputText;

    textMessages = Number(document.getElementById("txtMessages").value);
    callTime = Number(document.getElementById("txtCallTime").value);

    messageCost = textMessages * 0.069
    callCost = callTime * 0.069

    specialCost = 19.90 + callCost + messageCost;

    if (specialCost < 29.90){
        outputText = "The Special package (" + specialCost.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
    } else {
        outputText = "The All-inclusive package (29.90) is cheaper that the Special package (" + specialCost.toFixed(2) + ")";
    }

    document.getElementById("divAnswer").innerHTML = outputText;

   
}