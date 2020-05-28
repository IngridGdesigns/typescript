//example 1:  Union type
function combine(input1: number | string, input2: number | string) {
  let result: number | string;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 22);
console.log(combineAges);

const combineWords = combine('sun', 'shine');
console.log(combineWords);

// example 3: Aliases
type Combinable = number | string; // avoid typos and write code quicker

// example 2: Literal types
function combineAll(
  input1: number | string,
  input2: Combinable, // Alias used here
  resultConversion: 'as-number' | 'as-text' // Only these two values, no other value will be allowed
  //often used in the context of a union type. We use these two literal types
) {
  let result: Combinable;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number' // doing the conversion before combining the two values
  ) {
    result = +input1 + +input2; // Forced conversion to a number, adding plus in front of it,
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  /*
    second choice for converting, which is ok, but not great
    if(resultConversion === 'as-number') { 
          return +result // Alternative is using parseFloat(result) or +result which converts to a number
      } else {
          return result.toString();
      }
      */
}

const combineStringNumbers = combineAll('24', '7', 'as-number');
const combineNumbers = combineAll(12, 5, 'as-number');
const combineNames = combineAll('Natasha', '-Audrey', 'as-text');
console.log(combineNumbers);
console.log(combineStringNumbers);
console.log(combineNames);
