const inputString = prompt("Ingresa una cadena de texto:");

const startPosition = parseInt(prompt("Ingresa la posición inicial (índice) de la subcadena:"));
const endPosition = parseInt(prompt("Ingresa la posición final (índice) de la subcadena:"));

const subcadena = inputString.slice(startPosition, endPosition);

console.log(`La subcadena extraída es: "${subcadena}"`);

