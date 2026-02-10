/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
/**
 * ## Hello World
 * @param {string} nome - inserisci un nome 
 * @returns restituisce un saluto + nome
 */
function helloWorld (nome) {
    return `Ciao ${nome} `;
}

//arrow function
const helloWorld2 = name => `Ciao ${name}`

// Invoca la funzione qui e stampa il risultato in console

const saluti = helloWorld(userName);
console.log(saluti);
//arrow function log
console.log(helloWorld2(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

const saluti2 = helloWorld('Mario');
console.log(saluti2);
//arrow function log
console.log(helloWorld2('Mario'));