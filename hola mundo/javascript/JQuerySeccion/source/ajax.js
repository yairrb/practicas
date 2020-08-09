$(document).ready(function () {

    /*
    peticiones ajax
 
    */


    //load

    // $("#datos").load("https://reqres.in/");

    //get y post


    $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
        console.log(response);
        response.data.forEach((elemento, index) => {
            $("#datos").append("<p>" + elemento.first_name + "</p>");
        })

    });

    //Post

    var usuario = {
        first_name: "yair maximiliano",
        web: "google.com"
    }

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    })

    $("#formulario").submit(function(e) {
        e.preventDefault();
        var usuario = {
            name: $("input[name=name]").val(),
            web: $("input[name=web]").val()
        };

        
    //otra forma de usar un ajax con JQuery

    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function() {
            console.log(usuario);
        },
        succes: function(response){
            console.log("asdjkas:"+response);
        },
        error: function() {
            console.log("ha ocurrido un error");
        },
        timeout:2000
    });
    /*
        $.post($(this).attr("action"),usuario, function(response){
            console.log(response);
        } )

        */
    });







});