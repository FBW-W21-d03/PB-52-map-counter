const summeNummber =[80, 12, 57, 403, 3, 17, 88, 102, 31, 0, 1, 90, 250, 83];
summeNummber.sort(); 

let gathering = 0;
function gather(plus){
    gathering = gathering+plus;
};
summeNummber.map(gather);
console.log("Numbers:", summeNummber);
console.log("The gathering all numbers are:",gathering);