const prompt = require("prompt-sync")();

// Question 1 (Even Odd Number {8})
// function EvenOdd(n) {
//   if (n / 2 === 0) return "even";
//   else return "odd";
// }
// console.log(EvenOdd(1));

// Question 2 (Prime Number {7})
// function PrimeNumber(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2 ? "Prime Number" : "Not a Prime Number";
// }
// console.log(PrimeNumber(1));

// Question 3 (Leap Year {2014})
function LeapYear(year) {
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 != 0))
    return "Leap Year";
  else return "Not a Leap Year";
}
console.log(LeapYear(2044));
