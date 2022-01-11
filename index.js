const meinNummer = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];
meinNummer.sort();
let summe = 0;

meinNummer.map((meinSumme) => {

  summe = summe + meinSumme;


});
console.log("Ergebnis ist:", summe); 


