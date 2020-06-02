# Core types in Typescript

- number >> 1, 5, 3, -10 >> all numbers >> no difference between integers or floats
- strings >> 'hola', "salute", `hey` >> All text values
- boolean >> true, false >> no "truthy" or "falsy" values
- object >> { location: Cuba } >> Any Javascript object, more specific types (type of object)
- Array >> [ 1, 'hi', false ] >> Any javascript array, supports numbers, strings, booleans, type can be flexible or strict (regarding the element type)
- Tuple >> [2, 3] >> Not in javascript. It is an array, but a fixed length array with a fixed types.
- Enum >> enum { NEW, OLD } >> doesn't exist in javascript. It gives you a enumerated list, global constant identifiers
- Any >> everything\* >> A very flexible type, that should be avoided whenever possible.

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
subtract(number1, number2); //Output: 2
```

The const number1 will always be the type number, specifically number 5. Typescript inference will save you from using the wrong type, a type it did not infer. For example:

```typescript
let resultPhrase = 'Result is: ';
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

An object is an instance which contains set of key value pairs. Objects in Typescript must be an instance of a particular type.

```typescript
const dessert = {
  name = 'Donut',
  flavor = 'chocolate',
  bake: function () {}, // Type template
};
dessert.bake = function () {
  console.log('Add two bars of ' + dessert.flavor);
};
dessert.bake();
```

On compiling, it will generate the same code in javascript, the output will be : `Add two bars of chocolate`

## Array

Array types can be written in one of two ways.

```typescript
let list: number[] = [1, 2, 3];
```

```typescript
let shoppingList: Array<string> = ['oranges', 'lettuce', 'napkins'];
```

## Tuple

A Tuple is a special construct that typescript understands. It has a fixed length array that's typed, Example:

```typescript
const student = {
  name: string;
  role: [number, string];
} = {
  name: 'Katya'
  role: [2, 'author']; //  role: (string | number)[]
}
```

## Enum

Human readable identifiers that have some mapped value behind the scenes.

```typescript
enum Sun { // custom type
  SunRise = 0,
  Midday = 1,
  Sunset = 2,
}

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

## Any

Any takes away all advantages of Typescipt. The compiler won't be able to check it when compiled. You can use it as a fallback but it puts you at a disadvantage and it could be error prone. Be explicit and let Typescipt inference do it's job! Try to avoid Any as much as possible.

## Union Types

Union types are awesome. A union type describes a value that can be several types, 2 in one and so on. The vertical bar (|) separates each type, so
number | string | boolean is the type of a value that can be a number, a string, or a boolean for example.

If we have a value that has a union type, we can only access members that are common to all types in the union.

Example:

```typescript
function combine(input1: string | number, input2: string | number) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}

const combinedIngredients = combine('chocolate_', 'donut!');
// Output : chocolate_donut!
```

# Functions

# Typescript Compiler

## Watch mode
Tell typescript to watch that file and recompile by using watch mode. Watch mode will detect any changes when you save, to enter watch mode enter the following in your project terminal:

```.txt
tsc app.ts -watch
// or
tsc app.ts -w
```

You will see the following message in the terminal when you are in watch mode when you save a change:

```
file change det4ected. Starting incremental compilation...
Found 0 errors. Watching file changes.
```

To quit watch mode use CTRL + C.
Watch mode is a great start but only targets the main file in a project. So if your file is bigger and more complex, it won't be much use. 

A better alternative is using 
