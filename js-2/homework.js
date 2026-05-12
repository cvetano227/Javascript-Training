function ctof(c) {
  return (c * 9) / 5 + 32;
}
console.log(ctof(30));

function ftoc(f) {
  return ((f - 32) * 5) / 9;
}
console.log(ftoc(80));

function stepsToMeters(s) {
  return s * 0.762;
}
console.log(stepsToMeters(100));

let book = {
  author: "Marijn Haverbeke",
  genre: "Computer Programming",
  published: "2011",
};
let car = {
  model: "BMW",
  series: "3-series 2.0 Diesel",
  year: "2020",
};
let student = {
  name: "Valentin",
  age: "24",
  grade: "A",
};

for (let number = 0; number < 100; number++)
  if (number % 2 == 0) console.log(number);

for (let number = 0; number < 50; number++)
  if (number % 2 !== 0) console.log(number);

let city = ["Skopje", "Prilep", "Bitola", "Kicevo", "Stip"];
let country = [
  "Makedonija",
  "Srbija",
  "Germanija",
  "Shvajcarija",
  "Slovenija",
  "Avstrija",
  "Shpanija",
  "Portugalija",
  "Albanija",
  "Shvedska",
];

for (let i = 0; i < city.length; i++);
{
  console.log(city);
}
for (let key in car) {
  console.log(key + ": " + car[key]);
}
