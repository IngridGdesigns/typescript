// exercise 1 - Objects
// Typescripts representation of an object type, that jelps typescript undertand
// const flower: {
//   name: string;
//   age: number;
// }
const flower = {
  name: 'Poppy',
  age: 8,
};

console.log(flower.name);

// example 2 - Arrays
const student = {
  name: 'Morgan',
  age: 26,
  hobbies: ['Drawing', 'Cooking', 'Travelling'],
};

console.log(student.name);
console.log(student.hobbies);

let favoriteActivities: string[]; // tells type that it's an array of strings
favoriteActivities = ['Swimming', 'Dancing', 'Watching Movies'];
console.log(favoriteActivities);

for (const hobby of student.hobbies) {
  // <--- this is where we see Typescript inference really shine!!
  console.log(hobby);
  console.log(hobby.toLowerCase);
  //knows for certainty that hobby will be a string because of the types defined in student
}
