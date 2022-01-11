// 1 )
const zahlen = [

    80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83

];

let total = 0;

zahlen.map(function (namber) {
    total += namber;
});

console.log("Die Summe aller Zahlen ist :", total);