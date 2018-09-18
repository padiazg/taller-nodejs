/*
El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso
valores primitivos u objetos de referencia.

Sintaxis

let variable = new Set([iterable]);

Parámetros
iterable
    Si un objeto iterable es pasado, todos sus elementos serán añadidos a un
    nuevo Set. null es tratado como `undefined`.

Descripción
Los objetos Set son colecciones de valores, se puede iterar sus elementos en el
orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es
único en la colección Set.

Igualdad de valores
Ya que cada valor en el Set tiene que ser único, la igualdad del valor será
comprobada y esta igualdad no se basa en el mismo algoritmo usado en el
operador ===.

Específicamente, para Sets, +0 (el cual es estrictamente igual a -0) y -0 son
valores distintos. Sin embargo, esto ha cambiado en la  última especificación
ECMAScript 6. Iniciando con Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)
(bug 952870) y un recent nightly Chrome, +0 y -0 son tratados como el mismo
valor en objetos Set.

NaN y undefined también pueden ser almacenados en un Set. NaN es considerado
igual que NaN (A pesar que NaN !== NaN).

Propiedades

Set.size
    Retorna el número de valores en el objeto Set.

Métodos

Set.add(valor)
    Agrega un nuevo elemento con el valor dado al objeto Set. Retorna el objeto Set.
Set.clear()
    Remueve todos los elementos dell objeto Set.
Set.delete(valor)
    Remueve el elemento asociado al valor y retorna el valor que Set.has(valor)
    hubiera retornado previamente. Set.has(valor) retornará falso despues de esto.
Set.entries()
    Retorna un nuevo objeto Iterator que contiene un arreglo tipo [valor, valor]
    por casa elemento del objeto Set, en su orden de inserción. Esto es para
    mantenerlo similar al objeto Map, así cada entrada tiene el mismo valor para
    su par clave/valor aquí.
Set.forEach(callbackFn[, thisArg])
    Llama a callbackFn una vez por cada valor presente en el objeto Set, en su
    órden de inserción. Si se especifica el parámetro thisArg al forEach, este
    será usado como el valor de this para cada callback.
Set.has(valor)
    Retorna un valor booleano confirmando si un elemento con el valor dado está
    presente o no en el objeto Set.
Set.keys()
    Es la misma función que values() y retorna un nuevo objeto Iterator que
    contiene los valores de cada elemento en el objeto Set, en su órden de inserción.
Set.values()
    Retorna un nuevo objeto Iterator que contiene los valores de cada elemento
    en el objeto Set, en su órden de inserción.
*/

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("algún texto");
var o = {a: 1, b: 2};
mySet.add(o);

console.log('mySet.has(1) =', mySet.has(1)); // true
console.log('mySet.has(3) =', mySet.has(3)); // false, 3 no ha sido añadido al Set
console.log('mySet.has(5) =', mySet.has(5));              // true
console.log('mySet.has(Math.sqrt(25)) =', mySet.has(Math.sqrt(25)));  // true
console.log('mySet.has("Some Text".toLowerCase()) =', mySet.has("Algún Texto".toLowerCase())); // true
console.log('mySet.has(o) =', mySet.has(o)); // true

console.log('mySet.size =', mySet.size); // 4

console.log('eliminamos el 5');
mySet.delete(5); // Elimina 5 del Set
console.log('mySet.has(5) =', mySet.has(5));    // false, 5 fue eliminado

console.log('mySet.size =', mySet.size); // 3, sólo removimos un valor

console.log('\nIterando con Set');

console.log('\nfor item of Set...');
for (let item of mySet) console.log(item);

console.log('\nfor item of Set.keys()...');
for (let item of mySet.keys()) console.log(item);

console.log('\nfor item of Set.values()...');
for (let item of mySet.values()) console.log(item);

console.log('\nfor item of Set.entries(), con destructuracion');
for (let [key, value] of mySet.entries()) console.log(key, ' => ', value);

console.log('\nSet.forEach()...');
mySet.forEach(function(value) {
  console.log(value);
});
