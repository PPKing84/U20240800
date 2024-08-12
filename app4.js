const inputFrase = prompt("Ingresa una frase:");

const palabraAntigua = prompt("Ingresa la palabra que deseas reemplazar:");

const palabraNueva = prompt("Ingresa la nueva palabra:");

const fraseActualizada = inputFrase.replace(new RegExp(palabraAntigua, 'gi'), palabraNueva);

console.log(`Frase actualizada: ${fraseActualizada}`);
