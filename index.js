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
// function LeapYear(year) {
//   if (year % 4 === 0 && (year % 400 === 0 || year % 100 != 0))
//     return "Leap Year";
//   else return "Not a Leap Year";
// }
// console.log(LeapYear(2044));

// Question 4 (Armstrong Number {153,1634})
// function Armstrong(n) {
//   let copy = n;
//   let temp = n;
//   let count = 0;
//   let sum = 0;
//   while (n != 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   while (copy != 0) {
//     let lastDigit = copy % 10;
//     sum += Math.pow(lastDigit, count);
//     copy = Math.floor(copy / 10);
//   }
//   return sum === temp ? "Armstrong Number" : "Not a Armstrong Number";
// }
// console.log(Armstrong(1634));

// Question 5 (Fibonacci Series {0,1,1,2,3,5,8,13,21,34})
// function fib(n) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }
// fib(10);

// Question 6 (Palindrome Number/String)
// function PalindromeNumber(n) {
//   let rev = 0;
//   let temp = n;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     rev = rev * 10 + lastDigit;
//     n = Math.floor(n / 10);
//   }
//   return rev === temp ? "Palindrome" : "Not a Palindrome";
// }
// console.log(PalindromeNumber(1221));

// function PalindromeString(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return "Not a Palindrome";
//     left++;
//     right--;
//   }
//   return "Palindrome";
// }
// console.log(PalindromeString("level"));

// function Palindrome(str) {
//   let isPalindrome = true;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//   }
// }
// console.log(PalindromeString("level"));

// Question 7 (Star Pyramid Pattern)
// function Pyramid(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       process.stdout.write(" ");
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// Pyramid(5);

//Patterns
// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k < i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = i; k < n; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i <= n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k < 2 * i-1; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = n; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k < 2 * i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 8 (Factorial Number {5!=120})
// function Factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(Factorial(5));

// Question 9 (Sum Of Digit)
// function SumOfDigit(n) {
//   let sum = 0;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     sum += lastDigit;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// console.log(SumOfDigit(1234));

// Question 10 (GCD (2))
// let a = 10;
// let b = 12;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(a);

// Question 11 (LCM (60))
let a = 10;
let b = 12;
let tempA = a;
let tempB = b;
while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
let LCM = (tempA * tempB) / a;
console.log(LCM);
