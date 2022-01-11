console.log("javascript-map-counter");


const numb = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];
console.log("\n" + numb);

let counter = 0;

numb.map(number => {
   counter += number;
});

console.log("\n" + "Die Summe aller Zahlen des Arrays beträgt:" , counter);