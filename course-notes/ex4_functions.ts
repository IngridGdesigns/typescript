// ex 1: Functions and void versus undefined
function subtract(n1: number, n2: number): number {
  return n1 - n2;
}

function printResult(num: number) {
  console.log(`Result: ${num}`);
}

printResult(subtract(10, 4)); // function printResult(num: number): void
/* return type of void - The function doesn't return antyhing, it successfully completes,
doesn't return anything. Use Void not undefined because it's deliberate that you are not
returning anything.  */

console.log(printResult(subtract(12, 5))); // you would get undefined as a value

// undefined is a type in typescript, you wont get an error
let someThing: undefined; // not very useful

// ex 2 : Function types

function multiply(num1: number, num2: number) {
  return num1 * num2;
}

// void = ignoring the return type, clearly defined there, a callback function as a parameter
function multiplyAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result); // callback
}

//// avoid this
let combineV;
combineV = multiply; // combineValues has an "any" type
console.log(combineV(3, 3)); // Output: 9

/// instead do this:
/// takes a function and takes in two numbers / (parameters), you need to match the types
let combinationValues: (a: number, b: number) => number; // two arguments and returns a number
// specify funciton type at the end of error

combinationValues = multiply;
console.log(combinationValues(4, 5));
// function types allows us to describe which type of function specifically we want to use
// somewhere, with variables or a callback

// passing in an anonymous function
multiplyAndHandle(2, 4, (result) => {
  // Typescrip is able to infer that result is a number
  console.log(result);
});
