// ex 1: Unknown type - more restrictive than the "Any" type, it does check
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Potato';

// You can do a type check to see if it can be done, better choice than "any" type
// helps do some type checking
if (typeof userInput === 'string') {
  userName = userInput;
}

// ex 2: Never type = a function can return
// utility function that can be used in larger programs
function generateErrMessage(message: string, code: number): never {
  // intended to never return anything
  throw { message: message, errorCode: code }; // this function never produces a return value
  // always crashes the script, never returns anything
}

generateErrMessage('an error ocurred!', 500);
