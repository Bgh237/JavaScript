// 05_variables_warmup_5 JavasScript code

function calculate() {
    var startingBalance;
    var interestRate;
    
    startingBalance = Number(document.getElementById("txtStartingBalance").value);
    interestRate = Number(document.getElementById("txtInterestRate").value);

    var firstYearInterest = ((startingBalance / 100) * interestRate) + startingBalance
    var secondYearInterest = ((firstYearInterest / 100) * interestRate) + firstYearInterest

    document.getElementById("pOutput").innerHTML = "Year 1 Interest: " + firstYearInterest.toFixed(2) +"<br/>" + "Year 2 Interest: " + secondYearInterest.toFixed(2)


}