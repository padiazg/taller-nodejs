
const mate0 = require('./mi-modulo');
console.log('typeof mate0 =', typeof mate0);


console.log('suma 1 + 2 + 3 + 4 =>', mate0.suma(1, 2, 3, 4));
console.log('resta 5 - 3 =>', mate0.resta(5,3));
console.log('multiplica 8 * 2 =>', mate0.multiplica(8,2));
console.log('divide 12 / 3 =>', mate0.divide(12,3));

console.log('\npodemos importar solo las funciones que necesitamos...')
const { suma, resta } = require('./mi-modulo');
console.log('typeof suma =', typeof suma);
console.log('suma 5 + 6 + 7 + 8 =>', suma(5, 6, 7, 8));
console.log('resta 10 - 4 =>', resta(10, 4));
