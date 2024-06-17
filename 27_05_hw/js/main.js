class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error("Radius must be a positive number.");
    }
  }

  get diameter() {
    return this._radius * 2;
  }

  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }


  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }

  print() {
    document.write(`
    <div>
    <h2> Circle Info</h2>
    <div style="display:grid; grid-template-columns: 1fr 1fr">
    <div style="max-width:500px">
    <svg viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle  cx="20" cy="20" r="20" fill="none" stroke="green" stroke-width="0.2"/>
    <text x="20" y="20" text-anchor="middle" fill="black" font-size="6px">Radius: ${this.radius}</text>
    
    </svg>
    </div>
    <div> 
    <p style="margin:5px"><span>Diameter: ${this.diameter}</span></p>
    <p style="margin:5px"><span>Area: ${this.calculateArea()}</span></p>
    <p style="margin:5px"><span>Circle Length: ${this.calculateCircumference()}</span></p>
    </div>
    </div>
    </div>`
    );
  }
}
const myCircle = new Circle(10);
myCircle.print();
myCircle.radius = 4;
myCircle.print();




