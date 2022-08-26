const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response)); // resolve

/* 
Promise.any va a capturar la respuesta de la primera que sea de forma satisfactoria.
Si es reject la ignora y devuelve el primer resolve.

Metodos privados: Agregando # los métodos se vuelven privados y solo pueden ser accedidos dentro de la misma clase.
 */