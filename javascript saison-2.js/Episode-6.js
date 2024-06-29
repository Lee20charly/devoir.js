const joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function afficherJourSemaine(numeroJour) {
  if (numeroJour < 1 || numeroJour > joursSemaine.length) {
    alert("Numéro de jour invalide ! Veuillez saisir un nombre entre 1 et 7.");
    return;
  }

  const jour = joursSemaine[numeroJour - 1];
  console.log("Le jour correspondant au numéro", numeroJour, "est :", jour);
}

let numeroJour = parseInt(prompt("Entrez le numéro du jour (entre 1 et 7) : "));

afficherJourSemaine(numeroJour);