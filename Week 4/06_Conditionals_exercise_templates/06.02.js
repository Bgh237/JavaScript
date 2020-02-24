// 06.02 JavasScript code

function checkAge() {

    var age;
    var outputText;
    
    age = Number(document.getElementById("txtAge").value);

    if (age < 18) {
        outputText = "Adolescents are not allow to play."
    } else {
        outputText = "Old enough to play."
    }

    document.getElementById("divAnswer").innerHTML = outputText;
		 
    
}