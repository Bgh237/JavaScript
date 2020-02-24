// 04.05 JavasScript code
/*jslint browser:true*/
/*global console*/
/*global window*/

function addImg() {
    "use strict";
    var img = document.createElement("img");

    img.src="http://www.haaga-helia.fi/sites/all/themes/haagahelia/images/logo.png";
    
    document.getElementById("images").appendChild(img);
}