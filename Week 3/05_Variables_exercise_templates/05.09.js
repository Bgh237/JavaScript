// 05.09 JavasScript code 
  
function calculateRent() {
    var cottageRent;
    var participantsNumber;

    cottageRent = Number(document.getElementById("rent").value);
    participantsNumber = Number(document.getElementById("participants").value);

    var rentPerPerson = cottageRent / participantsNumber

    document.getElementById("divAnswer").innerHTML = "Rent per participants is " + rentPerPerson.toFixed(2) + " euros."
  

    
}
