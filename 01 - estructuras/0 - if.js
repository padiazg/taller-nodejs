

// esta expresión indica que 1 es igual a 1
if (1 == 1) {
    console.log(' 1 == 1 es verdadero');
}

// javascript hace las conversiones de tipo necesarias para poder evaluar
// esta expresión, por lo que el string es convertido a numerico y se evaluan
// estos valores
if ('1' == 1) {
    console.log("'1' == 1 es verdadero");
} else {
   console.log("'1' == 1 no es verdadero");
}


// el triple igual se denomina "exactamente igual", es decir, igual valor e igual tipo
// por lo que no se realiza conversión alguna
if (1 === 1) {
    console.log("1 === 1 es verdadero");
} else {
   console.log("1 === 1 no es verdadero");
}

// por lo que en esta condición, aunque las expresiones parezcan iguales no
// lo son exactamente
if ('1' === 1) {
    console.log("'1' === 1 es verdadero");
} else {
   console.log("'1' === 1 no es verdadero");
}


/*
otras comparaciones

==      igual a
===     exactamente igual a
!=      no igual a, diferente de
!==     no igual a o no del typo de
>       mayor que
<       menor que
>=      mayor o igual que
<=      menor o igual que
*/

// operador ternario
/*
variable = (condicion) ? valor1 : valor2

valor1: es el valor que se asigna a variable si la condición es verdadera
valor2: es el valor que se asigna a variable si la condición es falsa
*/
