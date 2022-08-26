// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]); // Apple Banana

// Object destructuring

let user = { username: 'Carlos', age: 31};
let { username, age } = user;
console.log(username, user.age); // Carlos 31

// spread operator

let person = { user: 'Carlos', age: 31 };
let country = 'UY';

let data = { id: 1, ...person, country }; 
console.log(data); // { id: 1, user: 'Carlos', age: 31, country: 'UY' }

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
// [ 1, 2, 3 ]  esto es ...values
// 2        esto es num + values[0]