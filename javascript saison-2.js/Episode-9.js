function afficherTableMultiplication(nombre) {
    if (isNaN(nombre)) {
      alert("Le nombre doit être un nombre valide.");
      return;
    }
  
    console.log("Table de multiplication de", nombre + " :");
  
    for (let i = 1; i <= 10; i++) {
      console.log(nombre + " x " + i + " = " + (nombre * i));
    }
  }
  
  let nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication : "));
  
  afficherTableMultiplication(nombre);