function min(a, b) {
    return a < b ? a : b;
}
document.write("Task 1: " + min(3, 5) + "<br>"); 


function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
document.write("Task 2: " + power(2, 3) + "<br>"); 


function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}
document.write("Task 3: " + calculate(4, 2, '+') + "<br>"); 
document.write("Task 3: " + calculate(4, 2, '-') + "<br>"); 
document.write("Task 3: " + calculate(4, 2, '*') + "<br>"); 
document.write("Task 3: " + calculate(4, 2, '/') + "<br>"); 


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
document.write("Task 4: " + isPrime(5) + "<br>"); 
document.write("Task 4: " + isPrime(4) + "<br>"); 

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        document.write(`${num} * ${i} = ${num * i}<br>`);
    }
}
for (let i = 2; i <= 9; i++) {
    document.write(`Multiplication table for ${i}:<br>`);
    multiplicationTable(i);
    document.write("<br>");
}


function modulo(a, b) {
    return a - Math.floor(a / b) * b;
}
document.write("Task 6: " + modulo(10, 3) + "<br>"); 


function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
document.write("Task 7: " + sum(1, 2, 3, 4, 5) + "<br>"); 


function max(...numbers) {
    let maxNum = numbers[0];
    for (let num of numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}
document.write("Task 8: " + max(1, 2, 3, 4, 5) + "<br>"); 


function printNumbersInRange(min, max, even) {
    for (let i = min; i <= max; i++) {
        if (even && i % 2 === 0) {
            document.write(i + " ");
        } else if (!even && i % 2 !== 0) {
            document.write(i + " ");
        }
    }
    document.write("<br>");
}
document.write("Task 9 (even): ");
printNumbersInRange(1, 10, true); 

document.write("Task 9 (odd): ");
printNumbersInRange(1, 10, false); 


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNextDay(day, month, year) {
    let daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    day++;
    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    
    return `${day}.${month}.${year}`;
}
document.write("Task 10: " + getNextDay(28, 2, 2020) + "<br>"); 
document.write("Task 10: " + getNextDay(28, 2, 2021) + "<br>"); 
document.write("Task 10: " + getNextDay(31, 12, 2021) + "<br>"); 