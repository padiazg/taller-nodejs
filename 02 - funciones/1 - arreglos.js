/*
matrices
var arreglo = [valor1, valor2, valor3]
*/

var arreglo1 = ['Arsenio', 'Hugo', 'Juan', 'Jose', 'Magdalena', 'Miguel'];
console.log('arreglo1:', arreglo1);

// con arreglo.length podemos saber la cantidad de elementos en el arreglo
console.log('elementos en arreglo1:', arreglo1.length);

// accedemos a sus elementos con el formato:  arreglo[indice]
// el índice inicia en 0
console.log('primer elemento:', arreglo1[0]);
console.log('último elemento:', arreglo1[ arreglo1.length - 1 ]);

// con push agregamos un elemento al final: arreglo.push(valor)
console.log('\n* con push agregamos un elemento al final');
arreglo1.push('Guido');
console.log('arreglo1:', arreglo1);
console.log('elementos en arreglo1:', arreglo1.length);

// pop elimina el último elemento y lo devuelve
console.log('\n* pop elimina el último elemento y lo devuelve');
var elemento = arreglo1.pop();
console.log('arreglo1:', arreglo1);
console.log('elementos en arreglo1:', arreglo1.length);
console.log('elemento:', elemento);

// unshift agrega uno o mas elementos al principio del arreglo
console.log('\n* unshift agrega uno o mas elementos al principio del arreglo');
elemento = arreglo1.unshift('Anacleto');
console.log('arreglo1:', arreglo1);
console.log('elementos en arreglo1:', arreglo1.length);

// shift elimina el primer elemento y lo devuelve
console.log('\n* shift elimina el primer elemento y lo devuelve');
elemento = arreglo1.shift();
console.log('arreglo1:', arreglo1);
console.log('elementos en arreglo1:', arreglo1.length);
console.log('elemento:', elemento);

/* find retorna el valor del primer elemento encontrado que cumpla con cierto criterio.
sintaxis: arreglo.find(callback)

parámetros para callback: function(elemento, indice, arreglo)
alemento: es el elemento siendo procesado
indice: es el índice del elemento
arreglo: es el arreglo mismo sobre el que se está corriendo la busqueda

debe retornar un valor booleano que determine si el elemento evaluado cumple la condición

find retorna undefined si no hay elementos que cumplan la condición
*/

var numeros = [15, 5, 6, 7, 21, 120];

console.log('El primer elemento mayor a 10:', numeros.find(function(elemento) {
    return elemento > 10;
}));

console.log('El primer elemento mayor a 10:', numeros.find(e => e > 10));

console.log('El primer elemento par:', numeros.find(function(elemento) {
    return (elemento % 2) == 0;
}));

/*
findIndex tiene la misma sintaxis de find, pero nos retorna el índice del primer
elemento que cumpla una condición
findIndex retorna -1 si no hay elementos que cumplan la condición
*/
console.log('El índice del primer elemento mayor a 20:', numeros.findIndex(function(elemento) {
    return elemento > 20;
}));

console.log('El índice del primer elemento impar:', numeros.findIndex(function(elemento) {
    return (elemento % 2) != 0;
}));

/*
indexOf es una versión simplificada de findIndex, donde nos retorna el índice
del primer elemento que coincida con el valor proveído

var indice = arreglo.indexOf(valor);
retorna -1 si no encuentra coincidencias
*/
console.log('El valor 5 está presente:', numeros.indexOf(5)>0);
console.log('El valor 11 está presente:', numeros.indexOf(11)>0);

/*
aunque tendríamos el mismo resultado usando includes

arreglo.includes(elementoBuscado)
arreglo.includes(elementoBuscado, desdeDonde)
*/
console.log('\nincludes nos da el mismo resultado');
console.log('El valor 5 está presente:', numeros.includes(5));
console.log('El valor 11 está presente:', numeros.includes(11));


/*
forEach nos permite recorrer el arreglo

arreglo.forEach(callback(elemento, indice, arreglo) {
    // bloque de código
});
*/
console.log('\nforEach nos permite recorrer el arreglo');
arreglo1.forEach(function(elemento, indice) {
    console.log(elemento, 'está en la posición', indice+1);
});

/*
map nos retorna un nuevo vector resultante de llamar a una función proveída

var nuevoArreglo = arreglo.map(callback(elemento, indice, arreglo) {
    // bloque de código
});
*/
console.log('\nmap nos retorna un nuevo arreglo');
console.log('\narreglo original', numeros);
console.log('valores doblados:', numeros.map(function(elemento) {
    return elemento * 2;
}));

console.log('raices cuadradas:', numeros.map(Math.sqrt));
