const inputWord = prompt("Ingresa una palabra:");

const lowercaseWord = inputWord.toLowerCase();

const reversedWord = lowercaseWord.split("").reverse().join("");

if (lowercaseWord === reversedWord) {
    console.log(`¡"${inputWord}" es un palíndromo! 🎉`);
} else {
    console.log(`"${inputWord}" no es un palíndromo. 😔`);
}
