var names = [];
var scores = [];


function addPlayer() {
    var name = document.getElementById("txtName").value;
    var score = Number(document.getElementById("txtScore").value);

    names.push(name);
    scores.push(score);

    document.getElementById("txtName").value = "";
    document.getElementById("txtScore").value = "";
    
}

function ListPlayers() {
    var outputText = "";
    for (var i = 0; i<names.length; i++) {
        outputText += "Name: " + names[i] + " Score: " + scores[i] + "<br>";
    }

    document.getElementById("pOutput").innerHTML = outputText;
}

function searchPlayer() {
    var name = document.getElementById("txtSearch").value;
    var outputText = "";

    for(var i = 0; i < names.length; i++) {
        if(name===names[i]){
            outputText = "Name: " + names[i] + " Score: " + scores[i] + "<br>";
        } 
    }

    if (outputText === "") {
        outputText = "Not found: " + name;
    }

    document.getElementById("pOutput2").innerHTML = outputText;
    document.getElementById("txtSearch").value = "";
    
}

function findWinner() {
    var indexOfMax = 0;
    for(var i = 1; i < names.length; i++) {
        
        if (scores[i] > scores[indexOfMax]) {
            indexOfMax = i;
        }
    }
    
    outputText = "The winner is " + names[indexOfMax] + ", with a score of " + scores[indexOfMax];

    document.getElementById("pOutput3").innerHTML = outputText;
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

