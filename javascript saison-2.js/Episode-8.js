function proclamerMeilleurEleve(eleves) {
    let meilleurEleve = null;
  
    for (let eleve of eleves) {
      if (meilleurEleve === null || eleve.moyenne > meilleurEleve.moyenne) {
        meilleurEleve = eleve;
      }
    }
  
    if (meilleurEleve !== null) {
      console.log("Le premier de la classe est", meilleurEleve.nom, "avec une moyenne de", meilleurEleve.moyenne);
    } else {
      console.log("Aucun élève n'a été saisi.");
    }
  }
  
  let nombreEleves = parseInt(prompt("Entrez le nombre d'élèves : "));
  let eleves = [];
  
  for (let i = 0; i < nombreEleves; i++) {
    let nom = prompt("Entrez le nom de l'élève " + (i + 1) + " : ");
    let moyenne = parseFloat(prompt("Entrez la moyenne de " + nom + " : "));
  
    eleves.push({ nom: nom, moyenne: moyenne });
  }
  
  proclamerMeilleurEleve(eleves);