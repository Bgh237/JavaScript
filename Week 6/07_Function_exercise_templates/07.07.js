// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    // 1. Read value of name from the input field
    var name = document.getElementById("txtNname").value;
    
    // 2. Show it with "ALL CAPS" using toUpperCase()
    var upperCase = name.toUpperCase();
    document.getElementById("divUpperCase").innerHTML = "With upper case letters: " + upperCase;

    // 3. Show it with  "all small letters" using toLowerCase()
    var lowerCase = name.toLowerCase();
    document.getElementById("divLowerCase").innerHTML = "With lower case letters: " + lowerCase;

    // 4. Tell how many characters are there (length, includes also all spaces) 
    var length = name.length;
    document.getElementById("divLength").innerHTML = "Character count: " + length;

    // 5. Tell, whether the input string contains the word 'muumi'
    var contains = name.includes("muumi");
    if (contains == true) {
        document.getElementById("divContains").innerHTML = "Contains the text muumi.";
    } else {
        document.getElementById("divContains").innerHTML = "Doesn't contain the text muumi.";
    }
   

    // 6. Tell the first character using charAt()
    var first = name.charAt(0);
    document.getElementById("divFirstCharacter").innerHTML = "First character: " + first;

    // 7. Tell which ones are the first three characters using substr().
    var firstThree = name.substr(0, 3);
    document.getElementById("divManyCharacters").innerHTML = "First three characters: " + firstThree;
}