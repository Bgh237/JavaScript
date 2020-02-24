var lottery = [];
var outputText = "";



for (var i = 0; i < 7; i++) {
    var random = (Math.floor(Math.random() * 39) + 1);
    if (lottery.indexOf(random) ==-1){
    lottery.push(random);
    } else {
        i--;
    }
}

lottery.sort((a, b) => a - b);


for (var i = 0; i < 7; i++) {
    outputText += lottery[i] + " ";
}



document.getElementById("pOutput").innerHTML = outputText;