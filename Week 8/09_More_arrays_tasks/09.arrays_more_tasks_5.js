var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

bloodTypes.sort();
var outputText = "";
var length = bloodTypes.length;
var unique = [...new Set(bloodTypes)];
var sum = 0;
var p = 0


for (var i = 0; i < unique.length; i++) {
    for(var j = p; j < length; j++){
        if (unique[i] == bloodTypes[j]) {
           sum = sum + 1;
        } else {
            j = length;
        }
    }
    p++;
    outputText += "There are " + (sum/length) * 100 + "% of people with blood type " + unique[i] + "<br>";
    sum = 0;
}
document.getElementById("pOutput").innerHTML = outputText;

