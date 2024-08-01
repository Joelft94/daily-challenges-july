// Base class FormaGeometrica
class FormaGeometrica {
    calcularArea() {
      throw new Error("Método 'calcularArea' no implementado.");
    }
  
    calcularPerimetro() {
      throw new Error("Método 'calcularPerimetro' no implementado.");
    }
  }
  
  
  class Rectangulo extends FormaGeometrica {
    constructor(base, altura) {
      super(); 
      this.base = base;    
      this.altura = altura;
    }
  
    
    calcularArea() {
      return this.base * this.altura;
    }
  
    
    calcularPerimetro() {
      return 2 * (this.base + this.altura);
    }
  }
  
 
  class Circulo extends FormaGeometrica {
    constructor(radio) {
      super();
      this.radio = radio; 
    }
  
    
    calcularArea() {
      return Math.PI * this.radio * this.radio;
    }
  
    
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  

  const rectangulo = new Rectangulo(5, 10);
  console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`); 
  console.log(`Perímetro del rectángulo: ${rectangulo.calcularPerimetro()}`); 
  
  const circulo = new Circulo(7);
  console.log(`Área del círculo: ${circulo.calcularArea()}`); 
  console.log(`Perímetro del círculo: ${circulo.calcularPerimetro()}`);
  