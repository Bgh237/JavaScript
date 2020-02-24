function addBloodType () {
    var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
    

    var length = bloodTypes.length;
    var ans = document.getElementById("txtBloodType").value;
    var total = 0

    for (var i = 0; i < bloodTypes.length; i++) {
        console.log(bloodTypes[i]);
       if (bloodTypes[i] == ans) {
            total = total + 1;
        } 
    }
    var percentage = (total / length) * 100;

    document.getElementById("pOutput").innerHTML = "There percentage of people with " + ans + " is " + percentage + "%.";
}