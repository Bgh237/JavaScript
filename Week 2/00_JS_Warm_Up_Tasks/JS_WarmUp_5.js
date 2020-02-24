/*jslint browser:true*/
/*global console*/
/*global window*/

function showGreeting() {
    "use strict";
    var name;

    name = document.getElementById("txtName").value;

    console.log("Hello " + name);

    document.getElementById("pShowName").innerHTML = "Hello, " + name;
}


