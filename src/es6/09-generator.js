function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Carlos', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value); // Carlos
console.log(it.next().value); // David
console.log(it.next().value); // Ana
console.log(it.next().value); // Ulises
console.log(it.next().value); // Jennifer
