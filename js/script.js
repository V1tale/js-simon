// CONSEGNA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// CREO 5 NUMERI CASUALI TRAMITE FUNZIONE
let numbersArray = [];
for(i=0;i < 5; i++) {
    let numbers = randomNumber(1, 100);
    numbersArray.push(numbers);
    
}
console.log(numbersArray);
// FACCIO APPARIRE I NUMERI IN PAGINA
let title = document.getElementById("randomNumbers");
title.append(numbersArray);
// IMPOSTO UN TIMER DI 30 SECONDI
// FACCIO SPARIRE I NUMERI DALLA PAGINA
let timer = setTimeout(cleaner, 2000);
// L'UTENDE DEVE INSERIRE I NUMERI TRAMITE PROMPT
let userNumbers = [];
let input = setTimeout(prompts, 2000);
console.log(userNumbers);
// CONFRONTO I NUMERI DIGITATI CON QUELLI APPARSI IN PRECEDENZA
let validNumbers = [];
for(i = 0; i < 5; i++) {
    if (numbersArray.includes(userNumbers[i])) {
        validNumbers.push(userNumbers[i]);
    }
}
console.log(validNumbers);
// COMUNICO QUANTI DI QUESTI NUMERI SONO GIUSTI






// FUNCTIONS

function randomNumber (min, max) {
return (Math.floor(Math.random() * (max - min) + min));
}

function cleaner(string) {
    title.classList.add("hidden");
}

function prompts(){
    for(i=0; i<5; i++) {
        userNumArray = prompt("inserisci un numero")
        userNum = parseInt(userNumArray);

        userNumbers.push(userNum);
    }

    
    return userNumbers;
}