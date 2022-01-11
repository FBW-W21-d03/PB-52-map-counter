// # javascript-map-counter

// Es soll die Summe aller Zahlen eines Arrays berechnet werden.
const zahlen = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];
// ## Aufgabenstellung
// Finde nun selbst eine Strategie, wie du mit map() und einer Funktion die Summe folgender Zahlen in einem Array berechnen kannst:
// 80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83

let counter = 0;

zahlen.map(zahlen => {
   counter += zahlen;
});

console.log(counter);
