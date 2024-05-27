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
const myPrinter2 = new PrintMachine("20px","green","Time New Roman")
myPrinter.print("Test1 Task1");
myPrinter2.print("Test2 Task1");