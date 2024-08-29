// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if (num1>num2){
        return num1;
    }else if (num1<num2){
        return num2;
    }else if (num1===num2){
        return num1;
    }else {
        return "oops, something went wrong"
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

let maxCharFound="";

function findLongestWord(arrWords) {

    if (arrWords.length === 0) {
        return null;
    }
    
    maxCharFound = arrWords[0];
    
    for (let i = 1; i < arrWords.length; i++) {
        if (arrWords[i].length > maxCharFound.length) {
            maxCharFound = arrWords[i];
        }
    }
    
    return maxCharFound;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum;

function sumNumbers(arrNumbers) {
    if (arrNumbers.length === 0) {
        return 0;
    }
    
    sum = arrNumbers[0];

    for (let i = 1; i < arrNumbers.length; i++) {
        sum += arrNumbers[i];
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbersAvg) {

    if (arrNumbersAvg.length === 0) {
        return 0;
    }

    let sumAllNumbers = sumNumbers(arrNumbersAvg);
    return sumAllNumbers / arrNumbersAvg.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, word) {
    console.log(arrWords);
    console.log(word);

    if (arrWords.length === 0) {
        return null;
    }

    if(arrWords.includes(word)){
        return true;
    }

    return false;
}
