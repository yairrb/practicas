'use strict'

//fetch(ajax) y peticiones a una api REST
var divUsuarios = document.querySelector("#users");
var divUsuario = document.querySelector("#user");

getUsuarios().then(data => data.json())
    .then(users => {
        listarUsuario(users)
        document.querySelector(".loading").style.display = 'none';

        return getUsuarioPorId('1');

    })
    .then(data => data.json())
    .then(one => {
        mostrarUsuario(one);
        document.querySelector("#user   .loading").style.display = 'none';

    })
function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getUsuarioPorId(id) {
    return fetch('https://jsonplaceholder.typicode.com/users?id=' + id);
}

function listarUsuario(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + " " + user.name;

        console.log(user.name);
        divUsuarios.append(nombre);
    })
}

function mostrarUsuario(user) {
    console.log(user[0].name);
    let nombre = document.createElement('h2');
    nombre.innerHTML = user[0].name;

    divUsuario.append(nombre);

}