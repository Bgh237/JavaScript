// 08.04 JavasScript code
var pips1;
var pips2;
var i;

pips1 = Math.round((Math.random() * 5) + 1);
pips2 = Math.round((Math.random() * 5) + 1);
i = 0;

while (pips1 !== pips2) {
    i = i + 1;
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1);
}

document.write("Same dice pips: " + pips1 + " and " + pips2 + "<br>");
document.write("There were " + i + " randomisation rounds until we got the same pips.");



// Randomize the pips1 and pips2 once
// Set the count to be one (now you have randomized once)

// Repeat as long as (pips are not equal) 
    // Randomize again
    // Increment counter by one

// Write the answer (including the count) to the html page with the document.write() method


