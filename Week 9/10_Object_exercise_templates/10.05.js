// 10.05 JavasScript code

// Create an array of Course objects

var courses = [ 
    {  "name": "Orientation to software engineering",
        "code"   : "SWD1TF001",
        "extent" : "5",
        "timing" : "1.semester"
          }, 
    {  "name": "Programming",
        "code"   : "SWD1TF002",
        "extent" : "5",
        "timing" : "2.semester"
          }, 
    {  "name": "Data management and databases",
        "code"   : "SWD1TF003",
        "extent" : "5",
        "timing" : "2.semester"
          }, 
    {  "name": "Mobile development project",
        "code"   : "SWD1TF004",
        "extent" : "10",
        "timing" : "3.semester"
          }
    
];

var outputText = "";

function listCourses() {
    // INSERT YOUR CODE HERE
    for (var i = 0; i < courses.length; i++) {
       outputText += "Code: " + courses[i].code + "<br>" +
                     "Name: " + courses[i].name + "<br>" +
                     "Extent: " + courses[i].extent + "<br>" +
                     "Timing: " + courses[i].timing + "<br><br>"; 
    }

}

listCourses();

document.getElementById("divOutput").innerHTML = outputText;
// INSERT YOUR CODE HERE


