// 06.01 JavasScript code

function calculateFee() {

    var apartmentPrice;
    var agentFee;
    var outputText = "Real state agent's fee is "

    apartmentPrice = Number(document.getElementById("txtPrice").value);
    agentFee = (apartmentPrice / 100) * 3.44

    if (agentFee < 2400) {
        document.getElementById("divAnswer").innerHTML = outputText + 2400 + " euros";
    } else {
        document.getElementById("divAnswer").innerHTML = outputText + agentFee + " euros";
    }
    
}


