
/*

programa que pida dos numeros e informe cual es el menor, cual es mayor o si son iguales
*/

var number1 = parseInt(prompt('Insert the first number: '));
var number2 = parseInt(prompt('Insert the second number: '));

console.log(number1, number2);

if ( number1 == number2 ){
    alert('the numbers are equals');
}
else if ( number1 < number2){
    alert('the number '+number1+' is lower than '+ number2);
}
else if ( number2 < number1){
    alert ('the number '+numer2+' is lower than '+ number1)
}
else {
    alert('please insert correct numbers :)');
}
