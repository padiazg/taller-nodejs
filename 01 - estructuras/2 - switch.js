/*
switch(expresion) {
  case x:
    bloque de codigo
    break;

  case y:
    bloque de codigo
    break;

  default:
    bloque de codigo
}
*/


for (var i=0; i<5; i++) {
    console.log('i=' + i);
    switch(i) {
        case 0:
            console.log('Inicio');
            break;

        case 1:
            console.log('Valor uno');
            break;

        case 2:
            console.log('Valor dos');
            break;

        case 3:
            console.log('Valor tres');
            break;

        default:
            console.log('Valor desconocido');
    } // switch ...
} // for ...
