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

// example 3 - Tuples
type employees = {
  // this is a type
  name: string;
  role: [number, string]; // Tuple - fixed length array with specified types in it
};
const teachers: employees = {
  name: 'Leena',
  role: [4, 'Teacher'], // Tuple
};

teachers.role.push('admin'); // be aware that push is allowed to add string
teachers.role[0] = 10;
console.log(teachers);

//// Errors ///////////////////////////////
// teachers.role = [0, 'admin', 'user'];
// you will get errors if you try to assign
// more than two variables in a Tuple

// example 4 - Enums
enum Roles { // custom type
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

type staff = {
  name: string;
  role: Roles; // expects property from Enum
};

const cook: staff = {
  name: 'Gordon',
  role: Roles.ADMIN,
};

const waiter: staff = {
  name: 'René',
  role: Roles.READ_ONLY,
};

if (cook.role === Roles.ADMIN) {
  console.log('has admin access');
}
if (waiter.role === Roles.READ_ONLY) {
  console.log('Read only - no write access');
}
