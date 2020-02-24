var aphorism = ["A great flame follows a little spark", "The flame that burns Twice as bright burns half as long.", "That which yields is not always weak.", "If you want a thing done well, do it yourself.", "Necessity is the mother of invention."];

var i = Math.round(Math.random() * (aphorism.length - 1));

document.getElementById("pOutput").innerHTML = aphorism[i];

