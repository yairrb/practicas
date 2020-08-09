/*
vamos a probar el dragable de JQueryUI
*/

$(document).ready( function() {
    console.log("todo funciona");
    $(".elemento").draggable();


    //resizable
    $(".elemento").resizable();

    //ahora veremos seleccionable
    $(".listaSeleccionable").selectable();

    //sorteable
    //$(".listaSeleccionable").sortable();

    //efectos con JQuery

    $("#mostrar").click(function() {
        $(".cajaEfecto").toggle("shake", "slow");
    });

    //vamos a probar el tooltip
    $(document).tooltip();
})
