var nameArray = [];
var ageArray = [];
var total = 0;
var outputText1 = ""
var outputText2 = ""
document.getElementById("pOutput1").innerHTML = "0 Members";



function addMembers() {
        
    var name = document.getElementById("txtName").value;
    var age = Number(document.getElementById("txtAge").value);
    
    nameArray.push(name);
    ageArray.push(age);

    for (var i = nameArray.length - 1; i < nameArray.length; i++){
        total = total + 1;
    }

    document.getElementById("pOutput1").innerHTML = total + " Members.";

    document.getElementById("txtName").value = ""; 
    document.getElementById("txtAge").value = ""; 


}

function showMinors() {
    for (var i = 0; i < nameArray.length; i++) {
        if (ageArray[i] < 18) {
            outputText1 += nameArray[i] + ", " + ageArray[i] + " years old" + "<br>";
        }
    }
    document.getElementById("pOutput2").innerHTML = outputText1; 
    outputText1 = "";
    

}

function showAdults() {
    for (var i = 0; i < nameArray.length; i++) {
        if (ageArray[i] >= 18) {
            outputText2 += nameArray[i] + ", " + ageArray[i] + " years old" + "<br>";
        }
    }
    document.getElementById("pOutput2").innerHTML = outputText2;
    outputText2 = ""; 
}