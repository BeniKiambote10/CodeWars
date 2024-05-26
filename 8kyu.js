//Question 1: you must return false without ever actually using the word false 

//solution 1.1

// function returnFalse(){
//     return ![]
// }
// console.log(returnFalse())

// //solution 2.1

// function returnFalse(){
//     return Boolean( NaN || 0 || "" || null || undefined );
// }
// console.log(returnFalse())

// //solution 3.1

// function returnFalse(){
//     return !true
// }
// console.log(returnFalse())






//Question 2 Create a function that takes 2 integers in form of a string as an input, 
//and outputs the sum (also as a string):

//Solution 1 

// function sumStr (a, b){
//     if(a === 0 || b === 0){
//         return 0;
//     } else {
//         return (Number(a)+ Number(b)).toString();
//     }

// }
// console.log("3","4");




//Question 3 Complete the solution so that it reverses the string passed into it.

//solution 1 
// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("Beni"))


//solution 2







//Question 4 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 

//solution 1

// function smashWords(arr){
// return arr.join().trim().replaceAll(",",  " ")
// }
// console.log(smashWords(['hello', 'world', 'this', 'is', 'great'] ))





//Question 5 Write a function that takes an array of numbers and returns the sum of the numbers. 
//The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//Solution 1.5

// function sumOfArray(arr){
//     let sum = 0;
     
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum

// }
// console.log(sumOfArray([1,2,3,4,5,6,7]))


//Solution 2.5

// function sum (numbers) {
//     "use strict";
//   let sums = 0; 
//     numbers.forEach(function(number){
//        sums += number;
//     })
//   return sums
// };

// console.log(sum([1,2,3,4,5,6,7]))







//Question 6 Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//solution 1.6 

// function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')  
// }

//solution 2.6 

// const replace = (str) => {
//     return str.replace(/[aeiou]/gi, "!")
// }
// console.log(replace("aeious"))








//Question 7 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Solution 1.7 

// const evenOrOdd = (int) => {
//     if(int % 2 === 0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// console.log(evenOrOdd(5))

//Solution 2.7 
// function evenOrOdd(number) {
//     number.forEach(function(numbers){
//       if(numbers % 2 === 0){
//         console.log("Even")
//       } else {
//         console.log( "Odd")
//       }
//     })
    
//   }
//   console.log(evenOrOdd([5,6,7,8,9,4,6]))

//Solution 3.7

// function evenOrOdd(arr){
//         const result = [];
    
//         for(let i=0; i<arr.length; i++){
//             if(arr[i] % 2 === 0 ){
//                 result.push(arr[i] + " Is Even")
//             }else{
//                 result.push(arr[i] + " Is Odd")
//             }   
//         }
//         return result
    
//     }
//     console.log(evenOrOdd([1,2,3,4,5,6,7,8]))
    







//Question 8 Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//solution 1 

// function  removeAllExclamation(str){
//    return str.replaceAll("!", " ")

// }
// console.log(removeAllExclamation("My!Name!Is!Beni"))





//Questiom 9 Your task is to create a function that does four basic mathematical operations.

//Solution 1

// function fourOpp(operation, value1, value2){
//     if(operation === "+"){
//         return value1 + value2;
//     }
//     if(operation === "*"){
//         return value1 * value2;
//     }
//     if(operation === "-"){
//         return value1 - value2;
//     }
//     if(operation === "/"){
//         return value1 / value2;
//     }
        // return 0;

// }
// console.log(fourOpp("-",3,5))
// console.log(fourOpp("*",3,5))
// console.log(fourOpp("/",3,5))
// console.log(fourOpp("+",3,5))





//Question 10  create a function called filterEvenNums that take one parameter arr
//intialize a variable with a empty array that holds the even numbers
//create a for loop  in order to loop through the array length 
//inside the curly brackets of the loop you want to create a if statement 
//even .push method


//#Solution 

// function filterEvenNums(arr){

//         let even = []

//       for (let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0)
//          even.push(arr[i]);
//       }
//       return even;
// }
// console.log(filterEvenNums([1,2,3,4,5,6,7,8]))





//Question 11 create a function to capatalize the first letter of a string 

//Solution 1
// function capatalizeNames(name){

//         for(let i = 0;  i< name.length; i++){
//                 return name.map((names)=>{
//                         return names.charAt(0).toUpperCase() + names.slice(1)
//                 })
//         }
// }
// console.log(capatalizeNames(["beni", "mary","james", "susan"]))





//Question 12 Given a non-negative integer, 3
// for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.


//Solution 1 

// function none(num) {
// let randoNum = Math.floor(Math.random() * num);
// if(randoNum === 0){
//         return ` No Sheeps`
// }else{
// return ` ${randoNum} sheep... `
// }
// }
// console.log(none(3))

//Solution 1.1 

// var countSheep = function (num){
// let str = "";

// for(let i = 1; i <= num; i++) { 
//         str+= `${i} sheep...`; 
// }
// return str;

// }
// countSheep();



//Question 13 Find the smallest integer in the array

//Solution 13.1 

// function findSmallestInt(arr) {
//         return Math.min(...arr)
        
//       }
// console.log(findSmallestInt([1,2,3,4,5,6,7]))


//Solution 13.2 

// const findSmallestInt = (arr) => {
//         return Math.min(...arr)
// }
// console.log(findSmallestInt([1,2,3,4,5,6,7]))


//Solution 13.3 
// function findSmallestInt(arr) {
//         let min = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
    
//     console.log(findSmallestInt([3,4,5,6,7,8,4,1,4,3])); // Output: 1
    


