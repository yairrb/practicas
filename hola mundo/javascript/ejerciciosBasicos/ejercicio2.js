

/*
Pedir al usuario numero hasta que este quiera dejar de ingresarlos. hacer la suma y el promedio
de todos los numeros ingresados
*/

var sum = 0;
var count = 0;

do {

    var number = parseInt(prompt('insert a new number: '));
    if (isNaN(number)) {
        number = 0;
        alert('thats not a number');
    } else {
        sum += number;
        count++;
    }
} while (askForcontinue());

alert('result: ' + sum);
alert('result: ' + sum / count)


function askForcontinue() {
    let ask = prompt('continue? Y/N: ').toUpperCase();

    switch (ask.toUpperCase()) {
        case 'Y':
            return true;
            break;
        case 'N':
            return false;
            break;
    }

    askForcontinue();
}