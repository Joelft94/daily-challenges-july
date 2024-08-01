class CuentaBancaria {
    constructor(saldoInicial = 0) {
      this.saldo = saldoInicial;
    }
  
    depositar(monto) {
      if (monto > 0) {
        this.saldo += monto;
        console.log(`Depositado: ${monto}. Saldo actual: ${this.saldo}.`);
      } else {
        console.log("El monto a depositar debe ser positivo.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo actual: ${this.saldo}.`);
      return this.saldo;
    }
  }
  
  const cuenta = new CuentaBancaria(100);
  
  cuenta.consultarSaldo(); 
  cuenta.depositar(50); 
  cuenta.consultarSaldo();
  cuenta.depositar(-20); 
  