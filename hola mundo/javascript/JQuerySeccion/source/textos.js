/*

trabajar con el texto y el DOM
vamos a usar funciones propias de JQuery
*/


$(document).ready(function () {

    reloadLinks();

    $("#botonAñadir").click(function () {
        $("#menu").append('<li><a href="' + $("#addLink").val() + '"><a/><li/>');
        reloadLinks();
    });


    function reloadLinks() {
        $('a').each(function (index) {
            console.log($(this).attr("href"));
            var that = $(this);
            var enalce = that.attr("href");
            that.text(enalce);
            that.attr("target", "_blank");
        })
    }




})