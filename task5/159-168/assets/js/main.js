let dateOne = new Date();
let birthDate = new Date("Jan 25 1991");
let dateDiff = dateOne - birthDate;

console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`);

console.log("=".repeat(55));


let dateTwo = new Date();
dateTwo.setTime(0);
dateTwo.setFullYear(1980);
dateTwo.setHours(0);
dateTwo.setSeconds(1);

console.log(dateTwo);

console.log("=".repeat(55));

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateThree = new Date();

dateThree.setDate(0);

console.log(dateThree);
console.log(`"Previous Month Is ${months[dateThree.getMonth()]} And Last Day Is ${dateThree.getDate()}"`);

console.log("=".repeat(55));


let birthOne = new Date("1991 01 28");
console.log(birthOne);
let birthTwo = new Date("01/28/1991");
console.log(birthTwo);
let birthThree = new Date("01-28-1991");
console.log(birthThree);

console.log("=".repeat(55));



function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

console.log("=".repeat(55));
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60