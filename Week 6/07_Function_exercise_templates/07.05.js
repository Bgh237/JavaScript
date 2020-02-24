// 07.05 JavasScript code

// 1. Complete the code of the function showSalary
function calculateSalary(hours, hourlySalary) {

    // 1.1 Calculate gross salary
	grossSalary = hours * hourlySalary;

    // 1.2 Return the gross salary with the return statement
    return grossSalary;

}


// 2. Complete the code of the function showSalary
function showSalary() {
    var hours = Number(document.getElementById("txtHours").value);
    var hourlySalary = Number(document.getElementById("txtHourlySalary").value);

    var salary = calculateSalary(hours, hourlySalary);
    var outputText = "Gross salary is €" + salary.toFixed(2);

    document.getElementById("divOutput").innerHTML = outputText;

    // 2.1 Get values from the input fields


    // 2.2 Call the calculateSalary function to determine the gross salary


    // 2.3 Show the answer on the web page
    

}
