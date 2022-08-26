const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whooooooooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finished!')); // Nos indica que ya obtuvo la info