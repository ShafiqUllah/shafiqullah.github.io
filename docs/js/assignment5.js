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
console.log(maxOfThree(5,19,10));

//3
function isVowel(character){    
    const vowel = ["a","e","i","o","u","A","E","I","O","U"];   
    return vowel.find(i=>i==character) ? true : false; 
}
console.log("b is vowel - " +  isVowel('b'));

// 4 
function sum(arr){
    return arr.reduce((sum,i)=>sum+i,0);
}
console.log("sum([1, 2, 3, 4]) is " + sum([1, 2, 3, 4]) );

function multiply(arr){
    return arr.reduce((multiply,i)=>multiply*i,1);
}
console.log("multiply([1, 2, 3, 4]) is " +  multiply([1, 2, 3, 4]));

// 5 
function reverse(str){    
     return str.split("").reverse().join("");
}
console.log("Input is Hello World , output is " + reverse('Hello World'));

// 6 
function findLongestWord(words){
    let max=0;
    for(let i=0; i<words.length; i++){
        if(words[i].length>max) 
            max = words[i].length;
    }
    return max;
}
console.log("findLongestWord(['Hello', 'World', 'Md']) is  " + findLongestWord(['Hello', 'World', 'Md']) );

// 7 
function filterLongWords(words,i){   
    return words.filter(x=>x.length>i);    
}
console.log("filterLongWords(['Hello', 'World', 'Md'], 2) is  " +  filterLongWords(['Hello', 'World', 'Md'], 2) );

//8
function computeSumOfSquares(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) + parseInt(elem*elem);},0); 
    return f;
}
console.log("8 -> "+ computeSumOfSquares([1,2,3]));

//9
function printOddNumbersOnly(a){
    const c = a.filter(function(elem, i, array){
        return elem % 2 !== 0;});
        console.log(c);
    return c;
}

console.log("9 -> ");
printOddNumbersOnly([1,2,3,4,5]);

//10
function computeSumOfSquaresOfEvensOnly(a){
    const c = a.filter(function(elem, i, array){
        return parseInt(elem) % 2 == 0;})
        .reduce(function(prevVal, elem2, j, array){
        return parseInt(prevVal) + parseInt(elem2)*parseInt(elem2);},0)
    return c;
}
console.log("10 -> "+ computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

//11
function sum2(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) + parseInt(elem);}); 
    return f;
}
function multiply2(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) * parseInt(elem);}); 
    return f;
}

//12
function findSecondBiggest(a){
    let max = a[0];
    let second = 0;    
    for (var i = 0, n = a.length; i < n; ++i) {
        var nr = +a[i]; // convert to number first    
        if (nr > max) {
            second = max; // save previous biggest value
            max = nr;
        } else if (nr < max && nr > second) {
            second = nr; // new second biggest value
        }
    }
    return second;
}

console.log("12 -> "+ findSecondBiggest([19,9,11,0,12]))

//13
function printFibo(n,a,b){
    let arr = [a, b];    
    if(n==1) return arr = [a];
    
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 2] +  arr[i -1]);        
    }
    console.log("Fibonacci sequence: ");
    console.log(arr);
    return arr.join(',');
}

console.log("13 -> "+ printFibo(10,0,1))