/*
    setInterval: ejecuta una función repetídamente, con unintérvalo mínimo
    entre ejecuciones.

    var timerId = setInterval(función, intérvalo[, arg1, arg2...])

    función: es la función a ejecutar
    intérvalo: es el intérvalo de tiempo a esperar
*/

var id = setInterval(function() {
    console.log('tarea repetitiva');
}, 1000);

console.log('nivel raiz');
