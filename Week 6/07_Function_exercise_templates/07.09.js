// 07.09 JavasScript code

// Complete the code of the function tellAge.
function tellAge() {

    // 1. Read birth year from the input field 
    var birthYear = document.getElementById("txtBirthYear").value

    // 2. Figure out the current date into today variable 
    var today = new Date();

    // 3. Use the getFullYear() method to get the current year out from the today variable
    var thisYear = today.getFullYear();

    // 4. Calculate (rough estimate of) the age
    var age = thisYear - birthYear;

    // 5. If age is less than zero, then show an error message, otherwise show the age.
    if (age < 0) {
        document.getElementById("divOutput").innerHTML = "Birth year is invalid!";
    } else {
        document.getElementById("divOutput").innerHTML = "You are now " + age + " years old. <br> (Current year is " + thisYear + ".)";
    }
}