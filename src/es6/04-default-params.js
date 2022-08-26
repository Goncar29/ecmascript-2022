function newUser(name, age, country) {
    var name = name || 'Carlos';
    var age = age || 31;
    var country = country || 'UY'
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');
// ------------------------------------------
function newAdmin(name = 'Carlos', age = 30, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');