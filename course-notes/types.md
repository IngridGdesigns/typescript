# Core types in Typescript

- number >>  1, 5, 3, -10  >> all numbers >> no difference between integers or floats
- strings >> 'hola', "salute", `hey` >> All text values
- boolean >> true, false >> no "truthy" or "falsy" values
- object >> {location: Cuba} >> Any Javascript object, more specific types (type of object)

The Type system checks the validity of the supplied values, before they are stored or manipulated the program. You will see an error when you compile if you try to assign parameters that aren't the type you specfied. See course-notes/exercise_1.ts for example.

Typescript type system only helps you during development(before the code gets compiled.) By default Typescript doesn't block compilation if you have a mistake.

Note: Make sure you don't have the exercise_1.js and exercise_1.ts version of the file open at the same time, you will get duplicate function errors. Closing the javasript file fixes this.

Javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during development).

The types in Typescript are special identifiers that don't appear in Javascript.
```typescript
function subtact(n1: number, n2: number) {
    return n1 - n2;
}
```
When compiled to javascript the type identifiers are gone and are not supported by javascript. Javascript doesn't understand and is not used in the output
```javascript
function subtact(n1, n2) {
    return n1 - n2;
}
```
Typescript understands explicit type assignments but it also has a built-in feature called Type Inference.

## Type Inference

Type Inference means that it does it best to understand what type you have in a certain variable/constant example :

```typescript
function subtact(n1: number, n2: number) {
    return n1 - n2;
}

const number1 = 5; 
const number2 = 3;
subtract(number1, number2) //Output: 2
```

The const number1 will always be the type number, specifically number 5. Typescript inference will save you from using the wrong type, a type it did not infer. For example: 
```typescript
let resultPhrase = 'Result is: ',
```
Typescript infers that resultPhrase is of type string. If you try to reassign to a number: 
```
resultPhrase = 7;
```
You will get an error from Typescript:
```typescript
let resultPhrase: string
Type '7' is not assignable to type 'string'
```
That's the core task of Typescript!

## Objects