/*
Ejecutar una tarea asíncrona usando promesas.

var promise = new Promise(callback);

parametros para callback:
resolve: función a ser ejecutada cuando la promesa se resuelva
reject: función a ser ejecutada cuando la promesa ses resuelva
*/

var tareaAsincrona = function(condicion) {
    var promesa = new Promise( function(resolve, reject) {
        setTimeout(function() {
            console.log("Proceso asincrono terminado");
            if (condicion)
                resolve();
            else
                reject();
        }, 1300);
    });

    return promesa;
}

/*
var promesa = tareaAsincrona();
promesa.then(
    function() { console.log('Todo ok!'); },    // cumplida
    function() { console.error('Todo mal!'); }  // rechazada
);
*/

tareaAsincrona().then(
    function() { console.log('Todo ok!'); },    // cumplida
    function() { console.error('Todo mal!'); }  // rechazada
);

tareaAsincrona(true).then(
    function() { console.log('Todo ok!'); },    // cumplida
    function() { console.error('Todo mal!'); }  // rechazada
);
