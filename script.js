let p = document.getElementById("p");
let div = document.getElementById("div");

// bouton 1  :  modifier texte
document.getElementById("b1").onclick = function() {
    p.textContent = "Le texte a été modifié";
};

// bouton 2  : changer style
document.getElementById("b2").onclick = function() {
    p.style.backgroundColor = "lightblue";
    p.style.textAlign = "center";
};

// click sur div
div.onclick = function() {
    p.textContent = "Un clic a été détecté";
};   
