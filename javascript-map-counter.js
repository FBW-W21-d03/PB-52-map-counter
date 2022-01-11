const ersteArray = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];

let sum = 0;
ersteArray.map((betrag) => {
    sum += betrag;
});

console.log("Array zahlen \n",ersteArray,);
console.log("Summe die Array zahlen = ", sum);