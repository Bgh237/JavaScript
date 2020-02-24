// 08.06 JavasScript code

function showComparisonScores() {

    var votes = Number(document.getElementById("txtVotes").value);
    var numberOfCandidates = Number(document.getElementById("txtCandidates").value);
    var outputText = "";
    var canVotes;

    for (var i = 1; i <= numberOfCandidates; i++) {
        canVotes = votes / i;
        outputText += i + ". candidate: " + canVotes.toFixed() + "<br>";
    }

    document.getElementById("pOutput").innerHTML = outputText;
    // For each candidate
        // Calculate comparison score for the candidate


    // Show scores


}
