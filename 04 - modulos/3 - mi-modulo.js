/*
Utilizamos la palabra clave "exports" para hacer disponible atributos y métodos
fuera del archivo del módulo.
*/

var multiplica = function(valor, multiplicador) {
    return valor * multiplicador;
}
exports.multiplica = multiplica;

// versión ES6, estudiaremos en siguientes capítulos
// module.exports = (valor, multiplicador) => valor * multiplicador
