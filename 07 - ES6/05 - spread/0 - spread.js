/*
    SPREAD OPERATOR

El operador de propagación (spread operator) permite que una expresión sea
expandida donde se esperan multiples argumentos

*/

// Llamadas a funciones
console.log('Llamadas a funciones');
function procesa1(a, b, c, ...resto) {
    console.log('a=', a);
    console.log('b=', b);
    console.log('c=', c);
    if (resto.length>0) {
        var suma = resto.reduce(function(suma, valor) { return suma + valor; });
        console.log('resto => suma=', suma, 'conteo=', resto.length, 'promedio=', (suma/resto.length));
    }
}

var ordenado = [31, 25, 3, 54, 16, 14, 98, 76, 34, 65, 23].sort(function(a,b) { return b-a; });
console.log('ordenado:', ordenado);
procesa1(...ordenado);

console.log('\nUn array literal mas poderoso');
/*
La sintaxis de un array literal que existe hoy en día no es suficiente si se
requiere agregar los elementos de un array dentro de otro array existente.
Actualmente se debe escribir código imperativo usando una combinación de
métodos como push, splice, concat, etc. Con la sintaxis de propagación spread
esta tarea resulta mucho mas concisa
*/
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log('parts =>', parts);
console.log('lyrics =>', lyrics);

console.log('\nCombinación del método apply y el operador new');
/*
En ES5 no es posible combinar new y apply (en ES5  el método apply crea un
[[Call]] y no un [[Construct]]). En ES6 la sintaxis de propagación spread
soporta esto de forma natural:
*/
var dateFields = [2017, 6, 13, 9, 30, 0];
var d = new Date(...dateFields);
console.log('dateFields:', dateFields, ' d:', d);

console.log('\nUn método push mejorado');
/*
push suele usarse para agregar los elementos de un array al final de otro
array existente. En ES5 esta tarea puede ser realizada de la siguiente manera:
*/

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
console.log('Agregar todos los elementos de arr2 a arr1');
console.log('arr2 =', arr2);
console.log('antes arr1 =', arr1);
arr2.forEach(function(e) {
    arr1.push(e);
});
console.log('despues arr1 =', arr1);

/*
Usando el operador de propagación (spread) de ES6, este sería el resultado:
*/
console.log('usando spread')
arr1 = [0, 1, 2];
arr1.push(...arr2);
console.log('arr1 =', arr1);
