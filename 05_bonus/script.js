/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
/**
 * ## HelloWorld formale in base all'orario
 * @param {string} string -inserisci un nome
 * @returns restituisce un saluto formale con il nome da salutare
 */
function helloWorld (string) {
    let text;
    const time = new Date();
    const hh = time.getHours();

    if (hh < 13) {
        text = "Buongiorno, ";
    } else if (hh >= 13 && hh < 17) {
        text = "Buon Pomeriggio, ";
    } else {
        text = "Buonasera, ";
    }
    return text + string;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(helloWorld(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


//arrow function
const helloWorld2 = string => {
    let text;
    const time = new Date();
    const hh = time.getHours();
    if (hh < 13) {
        text = "Buongiorno, ";
    } else if (hh >= 13 && hh < 17) {
        text = "Buon Pomeriggio, ";
    } else {
        text = "Buonasera, ";
    }
    return text + string;
}
console.log(helloWorld2(name));