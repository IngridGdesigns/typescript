function add(n1: number, n2: number, showResults: boolean, phrase: string) {
  //both parameters n1, n2 will take in the type number
  // passing other things wont be allowed
  const result = n1 + n2;
  if (showResults) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

/* error will appear if you use anything else that is not a number

const res = add('sun', 8);
console.log(res); 

will produce the folloing error: 
error TS2345: Argument of type '"sun"' is not assignable to parameter of type 'number'

6 const res = add('sun', 8);
                     ~~~~~
Found 1 error.
*/
let showResults = true;
const resultPhrase = 'The result is: ';
add(9, 8, showResults, resultPhrase); // Expected output in the console: The result is: 17
