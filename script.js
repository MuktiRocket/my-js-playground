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

class Fun {
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }
    getName() {
        return [this.name, this.lastName];    
    }
}

class SuperFun extends Fun {
    constructor(name,lastName){
        super(name,lastName)
    }
    getNaam() {
        return [this.name, this.lastName]
    }
}
const objParent = new Fun();
const obj = new SuperFun('jaydeep', 'sarkar');
console.log(obj);