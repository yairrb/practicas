'use strict'

//navegadores antiguos podrian no soportar el localestorage


//forma de validar si tenemos disponible el local estorage
if ( typeof(Storage)!== 'undefined' ) {
    console.log('Storage esta activo')
}else{
    console.log('El Storage no es soportado por esta version')
}

var usuario = {
    nombre: "yair ruiz barbas",
    email: "yair.ruizbarbas@gmail.com",
    web: "notengoWeb.com.ar"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


//recuperamos el dato

var userJs = JSON.parse(localStorage.getItem("usuario"));

console.log(userJs);

document.write(userJs);

localStorage.removeItem("usuario");
