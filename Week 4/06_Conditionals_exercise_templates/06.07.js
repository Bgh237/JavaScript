// 06.07 JavasScript code

function showStudyGrant() {
    
    var age;
    var withParents;
    var outputText;

    age = Number(document.getElementById("txtAge").value);
    withParents = document.getElementById("txtWithParents").value;

    if (age >= 20 && withParents === "n"){
        outputText = "The study grant is " + 335.20 + " euros.";
    } else if (age >= 20 && withParents === "y"){
        outputText = "The study grant is " + 136.70 + " euros.";
    } else {
        outputText = "Ask Kela.";
    }

    document.getElementById("divAnswer").innerHTML = outputText;


    

}
