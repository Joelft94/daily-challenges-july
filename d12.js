// Base class Figura
class Figura {
    constructor() {
      // Any common properties for all figures can be initialized here
    }
  
    // Method to print the type of the figure
    print() {
      console.log("Soy una figura.");
    }
  }
  
  
class Circulo extends Figura {
    constructor(radio) {
      super(); 
      this.radio = radio; 
    }
    
    print() {
      console.log(`Soy un circulo con radio ${this.radio}.`);
    }
  }
  
  
  const figura = new Figura();
  figura.print(); 
  
  const circulo = new Circulo(5);
  circulo.print(); 
  