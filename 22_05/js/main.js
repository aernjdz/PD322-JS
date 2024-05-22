
// N1
let n = prompt("Enter a number");
n = parseInt(n);

while(n > 0){
    document.write('#');
    n--;
}
document.write('<br>');

// N2

let num_0 = prompt("Enter a number");
num_0 = parseInt(num);

while(num_0 >=0 ) {
    document.write(`${num_0} `) 
    num_0 --;
}

// N3

let base = parseInt(prompt("Enter a number"));
let exp = parseInt(prompt("Enter exponentEnter the power of the number:"));


let res = 1;

while (exp > 0){
    res *= base;
    exp--;
}
document.write(`Result :${res}`);

// N4
let num_1 = parseInt(prompt("Enter a first number:"));
let num_2 = parseInt(prompt("Enter a second number"));

let min_num = num_1 < num_2 ? num_1 : num_2;
let it = 1;

while (it <= min) {
    if (num_1 % it === 0 && num_2 % it === 0) {
        document.write(i + " ");
    }
    it++;
}

// N5

let number = parseInt(prompt("Enter a number"));

let fac = 1;
let i = 1;
while (i <= number) {
    fac *= i;
    i++;
}

document.write(`${number}! = ${fac}`);

// N6
let answer;
do{
    answer = prompt("Solve:  2 + 2 * 2 = ?");
}while(answer !== 6)
alert("Solved!");

// N7

let start = 1000;
let point = 0;

do{
    start /= 2
    point++;
}while(start >= 50);

alert(`Received number: ${start}`);
alert(`Number of divisions: ${point}`);

N8

let multiple =  parseInt(prompt("Enter a number:"));
for (let i = 1; i <= 100; i++) {
    if (i % multiple === 0) {
        document.write(i + " ");
    }
}

// N9
let min = prompt("Enter a min range value:");
let max = prompt("Enter a max range value:");
min = parseInt(min);
max = parseInt(max);

for (let i = min; i <= max; i += 4) {
    document.write(i + " ");
}

//N10

let num = parseInt(prompt("Enter a number:"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) alert(`${num} is a prime number.`); else alert(`${num} is not a prime number.`);
