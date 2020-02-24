// 05_variables_warmup_1 JavasScript code

function showEmail() {
    var givenName;
    var givenSurname;

    givenName = document.getElementById("txtGivenName").value;
    givenSurname = document.getElementById("txtSurname").value;

    document.getElementById("pOutput").innerHTML = givenName +"." + givenSurname + "@myy.haaga-helia.fi"
  
}
