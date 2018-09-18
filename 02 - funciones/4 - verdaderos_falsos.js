/*
Un valor verdad/verdadero (truthy) es un valor que evalúa a verdadero en un
contexto booleano.

Todos los valores son considerador verdaderos a menos que sean definidos
falsos (falsy), por ej.  false, 0, "", null, undefined, and NaN.

NaN es un valor del tipo Number que significa que no es un número (Not-A-Number)

*/

if (true)       // verdadero
if ({})         // un objeto vacio
if ([])         // un arreglo vacio
if (42)         // un número
if ("foo")      // una cadena
if (new Date()) //
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
    console.log('todos los anteriores son verdaderos');


// los valores falsos false, 0 (cero) y "" (cadena vacía) son equivalentes
// y pueden compararse entre si
console.log('\n los valores falsos false, 0 (cero) y "" (cadena vacía) son equivalentes entre si');
console.log('false == 0:', (false == 0)); // true
console.log('false == "":', ( false == "")); // true
console.log('0 == "":', (0 == "")); // true

// los valores falsos null y undefined no son equivalentes a nada excepto a ellos mismos
console.log('\nnull y undefined solo son equivalentes a ellos mismos');
console.log('null == false:', (null == false)); // false
console.log('null == null:', (null == null)); // true
console.log('undefined == undefined:', (undefined == undefined)); // true
console.log('undefined == null:', (undefined == null)); // true

// NaN es equivalente a nada, ni siquiera a si mismo
console.log('\nNaN es equivalente a nada, ni siquiera a si mismo');
console.log('NaN == null:', (NaN == null));
console.log('NaN == NaN:', (NaN == NaN));
