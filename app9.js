const inputWord = prompt("Ingresa una palabra:");

const lowercaseWord = inputWord.toLowerCase();

let vowelCount = 0;

for (const letter of lowercaseWord) {
    if ("aeiou".includes(letter)) {
        vowelCount++;
    }
}

console.log(`La palabra "${inputWord}" tiene ${vowelCount} vocales.`);
