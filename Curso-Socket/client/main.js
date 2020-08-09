var socket = io.connect('http://192.168.56.1:6677', {'forceNew': true});


socket.on('messages', function(data) {

    render(data);

});

function render (data) {

    console.log(data)
    var html =  data.map(function(message, index) {
        return `
        <div class="message">
            <strong>${message.nickname}</strong>
            <span>${message.text}</span>
        </div>
        `;
    })

    document.getElementById('message').innerHTML = html
}

function addMessage(e){
    var payload = {
        nickname: document.getElementById('nick').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nick').style.display = 'none';
    socket.emit('add-message', payload);
    return false;
}