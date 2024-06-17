
//N1


let num = parseInt(prompt("Enter a number :: "))

document.write(`
№1<br>
${num}^2 = ${num**2}
<br>
`)

//N2

let av = 0;
for(let i = 0; i < 2; i++){
    av += parseFloat(prompt(`Enter a number #${i+1}`))
}
document.write(`Arithmetic average : ${av/2}`)

//N3

let len = parseFloat(prompt("Enter the side length of the square:"))

document.write(`№3 <br>  The area of a square is ${len*len}`)

//N4

let km =  parseFloat(prompt("Enter the distance in kilometers:"));
const conversionFactor = 0.621371;
document.write(`№4 <br> ${km} kilometers is equal to ${(km*conversionFactor).toFixed(2)} miles.`)


//N5

let nums = [];
for(let i = 0; i < 2; i++){
    nums.push(parseFloat(prompt(`Enter a number #${i+1}`)));
}

document.writeln(`№5<br>`)
document.writeln(`Addition:  ${nums[0]} + ${nums[1]} = ${nums[0]+nums[1]}<br>`);
document.writeln(`Subtraction: ${nums[0]} - ${nums[1]} = ${nums[0]-nums[1]}<br>`);
document.writeln(`Multiplication: ${nums[0]} * ${nums[1]} = ${nums[0]*nums[1]}<br>`);
document.writeln(`Division: ${nums[0]} / ${nums[1]} = ${nums[0]/nums[1]}<br>`);


//N6 

//ax+b=0
// x = -b/a
// a = 3 b= 9
// 3x+9 = 0
// x+3 = 0 
// x = -3


let a = parseFloat(prompt("Enter the value of a:"));
let b = parseFloat(prompt("Enter the value of b:"));


if (a !== 0) {
    let x = -b / a;
    document.write(`The value of x in the equation ${a} * x + b = 0 is ${x}`);

}else{
    alert("Error: The value of 'a' cannot be zero in a linear equation.");
}


// N7
let currentHour = prompt("Enter the current hour:");
let currentMinute = prompt("Enter the current minute:");


currentHour = parseInt(currentHour);
currentMinute = parseInt(currentMinute);


if (isNaN(currentHour) || isNaN(currentMinute) || currentHour < 0 || currentHour > 23 || currentMinute < 0 || currentMinute > 59) {
    alert("Error: Invalid input. Please enter valid hours (0-23) and minutes (0-59).");
} else {
    let hoursLeft = 23 - currentHour;
    let minutesLeft = 59 - currentMinute;
    document.write(`№7<br>`)
    document.write("Time left until the next day: " + hoursLeft + " hours and " + minutesLeft + " minutes.<br>");
}

// N8
let three = prompt("Enter a three-digit number:");


let secondDigit = parseInt((three % 100) / 10);


document.write(`№8<br>The second digit of ${three} is ${secondDigit}.<br>`);


let five = prompt("Enter a five-digit number:");
if (five.length !== 5 || isNaN(five)) {
    alert("Error: Please enter a valid five-digit number.<br>");
} else {
    let lastDigit = five % 10;
    let remainingDigits = parseInt(five / 10); 
    document.write(`№9<br>The transformed number is ${parseInt(lastDigit.toString() + remainingDigits.toString())}.<br>`);
}
