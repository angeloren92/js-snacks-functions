/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * ## Find the words with the first letter
 * @param {arrow} arr - inserisci una arrow con delle stringhe 
 * @param {string} initial - inserisci la lettera-iniziale da ricercare nell'arrow
 * @returns restituisce gli elementi dell'arrow che contengono come iniziale la lettera inserita
 */
function findWordsWithInitial (arr, initial) {
    const wordsWithInitial = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toUpperCase() === initial.toUpperCase()) {
        let wordWithInitial = arr[i];
        wordsWithInitial.push(wordWithInitial);
        }
    }
    return wordsWithInitial;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findWordsWithInitial(names, 'a'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//arrow function
const wordsWithInitial = (arr, initial) => {
    const wordsWithInitial = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toUpperCase() === initial.toUpperCase()) {
        let wordWithInitial = arr[i];
        wordsWithInitial.push(wordWithInitial);
        }
    }
    return wordsWithInitial;
}
console.log(wordsWithInitial(names, 'a'));