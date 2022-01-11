const numbers = [80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];


let sum = 0;

numbers.map((number) => {
     sum += number;
});

console.log("Sum is",`${sum}`);
