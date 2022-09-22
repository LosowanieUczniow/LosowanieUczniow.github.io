let btn = document.querySelector('button');
let output = document.querySelector('#output');
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
function createArrayOfNumbers(start, end){
    let myArray = [];
    for(let i = start; i <= end; i++) { 
        myArray.push(i);
    }
    return myArray;
}
let numbersArray = createArrayOfNumbers(1,18);
btn.addEventListener('click', () => {
    if(numbersArray.length == 0){
        output.innerText = 'Zostało już wylosowane 18 uczniów aby odnowić stronę kliknij na klawiaturze F5' ;
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1)
    output.innerText = randomNumber;
});