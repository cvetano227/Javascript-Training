console.log("Hello, World!");

//promenlivi ili variables
//let name

// deklariranje i inicijaliziranje na promenliva
let name = "Valentin";

console.log(name);

firstName = "Petko";
console.log(firstName);

//Basic data types in JavaScript

//string (text)
let ime = "Valentin"; //string
let text = "Hello, how are you?";

// number (123, 3.14, -5)
let num = 78;

const pi = 3.14159;

// TypeError: Assignment to constant variable.
// pi = 54123.12;
console.log(pi); //
//boolean (true or false)
let vrneSneg = false; //boolean

let test;
console.log(test); //undefined

test = "testirame promenlivi";
console.log(test); //testirame promenlivi
//Dynamically typed language (javascript, python, ruby)
//Statically typed language (java, c#, c++, rust, go)
//var

let studentName = "John";
let studentAge = 22;
let studentAverage = 8.67;

//konkateniranje na stringovi
console.log(
  "Studentot " +
    studentName +
    " ima " +
    studentAge +
    " godini. " +
    "Ima prosek: " +
    studentAverage +
    ".",
);
//interpolacija na stringovi (mora da bide so backticks ``, ne so navodnici '' odnosno FN + backtick (konzola))
console.log(
  `Studentot ${studentName} ima ${studentAge} godini. Ima prosek: ${studentAverage}.`,
);

let a = 5;
let b = 12;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//modulo operator, go dava ostatokot pri delenje
console.log(a % b);
console.log(b % a);

let x = 81297;

console.log(x % 2);

let age = 18;

// Uslovi - conditionals
if (age >= 18) {
  console.log(`Korisnikot ima ${age} godini. Uslovot e zadovolen.`);
} else {
  console.log(`Bidejki korisnikot ima ${age} godini. Uslovot NE e zadovolen.`);
}

x = 5;
let y = 3;

//Comparison operators
// >
// >=
// <
// <=
// ==

console.log("Ostatok pri delenje e: " + (x % 2));

if (x % y == 0) {
  console.log(`${x} e deliv so ${y}.`);
} else {
  console.log(`${x} NE e deliv so ${y}.`);
}

let vozrast = 61;
let pol = "zensko";

if (vozrast >= 64 && pol == "masko") {
  console.log(
    `Licnosta moze da zema penzija , ima ${vozrast} godini, pol: ${pol}.`,
  );
} else if (vozrast >= 62 && pol == "zensko") {
  console.log(
    `Licnosta moze da zema penzija , ima ${vozrast} godini, pol: ${pol}.`,
  );
} else {
  console.log(
    `Uslovite za penzija ne se ispolneti, licnosta ima ${vozrast} godini.`,
  );
}
//64
//62

let prosek = 8.2;
let popolnetiMesta = 120;

if (prosek > 8 || popolnetiMesta < 100) {
  console.log(`Studentot moze da zema stipendija`);
} else {
  console.log(`Studentot NE moze da zema stipendija`);
}

//FizzBuzz

//Dokolku e deliv so 3 printaj Fizz
//Dokolku e deliv so 5 printaj Buzz
//Dokolku e deliv so 3 i 5 printaj FizzBuzz

let broj = 13;
if (broj % 3 == 0 && broj % 5 == 0) {
  console.log("FizzBuzz");
} else if (broj % 3 == 0) {
  console.log("Fizz");
} else if (broj % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(`Vnesovte broj: ${broj}, ne e deliv so 3 i 5`);
}

// Sekoj uslov se izvrsuva posebno, bez obzira na prethodniot uslov
if (broj % 3 == 0 && broj % 5 == 0) {
  console.log("FizzBuzz");
}
if (broj % 3 == 0) {
  console.log("Fizz");
}
if (broj % 5 == 0) {
  console.log("Buzz");
}

//Switch statement

const day = new Date().getDay();
console.log(day); //0-6, 0 e nedela, 1 e ponedelnik, 2 e vtorik, 3 e sreda, 4 e cetvrtok, 5 e petok, 6 e sabota

switch (day) {
  case 0:
    console.log("Nedela");
    break;
  case 1:
    console.log("Ponedelnik");
    break;
  case 2:
    console.log("Vtorik");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petok");
    break;
  case 6:
    console.log("Subota");
    break;
  default:
    console.log(`Vnesovte nevaliden den ${day}`);
    break;
}
