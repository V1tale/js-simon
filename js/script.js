// CREO 5 NUMERI CASUALI TRAMITE FUNZIONE
// INITIALIZING
const start = addEventListener("click", function () {
    let numbersArray = [];
    for(i=0;i < 5; i++) {
        let numbers = randomNumber(1, 100);
        numbersArray.push(numbers);        
    }
console.log(numbersArray);
// FACCIO APPARIRE I NUMERI IN PAGINA
const title = document.getElementById("randomNumbers");
title.append(numbersArray);
// IMPOSTO UN TIMER DI 30 SECONDI
// FACCIO SPARIRE I NUMERI DALLA PAGINA
let timer = setTimeout(cleaner, 3000);
// INPUT
// L'UTENDE DEVE INSERIRE I NUMERI TRAMITE PROMPT
setTimeout( function () {
    let userNumbers = prompts(5);
    console.log(userNumbers);
    // PROCESSING
    // CONFRONTO I NUMERI DIGITATI CON QUELLI APPARSI IN PRECEDENZA
    // let validNumbers = compareArrays(numbersArray, userNumbers)
    let validNumbers = CompareArrays(numbersArray, userNumbers);
    console.log(validNumbers);
    // OUTPUT
    // COMUNICO QUANTI DI QUESTI NUMERI SONO GIUSTI
    let resultString = document.getElementById("result")
    resultString.innerHTML = `Ne hai indovinate: ${validNumbers.length}`;
    let rightNumbers = document.getElementById("valid-numbers");
    rightNumbers.innerHTML = `I numeri giusti: ${validNumbers}`

}, 3000);

// FUNCTIONS

function randomNumber (min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}

function cleaner(string) {
    title.classList.add("hidden");
}
function prompts() {
    let userNumbersResult = [];
    for(i=0; i<5; i++) {
        userNumArray = prompt("inserisci un numero")
        userNum = parseInt(userNumArray);
        userNumbersResult.push(userNum);
    }
    return userNumbersResult;
}
function CompareArrays(arrayOne, arrayTwo) {
    const result = [];
    for (let i = 0; i < arrayOne.length; i++) {
        const thisNumber = arrayOne[i];
        if (arrayTwo.includes(thisNumber)) {
            result.push(thisNumber);
        }
    }
    return result;
}
})