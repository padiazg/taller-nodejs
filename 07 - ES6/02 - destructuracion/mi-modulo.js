/*
Utilizamos la palabra clave "exports" para hacer disponible atributos y métodos
fuera del archivo del módulo.
*/

exports.multiplica = (valor, multiplicador) => valor * multiplicador;
exports.suma = (...valores) => valores.reduce((suma, valor) => { return suma + valor; } );
exports.resta = (minuendo, sustraendo) => minuendo-sustraendo;
exports.divide =  (dividendo, divisor) => dividendo/divisor;
