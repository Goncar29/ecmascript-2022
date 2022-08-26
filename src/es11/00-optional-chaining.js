const users = {
    gndx: {
        country: "MX"
    },
    carlos: {
        country: "UY"
    }
}
console.log(users.carlos.country);
console.log(users?.bebeloper?.country);
/* 
con el signo ? consultamos si existe lo que buscamos y 
nos retorna en este caso undefined y no un error asi 
podemos realizar alguna validacion si lo deseamos
 */