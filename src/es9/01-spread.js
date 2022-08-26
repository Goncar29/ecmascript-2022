const user = { username: "carlos", age: 31, coutry: "UY" };
const { username, ...values } = user;
console.log(username);
console.log(values);
/* 
carlos
{ age: 31, coutry: 'UY' }
 */