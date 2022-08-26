const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./module.js')
    console.log(module);
    module.hello();
})
/* 
esto nos servira para hacer la pagina mas dinamica, 
cuando le hagamos click al boton, este lo que hara 
es cargar el archivo module.js y no cuando se cargue 
el html vitando que el html demore mas en cargar 
cuando el usuario ingrese a la pagina
 */