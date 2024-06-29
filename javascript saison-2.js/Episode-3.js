function afficherResumeFamille(nom, nombreEnfants) {
    let message;
  
    if (nombreEnfants === 0) {
      message = `${nom}, vous n'avez pas d'enfant.`;
    } else if (nombreEnfants === 1) {
      message = `${nom}, vous avez 1 enfant.`;
    } else {
      message = `${nom}, vous avez ${nombreEnfants} enfants.`;
    }
  
    console.log(message);
  }
  
  let nom = prompt("Entrez votre nom : ");
  let nombreEnfants = parseInt(prompt("Entrez le nombre d'enfants que vous avez : "));
  
  afficherResumeFamille(nom, nombreEnfants);