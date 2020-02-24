// 06.08 JavasScript code

function play() {

    var bet;
    var pips;
    var outputText;
    var smallWin;
    var bigWin;

    bet = Number(document.getElementById("txtBet").value);
    pips = Math.round( (Math.random( ) * 5) + 1 );
    smallWin = bet * 1.25;
    bigWin = bet * 1.5;



    if (pips === 1 || pips === 3 || pips === 5) {
        outputText = "Pips was " + pips + " - no pay.";
    } else if (pips === 2 || pips === 4){
        outputText = "Pips was " + pips + " - Paid back: " + smallWin.toFixed(2) + " euros.";
    } else {
        outputText = "Pips was " + pips + " - Paid back: " + bigWin.toFixed(2) + " euros.";
    }
    
    document.getElementById("divAnswer").innerHTML = outputText;
    // 1.  Assign a value from the input field to a variable


    // 2.  Roll the dice. That is, generate a random value between 1 and 6 (pips)


    // 3.  Calculate the win based on the pips



    // 4.  Write the answer on the page, to the answer div, as content of the div

}
