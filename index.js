const prompt = require("prompt-sync")();

// Question 1 (Even Odd Number {8})
function EvenOdd(n) {
  if (n / 2 === 0) return "even";
  else return "odd";
}
console.log(EvenOdd(1));
