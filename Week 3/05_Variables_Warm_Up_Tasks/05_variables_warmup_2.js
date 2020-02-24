// 05_variables_warmup_2 JavasScript code

function add() {
    var firstNumber; 
    var secondNumber;
 
    firstNumber = Number(document.getElementById("txtFirst").value);
    secondNumber = Number(document.getElementById("txtSecond").value);

    document.getElementById("pOutput").innerHTML = firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber)
}