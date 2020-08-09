$(document).ready(function() {
    // vamos a trabajar con eventos.

    //mouseOver y mouseOut

    var caja = $("#caja");
    /*
    caja.mouseover(function() {
        $(this).css("background", "red");
    })

    caja.mouseout(function() {
        $(this).css("background", "green");
    })
    */


    function cambiaRojo () {
        $(this).css("background", "red");
    }

    function cambiaVerde () {
        $(this).css("background", "green");
    }


    //en una misma funcion con JQuery

    //hover
    caja.hover(cambiaRojo, cambiaVerde);

    caja.click(function() {
        $(this).css("background", "blue")
        .css("color", white);
    })
    caja.dblclick( function() {
        $(this).css("background","pink");
    })

    //evento focus y onblur

    //focus
    $("#nombre").focus(function(){
        $(this).css("border", "2px solid green");
    })

    $("#nombre").blur(function() {
        var valor = $(this).val();
        $("#datos").text(valor).show();
    })

    //mouse down y mouse up

    var datos = $("#datos");
    datos.mousedown(function() {
        $(this).css("border-color", "gray")
    })


    datos.mouseup(function() {
        $(this).css("border-color", "black")
    })

    //mouse move captura el evento de movimiento del mouse

    $(document).mousemove( function() {
        console.log(event.clientX);
        console.log(event.clientY);
        //$("body").css("cursor", "none") //Descomentar para  que el mouse sea la bolita amarilla
        $("#sigueme").css("left", event.clientX)
        .css("top",event.clientY);
    })


    

})