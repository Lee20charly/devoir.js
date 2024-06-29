let moyenne = parseFloat(prompt("Entrez la moyenne de l'élève : "));

if (moyenne < 5) {
  alert("Mention : Passable");
} else if (moyenne < 10) {
  alert("Mention : Assez-Bien");
} else if (moyenne < 14) {
  alert("Mention : Bien");
} else if (moyenne < 16) {
  alert("Mention : Très Bien");
} else {
  alert("Mention : Excellent");
}