
class Car {
    constructor(manufacturer, model, year, averageSpeed) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.averageSpeed = averageSpeed;
    }
  
    displayInfo() {
      document.write(`Name: ${this.manufacturer}<br>`);
      document.write(`Model: ${this.model} <br>`);
      document.write(`Year: ${this.year} <br>`);
      document.write(`Average Speed: ${this.averageSpeed}<br>`);
    }
  
    calculateTravelTime(distance) {
      const drivingHours = distance / this.averageSpeed;
      const breaks = Math.floor(drivingHours / 4);
      const totalHours = drivingHours + breaks;
      return totalHours;
    }
  }
  

  const car = new Car("Toyota", "Camry", 2020, 60);
  

  document.write(`<h4>Task №1</h4> <br>`);
  car.displayInfo();
  

  const distance = 450;
  const travelTime = car.calculateTravelTime(distance);
  document.write(`The required time to cover the distance ${distance} km: ${travelTime.toFixed(2)} hours <br>`);
  
//№2

document.write(`<br><h4>Task №2</h4> <br>`)


class Fraction {
    constructor(num, denom) {
      this.num = num;
      this.denom = denom;
      this.simplify();
    }
  
    gcd(a, b) {
      if (b === 0) return a;
      return this.gcd(b, a % b);
    }
  
    simplify() {
      const greatestCommonDivisor = this.gcd(this.num, this.denom);
      this.num /= greatestCommonDivisor;
      this.denom /= greatestCommonDivisor;
    }
  
    add(other) {
      const newNum = this.num * other.denom + other.num * this.denom;
      const newDenom = this.denom * other.denom;
      return new Fraction(newNum, newDenom);
    }
  
    subtract(other) {
      const newNum = this.num * other.denom - other.num * this.denom;
      const newDenom = this.denom * other.denom;
      return new Fraction(newNum, newDenom);
    }
  
    multiply(other) {
      const newNum = this.num * other.num;
      const newDenom = this.denom * other.denom;
      return new Fraction(newNum, newDenom);
    }
  
    divide(other) {
      const newNum = this.num * other.denom;
      const newDenom = this.denom * other.num;
      return new Fraction(newNum, newDenom);
    }
  
    toString() {
      return `\\(\\frac{${this.num}}{${this.denom}}\\)`;
    }
  }
  

  const fr1 = new Fraction(1, 2);
  const fr2 = new Fraction(5, 6);
  
 document.write(`Add: <br> ${fr1.toString()} + ${fr2.toString()} = ${fr1.add(fr2).toString()} <br>`);
  document.write(`Subtract: <br> ${fr1.toString()} - ${fr2.toString()} =  ${fr1.subtract(fr2).toString()} <br>`);
  document.write(`Multiply: <br> ${fr1.toString()} * ${fr2.toString()} = ${fr1.multiply(fr2).toString()} <br>`);
  document.write(`Divide: <br> ${fr1.toString()} / ${fr2.toString()} =  ${fr1.divide(fr2).toString()} <br>`);

  document.write(`<br><h4>Task №3</h4> <br>`)

  class Time {
    constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  
  
    displayTime() {
      return`${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
    }
  
  
    addSeconds(seconds) {
      this.seconds += seconds;
      this.normalizeTime();
    }

    addMinutes(minutes) {
      this.minutes += minutes;
      this.normalizeTime();
    }
  
    
    addHours(hours) {
      this.hours += hours;
      this.normalizeTime();
    }
  
  
    normalizeTime() {
      
      if (this.seconds >= 60) {
        this.minutes++;
        this.seconds -= 60;
      } else if (this.seconds < 0) {
        this.minutes--;
        this.seconds += 60;
      }
  
   
      if (this.minutes >= 60) {
        this.hours++;
        this.minutes -= 60;
      } else if (this.minutes < 0) {
        this.hours--;
        this.minutes += 60;
      }
  
     
      if (this.hours >= 24) {
        this.hours -= 24;
      } else if (this.hours < 0) {
        this.hours += 24;
      }
    }
  }
  

  const time = new Time(20, 30, 45);
  

  document.write(`Initial time: <br> ${time.displayTime()}<br>`);
  
  document.write(`Add 30 seconds: <br>`);
  time.addSeconds(30);
  document.write(`${time.displayTime()} <br>`);
  

  document.write(`Add 10 minutes: <br>`);
  time.addMinutes(10);
  document.write(`${time.displayTime()} <br>`);

  document.write(`Add 2 hours: <br>`);
  time.addHours(2);
  document.write(`${time.displayTime()} <br>`);;
  

  document.write(`Subtract 5 minutes and 30 seconds: <br>`);
  time.addMinutes(-5);
  time.addSeconds(-30);
  document.write(`${time.displayTime()} <br>`);
  