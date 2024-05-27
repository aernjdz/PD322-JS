class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
      this.fontSize = fontSize;
      this.fontColor = fontColor;
      this.fontFamily = fontFamily;
    }
  
    print(text) {
      document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
    }
  }

  
const myPrinter = new PrintMachine('20px', 'red', 'Arial');
myPrinter.print("Test Task1");