let montant = parseFloat(prompt("Entrez le montant de la facture : "));
let remise = 0;

if (montant > 40000) {
  remise = montant * 0.1;
}

let total = montant - remise;
alert("Total à payer : " + total + " F");