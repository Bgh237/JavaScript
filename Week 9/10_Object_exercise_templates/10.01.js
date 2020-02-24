// 10.01 JavasScript code

//  Create a JavaScript object that includes facts about one student
var student = { 
    studentNumber: "a1234567", 
    firstName: "Virtanen", 
    lastName: "Pekka", 
    streetAddress: "Virtakatu 11", 
    postCode:"12345", 
    city: "Virtala",
    dOb: "24.12.1990"
};

var fullName = student.firstName + " " + student.lastName;
var fullAddress = student.streetAddress + " " + student.postCode + " " + student.city; 



function showStudentInfo() {
    var outputText = "Student Number: " + student.studentNumber + "<br>" + 
                     "Name: " + fullName + "<br>" + 
                     "Address: " + fullAddress + "<br>" + 
                     "Date of Birth: " + student.dOb;
    document.getElementById("divOutput").innerHTML = outputText;
    // INSERT YOUR CODE HERE
}

showStudentInfo();
// INSERT YOUR CODE HERE

