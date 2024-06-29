function verifierEmail(email) {
    // Expression régulière pour valider l'adresse e-mail
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!regexEmail.test(email)) {
      alert("Adresse e-mail invalide ! Veuillez saisir une adresse e-mail valide.");
      return false;
    }
  
    return true;
  }
  
  let adresseEmail = prompt("Entrez votre adresse e-mail : ");
  
  while (!verifierEmail(adresseEmail)) {
    adresseEmail = prompt("Adresse e-mail invalide ! Veuillez saisir une adresse e-mail valide : ");
  }
  
  alert("Votre adresse e-mail est : " + adresseEmail);