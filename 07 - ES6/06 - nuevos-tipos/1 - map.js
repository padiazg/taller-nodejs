/*
El objeto Map es un sencillo mapa clave/valor. Cualquier valor (tanto objetos
como valores primitivos) pueden ser usados como clave o valor.

Sintaxis
let variable = new Map([iterable])

Parámetros

iterable
    Iterable es un array o cualquier otro objeto iterable cuyos elementos son
    pares clave-valor (arrays de 2 elementos). Cada par clave-valor será
    agregado al nuevo Map.

Descripción
Un objeto Map puede iterar sobre sus elementos en orden de inserción. Un bucle
for..of devolverá un array de [clave, valor] en cada iteración.

Cabe notar que un Map es un mapa de un objeto, especialmente un diccionario de
diccionarios, y solo mapeará al órden de inserción del objeto -- el cual es
aleatorio y no ordenado.

Igualdad de claves
La igualdad de claves esta basada en el algoritmo "same-value": NaN es
considerado lo mismo que NaN (sin importar que NaN !== NaN) y todos los otros
operadores son considerados iguales de acuerdo a la semantica del operador ===.
En las primeras versiones de ECMAScript 6 -0 y +0 eran considarados distintos
(aunque -0 === +0), esto fue cambiado en posteriores versiones.

Objetos y mapas comparados

Los Objetos son similares a los Mapas en cuanto a que ambos le permiten
establecer claves a valores, recuperar dichos valores, eliminar claves, y
detectar si existe algo almacenado en una clave determinada. Por esto, los
Objetos han sido usados históricamente como Mapas; no obstante,
hay diferencias importantes entre  Objetos y Mapas que hacen mejor usar un Mapa.

    * Un Objeto tiene un prototipo, de modo que hay claves por defecto en el
      mapa. No obstante, esto puede ser sorteado usando map = Object.create(null).

    * Las claves de un Objeto son Strings, mientras que pueden ser valores de
     cualquier tipo para un Mapa.

    * Puede obtenerse fácilmente el tamaño de un Mapa mientras que debe
      mantenerse manualmente el trazado del tamaño de un Objeto.

Propiedades

Map.size
    Retorna el número de pares clave/valor en el objeto Map

Métodos

Map.clear()
    Remueve todos los pares clave/valor del objeto Map.
Map.delete(key)
    Remueve cualquier valor asociado a la clave (key) y retorna el valor que
    Map.has(clave) hubiera retornado previamente. Map.has(key) retornará
    false después de esto.
Map.entries()
    Retorna un nuevo objeto Iterator que contiene un arreglo del tipo [clave, valor]
    por cada elemento en el objeto Map, en su órden de inserción.
Map.forEach(callbackFn[, thisArg])
    Llama a callbackFn una vez por cada par clave/valor presente en el objeto
    Map, en su órden de inserción. Si el parámetro thisArg es proveido, éste será
    usado como valor de this por cada callback.
Map.get(key)
    Retorna el valor asociado a la clave (key), o undefined si no hay alguno.
Map.has(key)
    Retorna un valor boooleano confirmando si un valor ha sido asociado a una
    clave en el objeto Map, o no.
Map.keys()
    Retorna un nuevo objeto Iterator que contiene las claves para cada elemento
    en el objeto Map, en su órden de inserción.
Map.set(key, value)
    Establece el valor (value) para la clave (key) en el objeto Map. Retorna el
    objeto Map.
Map.values()
    Retorna un nuevo objeto Iterator que contiene los valores para cada elemento
    del objeto Maps, en su órden de inserción.
*/


var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "un texto";

// estableciendo los valores
myMap.set(keyString, "valor asociado a 'un texto'");
myMap.set(keyObj, "valor asociado a keyObj");
myMap.set(keyFunc, "valor asociado a keyFunc");

console.log('myMap.size =', myMap.size); // 3

// recuperando los valores
console.log('myMap.get(keyString) =', myMap.get(keyString));    // "valor asociado a 'un texto'"
console.log('myMap.get(keyObj) =',myMap.get(keyObj));       // "valor asociado a keyObj"
console.log('myMap.get(keyFunc) =', myMap.get(keyFunc));      // "valor asociado a keyFunc"

console.log('myMap.get("un texto") =', myMap.get("un texto"));   // "valor asociado a 'un texto'"
                         // porque keyString === 'un texto'
console.log('myMap.get({}) =', myMap.get({}));           // undefined, porque keyObj !== {}
console.log('myMap.get(function() {}) =', myMap.get(function() {})); // undefined, porque keyFunc !== function ()


/*
Usando NaN como claves de Map

NaN también puede ser usado como una clave. Aún cuando cada clave NaN no es
igual a sí misma (NaN !== NaN es verdadera), el siguiente ejemplo funciona,
porque las claves NaNs NaNs no son distinguibles unas de otras:
*/
var myMap = new Map();

myMap.set(NaN, "no es un número");
console.log('myMap.get(NaN) =', myMap.get(NaN)); // "no es un número"

var otherNaN = Number("foo");
console.log('myMap.get(otherNaN) =', myMap.get(otherNaN));  // "no es un número"

// iterando Maps
console.log('\niterando Maps');
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
    console.log(key + " = " + value);
}

console.log('\nmyMap.keys()');
for (var key of myMap.keys()) {
    console.log(key);
}

console.log('\nmyMap.values()');
for (var value of myMap.values()) {
    console.log(value);
}

console.log('\nmyMap.entries()');
for (var [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}

myMap.forEach(function(value, key, myMap) {
    console.log(key + " = " + value);
})
// Will show 2 alerts; first with "0 = zero" and second with "1 = one"
