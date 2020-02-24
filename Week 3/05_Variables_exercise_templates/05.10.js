// 05.10 JavasScript code

function calculateCosts() {
  var kilometers;
  var fuelConsumption;
  var fuelPrice;
  var participants;

  kilometers = Number(document.getElementById("kilometers").value);
  fuelConsumption = Number(document.getElementById("consumption").value);
  fuelPrice =  Number(document.getElementById("price").value);
  participants = Number(document.getElementById("participants").value);

  var fuelCostPerPerson = fuelConsumption / 100.0 * fuelPrice * kilometers / participants
    
  document.getElementById("divAnswer").innerHTML = "Fuel costs per participant is " + fuelCostPerPerson.toFixed(2) + " euros."
    
    
}
