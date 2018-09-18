/*
Sólo puede haber un método especial con el nombre de "constructor" en una clase.
Un error de sintaxis  será lanzada, si la clase contiene más de una ocurrencia
de un método constructor.

Un constructor puede utilizar la palabra clave super para llamar al constructor
de una clase padre.

Si no especifica un método constructor, se utiliza un constructor predeterminado.
*/

class Poligono {
  constructor(alto, ancho) {
    this.nombre = 'Polígono';
    this.alto = alto;
    this.ancho = ancho;
  }

  // Simple class instance methods using short-hand method
  // declaration
  decirNombre() {
    console.log(`Hola, soy un ${this.nombre}.`);
  }

  decirHistoria() {
    console.log('"Polígono" es derivado del griego polus (muchos) y gonia (ángulo).');
  }
}

let p = new Poligono(300, 400);
p.decirNombre();
console.log(`El ancho de este polígono es ${p.ancho}`);

// extendiendo una clase
class Cuadrado extends Poligono {
    constructor(largo) {
        super(largo, largo);
        this.nombre = 'Cuadrado';
        this._area = 0;
        this.calculaArea();
    }

    calculaArea() {
        this._area = this.ancho*this.ancho;
    }

    get area() {
        return this._area;
    }

    set lado(valor) {
        this.ancho = valor;
        this.largo = valor;
        this.calculaArea();
    }

    perimetro() {
        return this.ancho*4;
    }
}

let c = new Cuadrado(5);
c.decirNombre();
console.log(`El perímetro de este cuadrado es ${c.perimetro()}`);
console.log(`El área de este cuadrado es ${c.area}`);

c.lado = 10;
console.log(`El área de este cuadrado es ${c.area}`);
