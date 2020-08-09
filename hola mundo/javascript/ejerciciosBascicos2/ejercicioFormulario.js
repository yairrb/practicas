'use strict'

window.addEventListener('load', function(){
    this.console.log('DOM cargado')

    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";
    formulario.addEventListener('submit', function(){
        console.log("evento capturado");

        boxDashed.style.display = "block ";
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        var datosDelUsuario = [ nombre, apellido, edad];

        var index ;
        for ( index in datosDelUsuario ) {
            var parrafo = document.createElement('p');
            parrafo.append(datosDelUsuario[index]);
            boxDashed.append(parrafo);
        }
    })
});