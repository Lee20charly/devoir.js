function verifierMotDePasse(motDePasse) {
    // Conditions pour un mot de passe valide
    const minimumLength = 8;
    const hasUppercase = /[A-Z]/.test(motDePasse);
    const hasNumber = /\d/.test(motDePasse);
  
    if (motDePasse.length < minimumLength) {
      alert("Le mot de passe doit contenir au moins 8 caractères.");
      return false;
    }
  
    if (!hasUppercase) {
      alert("Le mot de passe doit contenir au moins une majuscule.");
      return false;
    }
  
    if (!hasNumber) {
      alert("Le mot de passe doit contenir au moins un chiffre.");
      return false;
    }
  
    return true;
  }
  
  let motDePasse = prompt("Entrez un mot de passe : ");
  
  while (!verifierMotDePasse(motDePasse)) {
    motDePasse = prompt("Le mot de passe n'est pas conforme. Veuillez saisir un nouveau mot de passe : ");
  }
  
  alert("Votre mot de passe est valide.");