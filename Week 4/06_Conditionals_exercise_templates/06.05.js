// 06.05 JavasScript code

function calculateBMI() {

    var weight;
    var height;
    var BMI;
    var outputText;

    weight = Number(document.getElementById("txtWeight").value);
    height = Number(document.getElementById("txtHeight").value);

    BMI = weight / (height/100.0 * height/100.0)

    if (BMI <= 18.4) {
        outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Weight less than normal weight)";        
    } else if (BMI > 18.4 && BMI <= 24.9) {
        outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Normal weight)";
    } else {
        outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Overweight)";
    }

    document.getElementById("divAnswer").innerHTML = outputText;

  

}
