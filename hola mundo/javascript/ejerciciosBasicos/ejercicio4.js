'use strict'

/*
mostrar todos los numeros impares que hay entre dos numeros introducidos por el  usuario
*/


    var fromNumber = parseInt(prompt('Introduce un numero:'));
    var toNumber = parseInt(prompt('introduce otro numero:'));
    console.log('Numeros impares desde '+fromNumber+' hasta '+toNumber);
    for( var number = fromNumber ; number < toNumber ; number++){
        if ( (number%2) != 0 ) {
            document.write(number)
            console.log(number);
        }
    }

