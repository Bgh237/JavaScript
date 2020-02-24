// 07.10 JavasScript code

// Complete the code of the function calculate.
function calculate() {
		
    // Calculate length of the work as minutes.
    var startTime = document.getElementById("txtStartTime").value;
    var endTime = document.getElementById("txtEndTime").value;
    var date = document.getElementById("txtDate").value;
    
    var a = startTime.split(':')[0];
    var startHour = parseInt(a);
    var b = startTime.split(':')[1];
    var startMin = parseInt(b);
    var c = endTime.split(':')[0]; 
    var endHour =  parseInt(c);
    var d = endTime.split(':')[1]; 
    var endMin =  parseInt(d);
    var i = (endHour * 60) + endMin;
    var j = (startHour * 60) + startMin;
    

    var workTime = i - j;
    var weekdayPrice = 48;
    var sundayPrice = 72;
    var outputText;
    var sundayCost = workTime * (72/60);
    var weekdayCost = workTime * (48/60);

    if (isSunday(date) == false) {
        
        outputText = "The hourly price during the weekdays is €" + weekdayPrice.toFixed(2) + "<br>" + "The price of this repair work is €" + weekdayCost.toFixed(2);
    } else {
        
        outputText = "The hourly price on Sundays is €" + sundayPrice.toFixed(2) + "<br>" + "The price of this repair work is €" + sundayCost.toFixed(2);
    }

    document.getElementById("divOutput").innerHTML = "Length of the work was " + workTime + " minutes." + "<br>" + outputText;
    

    // If it is not Sunday, then
    //     Call isSunday() function from 07.10_functions.js file
    //     Calculate and show price of the repair work during the workdays,
    // otherwise			
    //     Calculate and show price of the repair work on Sundays
		
    


}

// Complete the code of the function modifyTitle.
function modifyTitle() {
    var title = document.getElementById("txtTitle");
    allCapsTitleTrimmed(title);	
    // Read value of title from the input field



    // Call allCapsTitleTrimmed() function from 07.10_functions.js file
		
		
}