// enahced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('Carlos', 31, 'UY', 1)); 
// { user: 'Carlos', age: 31, country: 'UY', uId: 1 }