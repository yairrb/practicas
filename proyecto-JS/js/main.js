$(document).ready(function () {


    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            resposive: true
        });
    }


    //posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Fecha de publicacion: ' + moment().format("DD/MM/YYYY "),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, turpis ac rutrum dapibus, tellus ipsum ornare est, vel pharetra ligula urna id justo. Integer vestibulum placerat magna a condimentum. Pellentesque gravida orci a leo feugiat, fringilla dignissim velit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at pellentesque lectus, ut posuere urna. Mauris hendrerit metus lacus, id semper elit iaculis pretium. Quisque eleifend viverra dapibus. Duis consectetur quam leo, at tristique ipsum scelerisque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

        },
        {
            title: 'Prueba de titulo 2',
            date: 'Fecha de publicacion: ' + moment().format("DD/MM/YYYY "),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, turpis ac rutrum dapibus, tellus ipsum ornare est, vel pharetra ligula urna id justo. Integer vestibulum placerat magna a condimentum. Pellentesque gravida orci a leo feugiat, fringilla dignissim velit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at pellentesque lectus, ut posuere urna. Mauris hendrerit metus lacus, id semper elit iaculis pretium. Quisque eleifend viverra dapibus. Duis consectetur quam leo, at tristique ipsum scelerisque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

        },
        {
            title: 'Prueba de titulo 3',
            date: 'Fecha de publicacion: ' + moment().format("DD/MM/YYYY "),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, turpis ac rutrum dapibus, tellus ipsum ornare est, vel pharetra ligula urna id justo. Integer vestibulum placerat magna a condimentum. Pellentesque gravida orci a leo feugiat, fringilla dignissim velit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at pellentesque lectus, ut posuere urna. Mauris hendrerit metus lacus, id semper elit iaculis pretium. Quisque eleifend viverra dapibus. Duis consectetur quam leo, at tristique ipsum scelerisque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

        },
        {
            title: 'Prueba de titulo 4',
            date: 'Fecha de publicacion: ' + moment().format("DD/MM/YYYY "),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, turpis ac rutrum dapibus, tellus ipsum ornare est, vel pharetra ligula urna id justo. Integer vestibulum placerat magna a condimentum. Pellentesque gravida orci a leo feugiat, fringilla dignissim velit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at pellentesque lectus, ut posuere urna. Mauris hendrerit metus lacus, id semper elit iaculis pretium. Quisque eleifend viverra dapibus. Duis consectetur quam leo, at tristique ipsum scelerisque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

        },
        {
            title: 'Prueba de titulo 5',
            date: 'Fecha de publicacion: ' + moment().format("DD/MM/YYYY "),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, turpis ac rutrum dapibus, tellus ipsum ornare est, vel pharetra ligula urna id justo. Integer vestibulum placerat magna a condimentum. Pellentesque gravida orci a leo feugiat, fringilla dignissim velit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at pellentesque lectus, ut posuere urna. Mauris hendrerit metus lacus, id semper elit iaculis pretium. Quisque eleifend viverra dapibus. Duis consectetur quam leo, at tristique ipsum scelerisque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

        }
    ]

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">leer mas</a>

    </article>`;
        $("#posts").append(post);
    })


    //selector de temas
    var theme = $("#theme");
    $("#toGreen").click(function () {
        theme.attr("href", "css/green.css")
    })

    $("#toBlue").click(function () {
        theme.attr("href", "css/blue.css")
    })

    $("#toRed").click(function () {
        theme.attr("href", "css/red.css")
    })


    //scroll arriba

    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500)
        return false;
    }
    )
    //login falso con local storage

    $("#login form").submit(function () {


        var formName = $("#formName").val();
        localStorage.setItem("formName", formName);


    })

    var fname = localStorage.getItem("formName");
    if (fname != null && fname != 'undefine') {
        var aboutParrafo = $("#about");
        $("#about").append("<strong>Bienvenido " + fname + "</strong>");
        aboutParrafo.append("</br><a href='#' id='logOut'>Cerrar sesion</a>")

        $("#login form").hide();

        $("#logOut").click(function () {
            localStorage.clear();
            location.reload();
        })
    }

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('h:mm:ss a');
            $("#reloj").html(reloj)
SS
        }, 1000)
    }

    //validaciones de formulario

    if (window.location.href.indexOf('contact') > -1) {
        $("#age").datepicker();
    $.validate({
        lang: 'es',
        modules: 'date'
      });
    }

})