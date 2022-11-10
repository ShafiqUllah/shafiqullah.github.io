"use strict";
// 1
function max(a, b) {
  if (a > b) return a;
  else return b;
}

console.log(max(5, 40));

//2
function maxOfThree(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}
console.log(maxOfThree(5, 19, 10));

//3
function isVowel(ch) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowel.find((i) => i == ch) ? true : false;
}
console.log("b is vowel - " + isVowel("ba"));

// 4
function sum(arr) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  return a;
}
console.log("sum([1, 2, 3, 4]) is " + sum([1, 2, 3, 4]));

function multiply(arr) {
  let a = 1;
  for (let i = 0; i < arr.length; i++) {
    a *= arr[i];
  }
  return a;
}
console.log("multiply([1, 2, 3, 4]) is " + multiply([1, 2, 3, 4]));

// 5
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log("Input is Hello World , output is " + reverse("Hello World"));

// 6
function findLongestWord(words) {
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) max = words[i].length;
  }
  return max;
}
console.log(
  "findLongestWord(['Hello', 'World', 'Md']) is  " +
    findLongestWord(["Hello", "World", "Md"])
);

// 7
function filterLongWords(words, i) {
  return words.filter((x) => x.length > i);
}
console.log(
  "filterLongWords(['Hello', 'World', 'So'], 3) is  " +
    filterLongWords(["Hello", "World", "So"], 3)
);

//8
function computeSumOfSquares(a) {
  return a.reduce((x, y) => x + y * y, 0);
}
console.log("8 -> " + computeSumOfSquares([1, 2, 3]));

//9
function printOddNumbersOnly(a) {
  return a.filter((x) => parseInt(x) % 2 != 0);
}

console.log("9 -> " + printOddNumbersOnly([1, 2, 3, 4, 5]));

//10
function computeSumOfSquaresOfEvensOnly(a) {
  return a.filter((x) => x % 2 == 0).reduce((a, b) => a + b * b, 0);
}
console.log("10 -> " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

//11
function sum2(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log("sum([1, 2, 3, 4]) is " + sum2([1, 2, 3, 4]));

function multiply2(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
console.log("multiply([1, 2, 3, 4]) is " + multiply2([1, 2, 3, 4]));

//12
function findSecondBiggest(a) {
  let max = a[0];
  let second = 0;
  for (var i = 0, n = a.length; i < n; ++i) {
    var nr = a[i];
    if (nr > max) {
      second = max;
      max = nr;
    } else if (nr < max && nr > second) {
      second = nr;
    }
  }
  return second;
}

console.log("12 -> " + findSecondBiggest([19, 9, 11, 0, 12]));

//13
function printFibo(n, a, b) {
  let arr = [a, b];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.join(",");
}

console.log("13 (Fibonacci sequence: )-> " + printFibo(10, 0, 1));

//15
function startTime() {
  //2019-11-4 12:16:01
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML =
    year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

const startButton = document.getElementById("start");
let timer;

startButton.addEventListener("click", function handler() {
  const initialText = "Start";
  if (
    startButton.textContent.toLowerCase().includes(initialText.toLowerCase())
  ) {
    startButton.textContent = "Stop";
     timer = setInterval(startTime, 1000);
  } else {
    startButton.textContent = initialText;
    clearInterval(timer);
  }
});
