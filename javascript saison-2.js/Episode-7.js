function calculerMoyenneMath(notes) {
    let sommeNotes = 0;
  
    for (let note of notes) {
      if (note < 0 || note > 20) {
        alert("Note invalide ! Les notes doivent être comprises entre 0 et 20.");
        return null; // Annuler le calcul de la moyenne
      }
  
      sommeNotes += note;
    }
  
    const moyenne = sommeNotes / notes.length;
    return moyenne;
  }
  
  function afficherResultatExamen(notes) {
    const moyenne = calculerMoyenneMath(notes);
  
    if (moyenne === null) {
      return; // Arrêter l'exécution si une note invalide a été détectée
    }
  
    if (moyenne >= 10) {
      console.log("Félicitations ! Vous avez réussi l'examen avec une moyenne de", moyenne);
    } else {
      console.log("Dommage, vous avez échoué à l'examen avec une moyenne de", moyenne);
    }
  }
  
  let nombreNotes = parseInt(prompt("Entrez le nombre de notes en Mathématiques : "));
  let notes = [];
  
  for (let i = 0; i < nombreNotes; i++) {
    notes.push(parseFloat(prompt(`Entrez la note ${i + 1} : `)));
  }
  
  afficherResultatExamen(notes);