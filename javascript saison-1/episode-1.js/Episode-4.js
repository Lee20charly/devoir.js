let variable1 = prompt("Entrez la valeur de la première variable : ");
let variable2 = prompt("Entrez la valeur de la deuxième variable : ");

// Permutation des valeurs
let temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log("Valeur de la première variable après permutation : ", variable1);
console.log("Valeur de la deuxième variable après permutation : ", variable2);