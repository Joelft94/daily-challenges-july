class Punto2D {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    
    printCoordinates() {
      console.log(`Punto2D: (${this.x}, ${this.y})`);
    }
  }
  
  
  const point = new Punto2D(3, 4);
  point.printCoordinates();
  