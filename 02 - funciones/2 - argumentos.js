/*
el objeto arguments es un objeto similar a un Array que se corresponde con los
argumentos pasados a la función.

simpre está presente aunque no hayamos declarado que nuestra función recibirá
parámetros

El objeto arguments está habilitado solamente dentro del cuerpo de la función.
Intentar acceder el objeto arguments fuera de la declaración de la función
producirá un error.

*/

function unafuncion(parametro) {
    console.log('parametro:', parametro);
    console.log('arguments.length:', arguments.length);
    for (var i=0; i<arguments.length; i++)
        console.log('arguments[' + i + ']=', arguments[i]);
}

console.log('llamando a la función con el parámetro estricto');
unafuncion('valor1');

console.log('\nllamando a la función con mas parámetros de los declarados');
unafuncion('valor1', 'valor2', 100, {a:'hola', b:1000});

// un ejemplo práctico donde recibimos un separador como parámetro fijo, si
// se reciben mas parámetros estos serán concatenados entre si y agragado el
// separador entre medio
var concatenar = function(separador) {
    var concatenado = "";
    if (arguments.length>1) {
        for(var i=1; i<arguments.length; i++) {
            concatenado += arguments[i] + separador;
        }
    }
    return concatenado;
}

console.log('\n', concatenar(':', 'abcd', 'efgh', 'ijkl'));
