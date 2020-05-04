# Core types in Typescript

- number >>  1, 5, 3, -10  >> all numbers >> no difference between integers or floats
- strings >> 'hola', "salute", `hey` >> All text values
- boolean >> true, false >> no "truthy" or "falsy" values

You will see an error when you compile if you try to assign parameters that aren't the type you specfied. See course-notes/exercise_1.ts for example.

Typescript type system only helps you during development(before the code gets compiled.) By default Typescript doesn't block compilation if you have a mistake.

Note: Make sure you don't have the exercise_1.js and exercise_1.ts version of the file open at the same time, you will get duplicate function errors. Closing the javasript file fixes this.

Javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during development).