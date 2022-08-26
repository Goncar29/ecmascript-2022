const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

// Promise.allSettled() Ejecuta todas las promesas sin importar si son rechazadas o no.
/* 
[
    { status: 'rejected', reason: 'reject' },
    { status: 'fulfilled', value: 'resolve' },
    { status: 'fulfilled', value: 'resolve2' }
]
 */