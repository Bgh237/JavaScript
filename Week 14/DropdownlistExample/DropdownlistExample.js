// DropdownListExample.js

function greet() {
    var ddl = document.getElementById("ddlLanguage");
    var option = ddl.options[ddl.options.selectedIndex].value;
    var outputText;
    
    if (option === "en") {
        outputText = "Hello!";
    } else if (option === "fi") {
        outputText = "Hei!";
    } else {
        outputText = "Hejssan!";
    }
    
    document.getElementById("pOutput").innerHTML = outputText
}