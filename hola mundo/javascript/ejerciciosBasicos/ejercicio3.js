

/*
hacer un programa que muestre los numero intermedios entre dos solicitados al usuario
*/


var startFromNumber = prompt('ingrese el primer numero');

var stopAtNumber = prompt('ingrese el segundo numero');

console.log('Start: ')
for (var number = startFromNumber; number < stopAtNumber; number++) {
    console.log(number);
}

console.log('End: ');