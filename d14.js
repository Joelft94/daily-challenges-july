// Base class Animal
class Animal {
    constructor(name='Loki') {
        this.name = name;
    }
  
    // Method to make a sound
    hacerSonido() {
      console.log("El animal hace un sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor() {
      super(); 
    }
  
    hacerSonido() {
      console.log("Guau guau");
    }
  }
  
  const animal = new Animal();
  animal.hacerSonido(); 
  
  const perro = new Perro();
  perro.hacerSonido();
  