function verifierDateNaissance(dateNaissance) {
    // Expression régulière pour valider la date de naissance au format JJ/MM/AAAA
    const regexDateNaissance = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!regexDateNaissance.test(dateNaissance)) {
      alert("Format de date de naissance invalide ! Veuillez saisir une date au format JJ/MM/AAAA.");
      return false;
    }
  
    return true;
  }
  
  let dateNaissance = prompt("Entrez votre date de naissance (JJ/MM/AAAA) : ");
  
  while (!verifierDateNaissance(dateNaissance)) {
    dateNaissance = prompt("Format de date de naissance invalide ! Veuillez saisir une date au format JJ/MM/AAAA : ");
  }
  
  console.log("Votre date de naissance est : " + dateNaissance);