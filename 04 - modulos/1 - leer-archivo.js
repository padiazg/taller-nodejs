/*
MODULOS

Podemos considedar a los módulos como las bibliotecas de JavaScript.

Un conjunto de funciones que podemos incluir en nuestra aplicación
*/


// Para incluir un módulo utilizaremos la función require() con el nombre del módulo
// fs es un módulo incluido en node.js, por lo que no necesitamos descargarlo de ningún repositorio, lo cual veremos
// mas adelante
var fs = require('fs');

fs.readFile('texto.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});
