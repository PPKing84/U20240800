const inputFrase = prompt("Ingresa una frase:");

const fraseLimpia = inputFrase.trim();

const palabras = fraseLimpia.split(" ");

const palabrasNoVacias = palabras.filter((palabra) => palabra !== "");

const numeroPalabras = palabrasNoVacias.length;

console.log(`La frase tiene ${numeroPalabras} palabras.`);
