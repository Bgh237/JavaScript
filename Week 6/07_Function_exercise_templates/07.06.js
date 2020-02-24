// 07.06 JavasScript code
var visitLength;
var doctorsFee;
var officeFee = 15.90;
// Define a function (1.) 
function kelaReimbursement(visitLength) {
    parseInt(visitLength);

    if (visitLength <= 10) {
        return 8;
    } else if (visitLength <= 20) {
        return 11;
    } else if (visitLength <= 30) {
        return 13.50;
    } else if (visitLength <= 45) {
        return 16.50;
    } else if (visitLength <= 60) {
        return 21.00;
    }

}

// Define a function (2.) 
function afterKela(doctorsFee) {

    parseInt(doctorsFee);
    
    var newAmount = doctorsFee - kela + officeFee;

    return newAmount;
}


// Define a function (3.) 


// Complete the code of the function calculate.
function calculate() {
    visitLength = Number(document.getElementById("txtLength").value);
    doctorsFee = Number(document.getElementById("txtDoctorsFee").value);

    kela = kelaReimbursement(visitLength);  
    newAmount = afterKela(doctorsFee);

    var outPutText = "Doctor's Fee is €" + doctorsFee.toFixed(2) + "<br>" + "Kela reimbursement is €"  + kela.toFixed(2) + "<br>" + "Office Fee is €" + officeFee.toFixed(2) + "<br>" + "Customer needs to pay €" + newAmount.toFixed(2);

    document.getElementById("divOutput").innerHTML = outPutText;




    // 1. Get values from the input fields


    // 2. Call the function (1.) which calculates Kela reimbursement 


    // 3. Call the function (2.) which calculates amount left for the customer to pay


    // 4. Display the answer 

}