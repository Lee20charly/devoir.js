function creerFicheRenseignement(nom, prenom, sexe) {
    let fiche = {
      nom: nom,
      prenom: prenom,
      sexe: sexe,
      titre: sexe === "H" ? "M." : "Mme"
    };
  
    console.log(fiche);
  }
  
  let nom = prompt("Entrez votre nom : ");
  let prenom = prompt("Entrez votre prénom : ");
  let sexe = prompt("Entrez votre sexe (H/F) : ");