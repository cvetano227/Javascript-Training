///5 razlicni if/else flows..
/// eden so switch da bide..
/// x broj deliv so y
// broj dali e paren ili neparen
// ispecati zbir, razlika, proizvod na 2 broja so promenlivi

///ALSO READ ABOUT FUNCTIONS AT
// https://www.w3schools.com/js/js_functions.asp

// const roundTo = function (n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };

// console.log(roundTo(7, 5)); // Output: 5
// console.log(roundTo(12, 5));

// let number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);

let yourName;
do {
  yourName = prompt("Vnesete go vaseto ime:");
} while (!yourName);
console.log(`Zdravo, ${yourName}!`);
