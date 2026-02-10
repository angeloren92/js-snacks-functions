/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 * ## Trova l'iniziale
 * @param {array} arr - inserisci un array con stringhe
 * @returns restituisce la prima lettera di ogni elemento nell'array
 */
function getInitials (arr) {
    const initials = [];
    for (let i = 0 ; i < arr.length ; i++) {
        let char = arr[i][0];
        initials.push(char);
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//arrow function
const initials = arr => {
    const initials = [];
    for (let i = 0 ; i < arr.length ; i++) {
        let char = arr[i][0];
        initials.push(char);
    }
    return initials;
}
console.log(initials(names))