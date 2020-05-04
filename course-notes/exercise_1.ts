function add(n1: number, n2: number) { //both parameters will be number
    // passing other things wont be allowed
    return n1 + n2; 
}

/* error will appear if you use anything else that is not a number

const res = add('sun', 8);
console.log(res); 

error TS2345: Argument of type '"sun"' is not assignable to parameter of type 'number'

6 const res = add('sun', 8);
                     ~~~~~
Found 1 error.
*/

const result = add(9, 8);
console.log(result); 