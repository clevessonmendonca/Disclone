let adicionar = document.querySelectorAll('.adicionar-canal')
let criar = document.querySelector('.criar-server')

adicionar.forEach(function(add) {
    add.addEventListener('click', event => {
        let adc = document.querySelector('.adc')

        var html = '<li class="min show">'
                html += '<h2><span>#</span>Salve</h2>'
            html += '</li>'

        adc.innerHTML += html
    })
})

criar.addEventListener('click', event => {
    let server = document.querySelector('.new-server')

    var html = '<div class="server">'
            html += "<figure>"
                html += '<img src="https://cdn.discordapp.com/attachments/799357381338726440/826249924710236160/unknown.png" alt="">'
            html += "</figure>"
        html += "</div>"

    server.innerHTML += html
})