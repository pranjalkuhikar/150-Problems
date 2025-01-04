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
// let a = 10;
// let b = 12;
// let tempA = a;
// let tempB = b;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// let LCM = (tempA * tempB) / a;
// console.log(LCM);

// Question 12 (Count Vowels and Consonants)
// let str = "Hello How Are You?";
// let Vowel = 0;
// let Consonants = 0;
// str = str.toLowerCase();
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//   ) {
//     Vowel++;
//   } else {
//     Consonants++;
//   }
// }
// console.log("Vowel", Vowel, "And Consonants ", Consonants);

// Question 13 (Reversing a String)
// let str = "Hello";
// let temp = "";
// for (let i = 0; i < str.length; i++) {
//   temp += str[str.length - 1 - i];
// }
// console.log(temp);

// Question 14 (Finding Largest and Smallest Number in an Array)
// let arr = [4, 6, 3, 45, 54, 3, 24, 3];
// let max = -Infinity;
// let min = Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("Largest Number is ", max);
// console.log("Smallest Number is ", min);

// Question 15 (Sorting an Array)
// let arr = [4, 6, 3, 45, 54, 3, 24, 3];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// Question 16 (Finding the sum of Element of an Array)
// let arr = [4, 6, 3, 45, 54, 3, 24, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Question 17 (Checking Armstrong Number In a Range)
// function armstrongNumber(num) {
//   let n = num;
//   let temp = num;
//   let sum = 0;
//   let count = 0;
//   while (n != 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   if (count == 1) return false;
//   while (num != 0) {
//     let lastDigit = num % 10;
//     sum += Math.pow(lastDigit, count);
//     num = Math.floor(num / 10);
//   }
//   if (sum === temp) {
//     return sum;
//   }
// }

// let start = 1;
// let end = 500;
// let arr = [];
// for (let i = start; i <= end; i++) {
//   if (armstrongNumber(i)) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// Question 18 (Generating Multiplication Tables)
// let n = 4;
// for (let i = 1; i <= 10; i++) {
//   console.log(`4 x ${i} = ${n * i}`);
// }

// Question 19 (Finding Prime Numbers in a Range)
// function checkingPrime(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   if (count === 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let start = 10;
// let end = 30;
// let arr = [];
// for (let i = start; i <= end; i++) {
//   if (checkingPrime(i)) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// Question 20 (Checking for Perfect Numbers)
// let n = 28;
// let temp = n;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum === temp ? "Perfect Number" : "Not a Perfect Number");

// Question 21 (Calculating the Sum of Even Numbers in a Range)
// function EvenNumber(n) {
//   if (n % 2 === 0) {
//     return n;
//   }
// }
// let start = 1;
// let end = 10;
// let sum = 0;
// for (let i = start; i <= end; i++) {
//   if (EvenNumber(i)) {
//     sum += i;
//   }
// }
// console.log(sum);

// Question 22 (Calculating the Sum of Odd Numbers in a Range)
// function OddNumber(n) {
//   if (n % 2 !== 0) {
//     return n;
//   }
// }
// let start = 1;
// let end = 10;
// let sum = 0;
// for (let i = start; i <= end; i++) {
//   if (OddNumber(i)) {
//     sum += i;
//   }
// }
// console.log(sum);

// Question 23 (Finding the Fibonacci Number at a Specific Position)
// let n = Number(prompt("Enter the Number :- "));
// let a = 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
//   let temp = b;
//   b = a + b;
//   a = temp;
// }
// console.log(a);

// Question 24 (Printing Prime Numbers Less Than a Given Number)
// function PrimeNumber(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let n = 20;
// let arr = [];
// for (let i = 2; i < n; i++) {
//   if (PrimeNumber(i)) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// Question 25 (Finding the Number of Digits in a Number)
// let n = 12345;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

// Question 26 (Checking if a Number is a Narcissistic Number)
// let num = 153;
// let n = num;
// let temp = num;
// let sum = 0;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// if (count == 1) return false;
// while (num != 0) {
//   let lastDigit = num % 10;
//   sum += Math.pow(lastDigit, count);
//   num = Math.floor(num / 10);
// }
// if (sum === temp) {
//   console.log("Narcissistic Number");
// } else {
//   console.log("Not Narcissistic Number");
// }

// Question 27 (Generating a Pattern of Numbers)
// let n = 3;
// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count} `);
//     count++;
//   }
//   console.log();
// }

// Question 28 (Finding the Sum of the Digits of the Factorial of a Number)
// let n = 4;
// let fact = 1;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// while (fact != 0) {
//   let lastDigit = fact % 10;
//   sum += lastDigit;
//   fact = Math.floor(fact / 10);
// }
// console.log(sum);

// Question 29 (Finding the Largest Palindrome in a String)
// let str = "babad";

// Question 30 (Finding Missing Numbers in a Sequence)
// let arr = [1, 2, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let maxNum = Math.max(...arr);
// let actualSum = Math.floor((maxNum * (maxNum + 1)) / 2);
// let missingNumber = actualSum - sum;
// console.log(missingNumber);

// Question 31 (Generating a Pascal’s Triangle)
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let current = 1;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(current + " ");
//     current = (current * (i - j)) / (j + 1);
//   }
//   console.log();
// }

// Question 32 (Finding the Median of an Array) (4)
// let arr = [3, 1, 2, 4, 5];
// arr.sort((a, b) => a - b);
// console.log(arr);
// if (arr.length % 2 != 0) {
//   console.log(arr[Math.floor(arr.length / 2)]);
// } else {
//   let mid1 = arr[arr.length / 2 - 1];
//   let mid2 = arr[arr.length / 2];
//   console.log((mid1 + mid2) / 2);
// }

// Question 33 (Calculating the Power of a Number)
// let base = 2;
// let exponent = 3;
// let n = 1;
// for (let i = 0; i < exponent; i++) {
//   n *= base;
// }
// console.log(n);

// Question 34 (Checking for an Anagram)
// let s1 = "listen";
// let s2 = "silent";
// s1 = s1.split("").sort().join("");
// s2 = s2.split("").sort().join("");
// console.log(s1 === s1);

// Question 35 (Finding the Sum of Prime Numbers in a Range)
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
//   return count === 2;
// }

// let start = 1;
// let end = 10;
// let sum = 0;
// for (let i = start; i <= end; i++) {
//   if (PrimeNumber(i)) {
//     sum += i;
//   }
// }
// console.log(sum);

// Question 36 (Finding the N-th Triangular Number)
// let n = 4;
// Method 1
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);
// Method 2
// let sum = (n * (n + 1)) / 2;
// console.log(sum);

// Question 37 (Checking for Perfect Squares)
// let n = 25;
// let isPerfectSquare = false;
// for (let i = 0; i <= n; i++) {
//   if (i * i === n) {
//     isPerfectSquare = true;
//     break;
//   }
// }
// console.log(isPerfectSquare);

// Question 38 (Finding the Sum of Squares of Digit)
// let n = 123;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit * lastDigit;
//   //   sum += Math.pow(lastDigit, 2);
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// Question 39 (Generating a Square Matrix of a Given Size)
// let size = Number(prompt("Enter the row Size "));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(size);
// }
// let count = 1;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = count++;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Question 40 (Calculating the Sum of Digits of a Number Until Single Digit)
function SumOfDigit(n) {
  let sum = 0;
  while (n != 0) {
    let lastDigit = n % 10;
    sum += lastDigit;
    n = Math.floor(n / 10);
  }
  return sum;
}

let n = 9875;
while (n >= 10) {
  n = SumOfDigit(n);
}
console.log(n);
