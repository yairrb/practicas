
// selector de ir
$(document).ready(function(){
    var rojo = $("#rojo").css("background", "red");
    console.log(rojo);

    /*
los id son unicos.
seleccionar una clase es para cuando se necesita aplicar cambios a multioples componentes del html
*/

//selector de clases

var miClase = $(".zebra");
console.log(miClase);
//asignemos un estilo a la clase zebra

miClase.css( "border", "5px dashed black");
miClase.css("background", "green");

/*
selectores de etiquetas. Igual que el selector de clases pero con etiquetas
vamos a quitarle la clase zebra a los parrafos.
*/

//selector de etiquetas

var parrafos = $('p')

parrafos.click( function() {
    $(this).css("background", "red");
});

//selector de atributos

$('[title="Google"]').css('background', "yellow");


});


