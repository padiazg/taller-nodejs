/*
    setTimeout: ejecuta una función una vez luego de un intérvalo de tiempo

    var timerId = setTimeout(función, intérvalo[, arg1, arg2...])

    función: es la función a ejecutar
    intérvalo: es el intérvalo de tiempo a esperar

*/

setTimeout(function() {
    console.log('tarea diferida terminada');
}, 1500);

console.log('tarea terminada');
