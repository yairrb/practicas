

/*
mostrar por pantalla la tabla de multiplicar de un numero ingresado por el usuario
*/

var number = parseInt(prompt('introduce un numero: '));

for ( var i = 0 ; i < 10 ; i++) {
    document.write(i*number);
}