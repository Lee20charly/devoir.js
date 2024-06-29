let nom = prompt("Entrez votre nom : ");
let sexe = prompt("Entrez votre sexe (H/F) : ");

if (sexe.toUpperCase() === "H") {
  alert("Bonjour monsieur " + nom + "!");
} else if (sexe.toUpperCase() === "F") {
  alert("Bonjour madame " + nom + "!");
} else {
  alert("Sexe non reconnu.");
}