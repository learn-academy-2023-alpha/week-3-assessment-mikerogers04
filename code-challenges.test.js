// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Baseline template for jest tests
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
  it("returns an array of the length of the input number, containing the numbers of the Fibonnacci sequence", () => {
    expect(fibonnacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonnacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//Test failed as expected:  ReferenceError: fibonnacci is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called fibonnacci, passing in a number as the input. 
  //Initialize an empty array to store the fibonnaci values
  //Initialize num1 to 1 and num2 to 0 and declare numAdded
//Use a for loop to iterate starting from 1 to a stopping point of the input number + 1.
  //Add num1 and num2 and store into numAdded. (Logic to continue the sequence)
  //use .push method to push numAdded values into the empty array.
  //Reassign num2 to num1 (Reassigning will help for addition in next two numbers in sequence)
  //Reassign numAdded to num2 (Reassigning will help for naddition in next two number in sequence)
//Output: An array of the length of the input number, containing the number of the Fibonnacci sequence.

const fibonnacci = (num) => {   //create function
  let fArray = []               //Declare and initialize empty array
  let num1 = 1                  //Declare and initialize num1 to 1
  let num2 = 0                  //Declare and initialize num2 to 0
  let numAdded                  //Declare numAdded only

  for(let i = 1; i < num +1; i++){      //for loop to iterate each number in the sequence 
    numAdded = num1 + num2
    //console.log(numAdded)             //Test log to check if numbers were being added correctly in the sequence 
    fArray.push(numAdded)               //Use push to push added numbers into the empty array
    num1 = num2                         //Reassign to previous number
    num2 = numAdded                     //Reassign to previous number
  } 
  return fArray
}
//Test output: 
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("objectSort", () => {
  it("returns an array of the values sorted from least to greatest. ", () => {
    expect(objectSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
//Test failed as expected:  ReferenceError: objectSort is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// b) Create the function that makes the test pass.

//Pseudo: 
//Create a function called objectSort, passing in an object as the input. 
//Pull out the object values by using Object.values method and store the array of values into a variable
//Then use the .sort method to sort the array object values from least to greatest
//Output: An array of values sorted from least to greatest.

const objectSort = (object) => {            //create function
    let valueArray = Object.values(object)  //Use Objects.value to pull values out of the object and store into an array
    valueArray.sort((a, b) => a - b)        //sort the array from smallest to largest values
    //console.log(valueArray)                 //Test log to verify correct output values in array
    return valueArray

}
// //Test output: 
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("sumArray", () => {
  it("returns an array of accumulating sum or an empty array", () => {
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumArray(accountTransactions3)).toEqual([])
  })
})
//Test failed as expected:  ReferenceError: sumArray is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

//Psuedo:
//Create a function called sumArray, passing in an array as the input. 
//Take the input array and use the .reduce method to calculate the accumulated values. 
  //The reduce method requires certain parameters: 
      //The reducer function exeutes on each element in an array and requires 2 parameters and can have optional ones.
        //The 2 required parameters are the total and current value. 
        //The 2 optional parameters are the current index and the array the values belong to. Initial value is also optional for a baseline value for the function to use. 
  //In the reducer function, we will pass in sum, currentNum, and index as parameters. 
    //sum will be the previous value returned
    //By adding currentNum(current value) plus the number at index of sum at index - 1 (the previous accumulated value) OR 0
    //Also, passing an empty array as an optional initial value. In this case, we also want the function to work on empty arrays. Since the reduce method does not work on empty arrays, having the optional parameter passed in, helped for this case. 
//Output: An array of accumulating sum or an empty array. 

const sumArray = (array) => {
  // return array.map((value) => {     //Initial logic process was to map over the array and then add each element value to the previous sum.
  //   return sum = 0, sum += value     //While this logic worked in theory, it ended up giving me incorrect values. 
  // })
  // return array.map((sum =>     //setting up the sum function 
  //    value => sum += value) (0)   //setting up the .map function, sum will be appended to each value as map iterates through the array. Initialize sum to 0
  // )
  // return array.reduce((sum, currentNum, index) =>     //Setup reducer function with sum, currentNum and index parameters
  //   [...sum, currentNum + (sum[index - 1] || 0)], []) //Adding currentNum to sum of each previous value at each index
  // return array.reduce((sum, curValue) => sum + curValue, 0)
}
//Test logs to verify array had correct output values
console.log(sumArray(accountTransactions1))
// console.log(sumArray(accountTransactions2))
// console.log(sumArray(accountTransactions3))

// //Test output: 
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total