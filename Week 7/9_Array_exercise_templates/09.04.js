// 09.04 JavasScript code

// Create an array with minigolf results of eight players 
// (23, 19, 37, 20, 21, 30, 26, 24)
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];



// Sort the array
minigolf.sort();


// Assign the smallest result to a variable
var smallest = minigolf[0];

for (i = 1; i < minigolf.length; i++) {
    if (minigolf[i] < smallest){
        smallest = minigolf[i];
    }
}



// Assign the biggest result to a variable
var biggest = minigolf[0];

for (i = 1; i < minigolf.length; i++) {
    if (minigolf[i] > biggest){
        biggest = minigolf[i];
    }
}

document.getElementById("pOutput").innerHTML = "The smallest result is " + smallest + " (winner)." + "<br>" + "The biggest result is " + biggest + ".";



// Write the answer on the page



