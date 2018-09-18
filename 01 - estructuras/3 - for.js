/*
for(sentencia 1; sentencia 2; sentencia 3) {
    bloque de código
}

sentencia 1: es ejecutado antes de inicial el blucle, ideal para inicializar variables
sentencia 2: define la condición que mantiene ejecutándose al bucle (bloque de código)
sentencia 3: es ejecutado después de cada iteracción del blucle (bloque de código)
*/
console.log('blucle for, 0 al 9');
var i;
for (i=0; i<10; i++) {
  console.log('i=' + i);
}

//console.log('*i=' + i);
console.log('blucle for descendente, 20 al 10');
for (var j=20; j>=10; j--) {
  console.log('j=' + j);
}

console.log('blucle for, 0 al 10, pares');
for (var k=2; k<=10; k += 2) {
  console.log('k=' + k);
}
