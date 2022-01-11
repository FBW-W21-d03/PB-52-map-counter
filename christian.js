const zahlen = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];
let summe = 0; // Variable zum Speichern der (Zwischen-)Summe

function summeBilden(zahl) {
  summe += zahl;
}

zahlen.map(summeBilden);
console.log("Summe aller Zahlen:", summe);
