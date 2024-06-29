let nombre1 = Math.floor(Math.random() * 10) + 1; // Génération d'un nombre aléatoire entre 1 et 10
let nombre2 = Math.floor(Math.random() * 10) + 1; // Génération d'un nombre aléatoire entre 1 et 10

let operation = "+" // Opération à deviner (addition)

let reponse = parseInt(prompt(`Combien font ${nombre1} ${operation} ${nombre2} ?`));

while (reponse !== nombre1 + nombre2) {
  reponse = parseInt(prompt(`Mauvaise réponse ! Combien font ${nombre1} ${operation} ${nombre2} ?`));
}

alert("Bravo ! Vous avez trouvé la bonne réponse.");