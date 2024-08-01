// Class Motor
class Motor {
    constructor(tipo, potencia) {
      this.tipo = tipo;       
      this.potencia = potencia; 
    }
  
    // Method to describe the motor
    describir() {
      return `Motor tipo ${this.tipo} con ${this.potencia} caballos de fuerza.`;
    }
  }
  
  // Class Auto
  class Auto {
    constructor(marca, modelo, tipoMotor, potenciaMotor) {
      this.marca = marca;               
      this.modelo = modelo;             
      this.motor = new Motor(tipoMotor, potenciaMotor); 
    }
  
    
    describirAuto() {
      return `Auto ${this.marca} ${this.modelo} con ${this.motor.describir()}.`;
    }
  }
  
 
  const auto = new Auto('Toyota', 'Corolla', 'gasolina', 150);
  
  console.log(auto.describirAuto()); 
  