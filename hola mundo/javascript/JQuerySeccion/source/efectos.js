$(document).ready( function() {
    //ocultamos la caja
    $("#mostrar").hide();


    //vamos a trabajar con efectos de JQuery

    /*
    tenemos un boton para mostrar y otro para ocultar
    */




    //mostrar caja evento
    $("#mostrar").click(function() {
        //$("#caja").show("fast");
        $("#caja").fadeTo("slow", 1);
        $(this).hide();
        $("#ocultar").show();
    });

    //ocultar caja evento
    $("#ocultar").click( function() {
        //$("#caja").hide("fast");
        $("#caja").fadeTo("slow", 0);
        $(this).hide();
        $("#mostrar").show();
    })

    $("#todoen1").click( function() {
        $("#caja").toggle("fast");
    });

    $("#animame").click(function() {
        $("#caja").animate({
            marginLeft:"500px"}, "slow");
    });


});