
// destructuracion de objetos

var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// Asigna nuevos nombres de variable
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
