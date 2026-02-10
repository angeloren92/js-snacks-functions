/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * ## Trova le vocali nella parola
 * @param {string} string -valore atteso, una parola
 * @returns restituiamo un array con le vocali trovate nella stringa
 */
function findVowels(string) {
    const vowels = [];
    for (let i = 0; i < string.length; i++) {
        switch (string[i].toLowerCase()) {  //utilizziamo lo switch per verificare più casi di una variabile
            case 'a': vowels.push(string[i]);
                break;
            case 'e': vowels.push(string[i]);
                break;
            case 'i': vowels.push(string[i]);
                break;
            case 'o': vowels.push(string[i]);
                break;
            case 'u': vowels.push(string[i]);
                break;
        }
    }
    return vowels;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//arrow function
const vowels = string => {
    const vowels = [];
    for (let i = 0; i < string.length; i++) {
        switch (string[i].toLowerCase()) {
            case 'a': vowels.push(string[i]);  
            break;            
            case 'e': vowels.push(string[i]);
            break;            
            case 'i': vowels.push(string[i]);
            break;            
            case 'o': vowels.push(string[i]);
            break;            
            case 'u': vowels.push(string[i]);
            break;            
        }
    }
    return vowels;
}
console.log(vowels(word));