var objeto = {
    a: 1,
    b: "foo",
    c: false,
    d: [1, 2, 3]
}
console.log('nuestro objeto => ', objeto);

console.log('\nmostramos solo a');
function mostrarNumero({a}) {
    console.log('a:', a);
}
mostrarNumero(objeto);

console.log('\nmostramos solo b');
function monstrarTexto0({b}) {
    console.log('b:', b);
}
monstrarTexto0(objeto);

console.log('\nmostramos c y d');
function monstrarCombinado({c, d}) {
    if (c) {
        d.forEach(function(x, i) {
            console.log('x['+i+']:', x);
        });
    } // if (c) ...
}
monstrarCombinado(objeto);

console.log('\nReasignando b a z');
function monstrarTexto1({b: z}) {
    console.log('z:', z);
}
monstrarTexto1(objeto);
