/*
los objetos pueden definirse con la siguiente sintaxis:

var objeto = {
    nombre1: valor1,
    nombre2: valor2,
    ...
}

*/

var objeto1 = {
    a: 1,
    b: 2
}

console.log('objeto1', objeto1);

/*
podemos acceder a sus elementos de varias formas, las mas comúnes son:

objeto.nombre y objeto['nombre']
*/
console.log('objeto1.a=', objeto1.a);
console.log('objeto1.b=', objeto1['b']);

// podemos agregar elementos simplemente asignándoles valores
objeto1.c = 4;
console.log('agregamos objeto1.c=', objeto1.c);

objeto1['d'] = 6;
console.log("agregamos objeto1['d']=", objeto1.d);

// si intentamos acceder a un elemento no inicializado, simplemente obtendremos
// undefined
console.log('intentamos ver un elemento inexistente: objeto1.e=', objeto1.e);

// pero no se altera el objeto
console.log('el objeto no se altera: objeto1', objeto1);

objeto1.e = undefined;
console.log('el objeto no se altera: objeto1', objeto1);

console.log('\nlos elementos pueden ser de tipos complejos, como arreglos, otros objetos, incluso funciones');
var objeto2 = {
    arreglo1: ['Arsenio', 'Hugo', 'Juan', 'Jose', 'Magdalena', 'Miguel'],
    arreglo2: [15, 5, 6, 7, 21, 120, 30],
    conteo: {
        q1: 0,
        q2: 0
    },
    contar: function() {
        this.conteo.q1 = this.arreglo1.length;
        this.conteo.q2 = this.arreglo2.length;
    },
    getConteo: function() {
        return this.conteo;
    },
    getConteoArreglo1: function() {
        return this.conteo.q1;
    },
    getConteoArreglo2: function() {
        return this.conteo.q2;
    }
} // objeto2

console.log('objeto2=', objeto2);

console.log('\ntambién podemos asignar funciones como elementos');

objeto2.contar();
console.log('objeto2=', objeto2);
console.log('objeto2.getConteo()=', objeto2.getConteo());
console.log('objeto2.getConteoArreglo1()=', objeto2.getConteoArreglo1());
console.log('objeto2.getConteoArreglo2()=', objeto2.getConteoArreglo2());

// definir un contructor
function ConstructorObjeto(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.getX = function() {
        return this.x;
    }
    this.getY = function() {
        return this.y;
    }
    this.getZ = function() {
        return this.z;
    }
}

var obj1 = new ConstructorObjeto(2, 3, 4);
console.log('obj1 =', obj1);
console.log('obj1.getX() =', obj1.getX());
console.log('obj1.getY() =', obj1.getY());
console.log('obj1.getZ() =', obj1.getZ());

var obj2 = new ConstructorObjeto(5, 6, 7);
console.log('obj2 =', obj2);
console.log('obj2.getX() =', obj2.getX());
console.log('obj2.getY() =', obj2.getY());
console.log('obj2.getZ() =', obj2.getZ());

function sumarObjetos(o1, o2) {
    var x0 = o1.getX() + o2.getX();
    var y0 = o1.getY() + o2.getY();
    var z0 = o1.getZ() + o2.getZ();

    return new ConstructorObjeto(x0, y0, z0);
}

var obj3 = sumarObjetos(obj1, obj2);
console.log('obj3 =', obj3);
