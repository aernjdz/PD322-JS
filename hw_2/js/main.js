//№1

let num_1 = parseFloat(prompt("Enter a number #1:"))
let num_2 = parseFloat(prompt("Enter a number #2:"))


function solve(a,b){
    if (a == b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
}



alert(solve(num_1,num_2)) 

//№2


function factorial(n){
    if (n < 0 ) return "Factorial for negative numbers is not defined";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); //120

//№3

function combineDigits(digit1, digit2, digit3) {
    if ([digit1, digit2, digit3].every(d => Number.isInteger(d) && d >= 0 && d <= 9)) {
      
        let combinedNumber = digit1 * 100 + digit2 * 10 + digit3;
        return combinedNumber;
    } else {
        throw new Error("All entered values must be digits from 0 to 9");
    }
}
console.log(combineDigits(1, 4, 9));  // 149



//№4

function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;  // Calculate area of a square
    } else {
        return length * width;  
    }
}

console.log(calculateArea(5));  // 25
console.log(calculateArea(5, 3));  // 15

//№5

function isPerfectNumber(n) {
    if (n < 2) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}


console.log(isPerfectNumber(6));  // true
console.log(isPerfectNumber(10));  // false

//№6

function perfectNumbersInRange(minVal, maxVal) {
    let perfectNumbers = [];
    for (let n = minVal; n <= maxVal; n++) {
        if (isPerfectNumber(n)) {
            perfectNumbers.push(n);
        }
    }
    return perfectNumbers;
}


console.log(perfectNumbersInRange(1, 1000));  // Output: [6, 28, 496]

//№7
function formatTime(hours, minutes = 0, seconds = 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// a task that I love xD
console.log(formatTime(5, 30));  // Output: "05:30:00"
console.log(formatTime(5, 30, 25));  // Output: "05:30:25"


//№8

function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}


console.log(timeToSeconds(1, 30, 45));  // Output: 5445

//№9
function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


console.log(secondsToTime(5445));  // Output: "01:30:45"

//№10
function dateDifference(h1, m1, s1, h2, m2, s2) {
    let seconds1 = timeToSeconds(h1, m1, s1);
    let seconds2 = timeToSeconds(h2, m2, s2);
    let difference = Math.abs(seconds1 - seconds2);
    return secondsToTime(difference);
}


console.log(dateDifference(1, 30, 45, 2, 45, 55));  // Output: "01:15:10"