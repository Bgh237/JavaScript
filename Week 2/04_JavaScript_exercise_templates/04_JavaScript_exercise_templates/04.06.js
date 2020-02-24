// 04.06 JavasScript code
/*jslint browser:true*/
/*global console*/
/*global window*/

// This is a variable that will hold a reference to the earth map
var earth;

// This function creates and shows the earth map
function initializeEarthMap() {
    "use strict";
    var options = {atmosphere: true, center: [0, 0], zoom: 0};

    earth = new WE.map("divEarth", options);

    WE.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {attribution: "© OpenStreetMap contributors"}).addTo(earth);
}

// DO NOT MODIFY THE CODE ABOVE!
//
// Add your own code to the two functions below
//

function goHome() {
    // TODO: Set the map center to the latitude / longitude position of your own home.
    "use strict";
    earth.setView([51.481583, -3.179090]);
    earth.setZoom(13); 

    // TODO: Zoom the map close enough.
    
}

function showCoords() {
    // TODO: Show the current coordinates (latitude / longitude position) 
    //       of the map center in an alert dialog box.
    "use strict";
    alert(earth.getCenter());
}

// The web browser executes the code below when the HTML page is loaded or refreshed. 
// The code below invokes the initializeEarthMap function. 
initializeEarthMap();
