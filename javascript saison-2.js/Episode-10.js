function estPair(nombre) {
    if (isNaN(nombre)) {
      return false; // Si la valeur n'est pas un nombre, on retourne false
    }
  
    return nombre % 2 === 0; // On utilise l'opérateur modulo (%) pour vérifier si le reste de la division par 2 est égal à 0 (nombre pair)
  }
  
  // Exemple d'utilisation
  let nombre = parseInt(prompt("Entrez un nombre : "));
  
  if (estPair(nombre)) {
    console.log(nombre, "est un nombre pair.");
  } else {
    console.log(nombre, "est un nombre impair.");
  }