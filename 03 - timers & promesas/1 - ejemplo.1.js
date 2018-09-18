
// inicializamos una tarea que esperará 5s para ejecutarse
var id0 = setTimeout(function() {
    console.log('Tarea culminada con éxito');
}, 5000)

// ejecutamos otra tarea cada 1s, y contamos las veces que se ejecuta
var t0 = 1;
var id1 = setInterval(function() {
    console.log('tick ', t0++);
}, 1000)

// la tarea repetitiva se ejecutará indefinidamente, hasta que "matemos" nuestra
// aplicación

console.log('nivel raíz');
