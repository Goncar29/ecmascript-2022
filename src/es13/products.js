import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };
/* 
ahora no es necesario usar la palabra async, antes encapsulamos una funcion 
hacer la logica y retornar products por ejemplo luego retornar o exportar 
la funcion para llamarla dentro donde fuesees necesario y con esto hacer 
del uso de async y await
 */