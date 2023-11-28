// let obj = {
//     fullName: function () {
//         console.log('hi ' + this.firstName);
//     }
// }
// let obj1 = {
//     firstName: 'jaydeep',
// }
// let obj2 = {
//     firstName: 'ankur',
// }
// obj.fullName.call(obj2)

/*Array methods*/

// let arr = [1, 2, 3, 4];
// let arr1 = [5, 6, 7, 8];
// let arr2 = [[1, 2], [3, 4, 5], 6];
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// MAP
// const newArr = arr.map((a)=> {
//     return a+2;
// });
// console.log(newArr);

//FILTER
// const newArr = arr.filter((a)=> {
//     return a>=2;
// });
// console.log(newArr);

//REDUCE
// const newArr = arr.reduce((res, a)=> {
//     return res+a;
// }, 0);
// console.log(newArr);

//ARRAY UNIQUE
// var unique = [];
// for(var i=0; i<arr.length; i++){

//     if(!unique.includes(arr[i])){
//         unique.push(arr[i]);
//     }
// }
// console.log(unique);

//ARRAY SORT ASC
// const newArr = arr.sort((a,b) => {
//     return (a-b);
// });
// console.log(newArr);

//ARRAY SORT DESC
// const newArr = arr.sort((a,b) => {
//     return (b-a);
// });
// console.log(newArr);

//ARRAY MAX
// const max = Math.max.apply(null,arr)

//ARRAY MIN
// const min = Math.min.apply(null,arr)
// console.log(min);

//ARRAY SORT ASC
// const newArr = arr.sort();
// console.log(newArr);

//ARRAY REVERSE
// const newArr = arr.reverse();
// console.log(newArr);

//ARRAY SPLICE
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// ARRAY SLICE
// const citrus = fruits.slice(1);
// console.log(citrus);
// console.log(arr.toString());
// console.log(arr.join('+'));
// console.log(arr.pop());
// arr.push(5);
// console.log(arr);
// arr.shift(1);
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// delete arr[0];
// console.log(arr);
// let newArr = arr.concat(arr1);
// console.log(newArr);
// let newArr = arr2.flat();
// console.log(newArr);
// let obj = {
//     firstName: 'Jaydeep',
// }
// function myfunction() {
//     for(var i = 1; i<=5; i++){
//         myfin1()
//     }
//     function myfin1(){
//         function myfun(i){
//             setTimeout(() => {
//                 console.log(i);
//             },i*1000);
//         }
//         myfun(i)
//     }
// }

// myfunction();

// function area(radius) {
//     return (Math.PI*radius*radius)
// }

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(arr.calculate(area));

// function findIndexesWithSum(array, targetSum) {
//     const indexes = [];

//     // Iterate through each element in the array
//     for (let i = 0; i < array.length; i++) {
//       // Check if the current element is greater than the target sum
//       if (array[i] > targetSum) {
//         continue; // Skip to the next iteration
//       }

//       // Iterate through the remaining elements after the current element
//       for (let j = i + 1; j < array.length; j++) {
//         // Check if the sum of the current element and the remaining element is equal to the target sum
//         if (array[i] + array[j] === targetSum) {
//           // Push the indexes of the two elements into the 'indexes' array
//           indexes.push(i, j);
//         }
//       }
//     }

//     return indexes;
//   }

//   const array = [1, 5, 25, 6, 3, 24, 8, 29];
//   const targetSum = 30;
//   const indexes = findIndexesWithSum(array, targetSum);
//   console.log(indexes);

// function findIndexesWithSum(array, targetSum) {
//   const indexes = [];

//   array.forEach((element, index) => {
//     const remainingArray = array.slice(index + 1);
//     const remainingIndex = remainingArray.findIndex((num) => num + element === targetSum);
//     if (remainingIndex !== -1) {
//       indexes.push(index, remainingIndex + index + 1);
//     }
//   });

//   return indexes;
// }

// const array = [1, 5, 25, 6, 3, 24, 8, 29];
// const targetSum = 30;
// const indexes = findIndexesWithSum(array, targetSum);
// console.log(indexes);

// fetch('www.example.com/api1?param1=5')
//   .then(response => response.json())
//   .then(data => {
//     const result = data; // Assuming the response is in the format you provided [ 'animals', 'fruits' ]
//     const apiUrl = `www.example.com/api2?param1=${result[0]}`;

//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const secondApiResult = data; // Assuming the response is in the format you mentioned ['tiger','giraffe','cat']
//         console.log(secondApiResult);
//       })
//       .catch(error => {
//         console.log('Error occurred while calling the second API:', error);
//       });
//   })
//   .catch(error => {
//     console.log('Error occurred while calling the first API:', error);
//   });

// const array = [1, 5, 25, 6, 3, 24, 8, 29];
// targetSum = 30;
// const output = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i+1; j < array.length; j++) {
//       if(array[i] + array[j] === 30){
//           output.push(i,j);
//       }
//   }
//   diffValue = targetSum - array[i];
//   if (array.includes(diffValue)) {
//     var index = array.indexOf(diffValue);
//     output.push(i,index);
//   }
// }

// let diffoutput = new Set(output);
// console.log(Array.from(diffoutput));
// [0, 7, 1, 2, 3, 5]
// [7, 2, 1, 5, 3, 0]
// www.example.com/api1?param1=5
// res = ['animal','fruit']
// www.example.com/api2?param1='animal'
// res=['tiger','lion']
// using react redux fetch the apis accordingly

// const obj = {
//     name: 'jaydeep sarkar'
// }
// const obj1 = JSON.parse(JSON.stringify(obj))
// obj1.name = 'ankur kundu'
// console.log(obj);

// console.log(i);
// var i = 1;

// let x = 100;
// function a() {
//   b();
//   function b() {
//     let x = 110;
//   }
// }
// a();
// console.log(x);

// (function(a){
//     return (function(){
//       console.log(a);
//       a = 23;
//     })()
//   })(45);
// function randomFunc() {
//   for (var i = 0; i < 2; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
// }
// randomFunc();

// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

// let array = [2, 3, 4, 5, 7];

// for (let i = 0; i < 3; i++) {
//   let poped = array.pop();
//   array.unshift(poped)
// }

// console.log(array);

// let str = 'jaydeep';
// let count = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const countOfVowels = (str) => {
//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
// };

// countOfVowels(str);
// console.log(count)
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }
// console.log(b[9]);
// (function(){
//     var a = b = 3;
//   })();

//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();
// const sum = (a) => {
//     return (b) => {
//      return (a+b);;
//     };
// };

// console.log(sum(2)(3));;

// let array = [1, 5, 25, 6, 3, 24, 8, 29];
// const targetSum = 30;
// let arrx = []
// array.forEach((item , index) => {
//     const targetElement = array[index]
//     array.forEach((restItem, index2) => {
//         if(targetElement === restItem) return;
//         if(targetElement + restItem === 30) arrx.push(index,array.indexOf(restItem))
//     })

// })
// let output = new Set(arrx);
// console.log(Array.from(output));

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000)
// }

// let obj = {
//     name: 'jaydeep'
// }
// let obj1 = {...obj}
// obj1.name = 'ankur';
// console.log(obj1);

// let array = [1, 5, 25, 6, 3, 24, 8, 29];
// const targetSum = 30;
// let output = [];
// for (let i = 0; i < array.length; i++) {
//   let diff = targetSum - array[i];
//   if (array.includes(diff)) {
//     let res = array.indexOf(diff);
//     output.push(i, res);
//   }
// }
// let removeDup = new Set(output);
// let result = Array.from(removeDup);
// console.log(result);
// const obj = {
//   name: 'vinod',
//   age: 40,
// };

// const obj1 = Object.keys(obj).map((x) => x.toUpperCase());
// console.log(obj1);

// function name() {
//     var x = 100;
//     function name1() {
//         console.log(x);
//     }
//     x = 101;
//     return name1;
// }

// var x = name();
// x();

// function removeDuplicates(array) {
//     const uniqueArray = [];
//     for (let i = 0; i < array.length; i++) {
//       if (uniqueArray.indexOf(array[i]) === -1) {
//         uniqueArray.push(array[i]);
//       }
//     }
//     return uniqueArray;
//   }

//   const arr = [1, 1, 2, 2, 2, 3, 3, 3];
//   let uniqueArray = [];
//   const result = removeDuplicates(arr);
//   console.log(result); // [1, 2, 3]
// for(let i = 0; i<arr.length; i++){
//     let isDup = false;
//     for(let j = 0; j< arr.length; j++){
//         if(uniqueArray[j] === arr[i]){
//             isDup = true;
//             break;
//         }
//     }
//     if(isDup == false){
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log(uniqueArray);

// let array = [1, 5, 25, 6, 3, 24, 8, 29];
// let output = [];
// const targetSum = 30;
// let unique = [];
// let isDup = false;

// for(let i = 0; i< array.length; i++){
//     let diff = targetSum - array[i];
//     if(array.includes(diff)){
//         let x = array.indexOf(diff)
//         output.push(i,x);
//     }
// }
// let res = new Set(output);
// let resp = Array.from(res);
// for (let i = 0; i < output.length; i++) {
//     if(unique.indexOf(output[i]) === -1){
//         unique.push(output[i])
//     }
// }
// for (let i = 0; i < output.length; i++) {
//     isDup = false;
//    for (let j = 0; j < output.length; j++) {
//         if(output[i] === unique[j]){
//             isDup = true;
//             break;
//         }
//    }
//    if(isDup == false){
//         unique.push(output[i])
//    }
// }
// console.log(resp);
// console.log(unique);
// let a = 5;
// let b = 6;
// console.log(++a);
// console.log(a++);
// console.log(a);

// console.log(b++);
// console.log(b);
// console.log(++b);

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }

// console.log(numbers);

// function arrayFromValue(item) {
//     return
//       [item];
//   }

//   console.log(arrayFromValue(10));

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// const arr = [1,2,1,5,4,6,5];
// const count = {};
// for (let i = 0; i<arr.length; i++){
//     if(count[arr[i]]){
//         count[arr[i]]++
//     }else{
//         count[arr[i]] = 1
//     }
// }

// console.log(count);

// class Fun {
//     constructor(name, lastName){
//         this.name = name
//         this.lastName = lastName
//     }
//     getName() {
//         return [this.name, this.lastName];
//     }
// }

// class SuperFun extends Fun {
//     constructor(name,lastName){
//         super(name,lastName)
//     }
// }
// const objParent = new Fun();
// const obj = new SuperFun('jaydeep', 'sarkar');
// console.log(obj.getName());

// class CustomError extends Error{
//     constructor(message, code){
//         super(message);
//         this.code = code
//     }
// }

// const err = new CustomError('error invoked', 403);
// console.log(err);

//reverse of a Number
// 1 way

// const num = 12345;
// const arr = num.toString().split('').map(Number);
// length = arr.length;
// let resArr = [];
// for (let i = length-1; i >= 0; i--) {
//     resArr.push(arr[i]);
// }
// const result = parseInt(resArr.join(''));
// console.log(result);

// 2 way
// const num = 12345;
// const res = num.toString().split('').reverse().join('');
// console.log(parseInt(res));

// armstrong Number check

// const num = 37;
// let numArray = num.toString().split('').map(Number);
// length = numArray.length;
// let result = 0;
// let sumArray = []
// for (let i = 0; i < numArray.length; i++) {
//     sumArray.push(Math.pow(numArray[i],length));
// }
// let sum = sumArray.reduce((acc,sum) => {
//     return acc + sum;
// },0)
// if(num === sum){
//     console.log(`armstrong number = ${sum}`);
// }else{
//     console.log(`not a armstrong number = ${sum}`);
// }

// prime or not

// const checkPrime = (num) => {
//     if(num === 1){
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if(num%i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPrime(47));

//Fibonacci Series;
// const fibonacciSeries = (limit) => {
//     let series = [0,1];
//     let sum = 0;
//     for (let i = 2; i < limit; i++) {
//         sum = series[i-1] + series[i-2];
//         series.push(sum);
//     }
//     return series;
// }

// console.log(fibonacciSeries(10));

//palindrome number

// const palindromeCheck = (num) => {
//     const reverse = parseInt(num.toString().split('').reverse().join(''));
//     if(num === reverse){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(palindromeCheck(123));

// const palindromeCheck = (num) => {
//     numArray = num.toString().split('');
//     let reverse = [];
//     for (let i = numArray.length - 1; i >= 0; i--) {
//         reverse.push(numArray[i]);
//     }
//     reverse = parseInt(reverse.join(''));
//     if(num === reverse){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindromeCheck(121));

//  find greatest among 3 integers

// const arr = [100,300,200]

// const highestInteger = (arr) => {
//     let val = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(val<arr[i]){
//             val = arr[i];
//         }
//     }
//     return val;
// }

// console.log(highestInteger(arr));

//using reduce

// const arr = [100,300,200]
// const highestInteger = (arr) => {
//     const highest = arr.reduce((acc,num) => {
//         return Math.max(acc,num);
//     },0)

//     return highest;
// }
// console.log(highestInteger(arr));

// check if num is binary or not

// const checkBinary = (num) => {
//     const regexOfBinary = /^[01]+$/;
//     return regexOfBinary.test(num);
// }
// console.log(checkBinary("101010"));

//sum of digits of a number using recursion

// let res = 0;
// const sum = (num) => {
//     let lastDigit = Math.floor(num%10); //321
//     let remaining = Math.floor(num/10); //12 1 0
//     res += lastDigit; //3 5 6
//     if(remaining === 0){
//         return res;
//     }
//     let resp = sum(remaining);
//     return resp  //12 1
// }
// console.log(sum(123));

// const sum = (num) => {
//     let res = 0;
//     const length = num.toString().split('').length
//     for (let i = 0; i <= length; i++) {
//         lastDigit = Math.floor(num%10);
//         remaining = Math.floor(num/10);
//         num = remaining;
//         res+=lastDigit;
//     }
//     return res
// }
// console.log(sum(123));

//palindrome using recursion

// let res= 0;
// let targetNum = 121;

// const palinRec = (num) => {
//     lastDigit = Math.floor(num%10); //1 2
//     remaining = Math.floor(num/10);  //12 1
//     res = res*10 + lastDigit; //1
//     if(remaining === 0){
//         return res;
//     }
//     let resp = palinRec(remaining); //12
//     return resp;
// }
// const val = palinRec(targetNum);
// if(targetNum === val){
//    console.log(true);
// }else{
//     console.log(false);
// }
// swap without 3 var
// let a = 20;
// let b = 10;
// console.log(a,b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// const array = [1, 2, 1, 2, 1, 45, 6, 5, 4, 52, 45];
// const res = {};
// for (let i = 0; i < array.length; i++) {
//     if (res[array[i]]) {
//         res[array[i]] += 1
//     } else {
//         res[array[i]] = 1;
//     }
// }

// const res = {};
// for (let i = 0; i < array.length; i++) {
//     if (res[array[i]]) {
//         res[array[i]] += 1;
//     } else {
//         res[array[i]] = 1
//     }
// }
// console.log(res);

// const array = [1, 1, 1, 12, 2, 2, 3, 34, 5, 6];
// const res = [];

// for (let i = 0; i < array.length; i++) {
//     if (res.indexOf(array[i]) == -1) {
//         res.push(array[i]);
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (res.indexOf(array[i]) == -1) {
//         res.push(array[i]);
//     }
// }
// console.log(res);

// const arr = [1, 1, 1, , 5, 5, 56, 6, 7, 7, 7, 5, 9, 45];
// const count = {};
// for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]]) {
//         count[arr[i]] += 1
//     } else {
//         count[arr[i]] = 1
//     }
// }
// console.log(count);

// const arr = [1, 2, 6, 29, 24, 8, 7, 23];
// const targetSum = 30;
// let res = [];
// let nonDup = [];

// for (let i = 0; i < arr.length; i++) {
//     let diff = targetSum - arr[i];
//     if (arr.includes(diff)) {
//         res.push(i, arr.indexOf(diff));
//     }
// }

// for (let j = 0; j < res.length; j++) {
//     if (nonDup.includes(res[j])) {
//         continue;
//     } else {
//         nonDup.push(res[j])
//     }
// }
// console.log(nonDup);

// for (let i = 0; i < arr.length; i++) {
//     let diff = targetSum - arr[i];
//     if (arr.includes(diff)) {
//         res.push(i, arr.indexOf(diff))
//     }
// }

// for (let j = 0; j < res.length; j++) {
//     if (nonDup.includes(res[j])) {
//         continue;
//     } else {
//         nonDup.push(res[j]);
//     }
// }

// console.log(nonDup);

// const array = [1, 2, 3, 4, 5, 6];
// const res = array.map((arr) => {
//     return arr * 2;
// })
// console.log(res);

// const array = [1, 2, 3, 4, 5, 6];
// const res = array.filter((arr) => {
//     return arr % 2 == 1;
// })
// console.log(res);

// const array = [1, 2, 3, 4, 5, 6];
// const res = array.reduce((acc, arr) => {
//     return acc + arr;
// }, 0);
// console.log(res);

// const arr = [1, 2, 3];
// const res = arr.map((a) => a * 2);
// console.log(res);
// console.log(arr);

// const res2 = arr.forEach((val, i, a) => a[i] = val * 2)
// console.log(res2);

// const obj = {
//     name: 'jaydeep',
//     age: '27',
//     getDet() {
//         console.log(`My name is ${this.name} and age is ${this.age}`);
//     }
// }
// obj.getDet()

// const array = [1, 2, 3];
// const res = array.forEach((val, i, a) => {
//     a[i] = val * 2
// });

// console.log(res, array);

// const array = [1, 2, 2, 3, 4, 5, 7, 6, 6, 2, 1];
// const unique = [];
// for (let i = 0; i < array.length; i++) {
//   if (unique.includes(array[i])) {
//     continue;
//   } else {
//     unique.push(array[i]);
//   }
// }
// console.log(unique);

// const array = [1, 2, 5, 25, 29, 4, 36, 26];
// const targetSum = 30;
// const indexes = [];
// for (let i = 0; i < array.length; i++) {
//   const diff = targetSum - array[i];
//   if (array.includes(diff)) {
//     indexes.push(i, array.indexOf(diff));
//   }
// }
// const unique = new Set(indexes);
// const newArr = Array.from(unique);
// console.log(newArr);

// const array = [1, 1, 1, 1, 2, 2, 5, 5, 22, 2, 3, 3, 4, 4, 8, 98, 9, 10];
// const count = {};

// for (let i = 0; i < array.length; i++) {
//   if (count[array[i]]) {
//     count[array[i]] += 1;
//   } else {
//     count[array[i]] = 1;
//   }
// }
// console.log(count);

// const array = [1, 2, 3, 4, 5];

// const res = array.map(function (arr) {
//   return arr * 2;
// });
// console.log(res);

// const res2 = array.forEach((val, i, arr) => (arr[i] = val * 2));
// console.log(res2, array);

// const res = array.filter(function (arr) {
//   return arr % 2 == 0;
// });
// console.log(res);

// const res = array.reduce(function (acc, arr) {
//   return acc + arr;
// }, 0);
// console.log(res);

// Write a function that takes an array of numbers as input and returns a
// Promise that resolves to an array containing the same numbers, sorted in ascending order.1, 5, 12, 23, 34, 45, 56, 67]
const inputArray = [23, 45, 12, 56, 34, 67, 1, 5];
const getAscArray = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Invalid Input!");
    }
    const result = arr.sort((a, b) => a - b);
    resolve(result);
  });
};

// getAscArray(inputArray)
//   .then((array) => {
//     console.log(array);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Write a function that takes a string as input and returns a Promise that resolves to an object
//containing the number of occurrences of each word in the string.

const input = "hello world world world hello my my world world hello world";

const getOccurance = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject("Invalid string");
    }
    const obj = {};
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else {
        obj[arr[i]] = 1;
      }
    }
    resolve(obj);
  });
};

// getOccurance(input)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Capitalize the first letter of each word in a string without using any js functions like charAt() or slice()

const inputstr = "my name is jaydeep sarkar";
const capitalize = (str) => {
  let result = "";
  let isCap = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      isCap = true;
    } else {
      if (isCap) {
        result += str[i].toUpperCase();
        isCap = false;
      } else {
        result += str[i];
      }
    }
  }
  return result;
};

// console.log(capitalize(inputstr));

// Create a for loop that iterates up to 100 while outputting "Ram" at multiples of 3, "Sam" at multiples of 5 and
//"Raj" at multiples of 3 and 5.

// str = "";
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     str += "RamSam" + " ";
//   } else if (i % 3 === 0) {
//     str += "Ram" + " ";
//   } else if (i % 5 === 0) {
//     str += "Sam" + " ";
//   } else {
//     str += i.toString() + " ";
//   }
// }
// console.log(str);

// there is an array of the object that contains “salary”. Now you want to get the array of an
// employee whose salary is greater than 40000.
let employees = [
  {
    id: 11,
    name: "Abhinav",
    salary: 75000,
  },
  {
    id: 2131,
    name: "Gaurav",
    salary: 62000,
  },
  {
    id: 3012,
    name: "Raj",
    salary: 32000,
  },
];

// const result = employees.filter((employee) => employee.salary > 40000);
// console.log(result);

const inputstr1 = "my name is jaydeep sarkar";
const capitalize1 = (str) => {
  const result = [];
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    result.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
  }
  return result.join(" ");
};

// console.log(capitalize1(inputstr1));

// Create a sleep() function in javascript which takes a parameter delay (milliseconds).
// Sleep function returns a new promise that resolves after the provided delayed time.
// Example: sleep(2000).then(() => console.log(‘Ran after 2 sec’))

const sleep = (milli) => {
  return new Promise((resolve, reject) => {
    if (typeof milli !== "number") {
      reject("Invalid");
    }
    setTimeout(() => {
      resolve("Ran after 2 sec");
    }, 2000);
  });
};

// sleep(2000)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**Implement a createCounter() function, which returns another function as a result.
Executing the resulting function would return an incremented counter number.
Example:
const counter = createCounter();
console.log(counter()) // prints 1
console.log(counter()) // prints 2
console.log(counter()) // prints 3 */

function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// function userGreeting(loggedInUser) {
//   console.log(`${loggedInUser}`);
// }
// setTimeout(() => {
//   userGreeting("John");
// }, 2000);

/*
Create a validatePassword() function which takes a password string as input and
will return an object with property of isValid and errors
Validation Rules:
1. Password must not be empty
2. Password must have atleast 5 characters
3. Password must start with number 1
{ isValid: false, errors: [“Password length is less than 5 characters”] 
{ isValid: false, errors: [“Password length is less than 5 chars”, “Password must start with
number 1”] }
{ isValid: true, errors: [] }
*/

const validatePassword = (pass) => {
  const errors = [];
  let isValid = true;
  let str = "";
  if (pass.length === 0) {
    isValid = false;
    errors.push("pass must not be empty");
  }
  if (pass[0] !== "1") {
    isValid = false;
    errors.push("pass must start with 1");
  }
  if (pass.length !== 5) {
    isValid = false;
    errors.push("pass must be 5 characters");
  }
  if (pass.length === 5 && pass[0] === "1") {
    isValid = true;
    errors;
  }
  return {
    isValid,
    errors,
  };
};

// console.log(validatePassword(""));
// console.log(validatePassword("0123"));
// console.log(validatePassword("123a5"));

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise. An
Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once
 * 
 */
const s = "Listen";
const t = "Silent";
const checkAnagram = (s, t) => {
  let s1 = s.toLowerCase().split("").sort().join("");
  let t1 = t.toLowerCase().split("").sort().join("");
  if (s1 === t1) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkAnagram(s, t));


//insert and element in any position without using any function

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const insertElement = (arr, pos, ele) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[i] = ele;
      }
    }
  }
  return arr;
};

// console.log(insertElement(arr, 0, 100));
