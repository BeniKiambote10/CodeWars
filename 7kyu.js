//Problem 1 Create a function that returns the sum of the two lowest positive 
//numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.



//Solution 1.1 

// function twoLowestNum(numbers){

//     for (let i =0; i < numbers.length; i++){
// let  firstLowest = Math.min(...numbers)
// numbers.splice(numbers.indexOf(firstLowest),1)
// let secondLowest = Math.min(...numbers)
// return firstLowest +  secondLowest;

//  };

// }
// console.log(twoLowestNum([1,10,4,5,6,7,8,9]))








//Problem 2 given an array of numbers return a new array of length number containing the last even numbers from the original array
//the original array will not be empty and will contain at least "number" even numbers 

//solution 2.1 

// function evenNums(arr, num){
//     let result = [];
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] % 2 === 0 ){
//             result.push(arr[i])
//         }
//     }
//     return result.slice(-num)

// }
// console.log(evenNums([1,2,3,4,5,6,7,8], 2))


//solution 2.2

// const evenNums = (arr, num) => arr.filter((array) => array % 2 === 0).slice(-num)
// console.log(evenNums([1,2,3,4,5,6,7,8], 2))




















