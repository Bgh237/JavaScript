// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function showMonth() {
    var wordArray = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", 
                     "kuusi", "seitsemän", "kahdeksan", "yhdeksän"];
    wordArray[0] = "January";
    wordArray[1] = "February";
    wordArray[2] = "March";
    wordArray[3] = "April";
    wordArray[4] = "May";
    wordArray[5] = "June";
    wordArray[6] = "July";
    wordArray[7] = "August";
    wordArray[8] = "September";
    wordArray[9] = "October";
    wordArray.push("November");
    wordArray.push("December");
    
    var digitText = document.getElementById("txtDigit").value;
    var i = Number(digitText);
    var digit = i - 1;
    
    if (digit >= 0 && digit <= 11) {
        outputText = wordArray[digit];
    } else {
        outputText = "Please enter a valid digit (1-12)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}

// End