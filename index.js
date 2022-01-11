const zahlen = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];


let help = 0;

zahlen.map(
    (zahl) => {
  help += zahl;
});

console.log(help);