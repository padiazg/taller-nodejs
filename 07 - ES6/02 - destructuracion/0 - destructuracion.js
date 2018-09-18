/*
La sintaxis de destructuring assignment es una expresión de JavaScript que hace
posible la extracción de datos de arreglos u objetos usando una sintaxis que
equivale a la construcción de arreglos y objetos literales

Sintaxis
[a, b] = [1, 2]
{a, b} = {a:1, b:2}


Algo particularmente útil que puedes hacer con destructuring assignment es leer
una estructura completa en una sola sentencia
*/

var foo = ["uno", "dos", "tres"];
console.log('foo:', foo);

// sin destructuring
var uno  = foo[0];
var dos  = foo[1];
var tres = foo[2]; // asignación en tres lineas

console.log('sin destructuración | uno:', uno, ' | dos:', dos, ' | tres:', tres);

// con destructuring
var [uno, dos, tres] = foo; // asignación en una sola linea
console.log('con destructuración | uno:', uno, ' | dos:', dos, ' | tres:', tres);

// asignación sin declaración
console.log('\nasignación sin declaración');
var x, y;
[x, y] = [1, 2];
console.log('x =', x, ' y =', y);

// intercambiando orden de variables
console.log('\nintercambiando orden de variables');
var a = 1;
var b = 3;
console.log('antes: a=', a, ' b=', b);
[a, b] = [b, a];
console.log('despues: a=', a, ' b=', b);

// Multiples valores de retorno
console.log('\nMultiples valores de retorno')
function f() {
  return [1, 2];
}

var c, d;
[c, d] = f();
console.log("C es", c, "D es", d);

var e = f();
console.log("E es ", e);
console.log("E instanceof Array:", e instanceof Array); // e es un array

// Ignorando algunos valores de retorno
function g() {
  return [1, 2, 3];
}

var [a, , b] = g();
console.log("A es " + a + " B es " + b);

/*
destructuración
*/
console.log('\nDestructuracion con Rest');
var a;
var b;
var c;
[a, b, ...c] = [1, 2, 3, 4, 5];

console.log('a=', a);
console.log('b=', b);
console.log('c=', c);
