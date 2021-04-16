let res = document.querySelector('#enviar')
let res1 = document.querySelector('#enviar-mobile')
let agora = new Date

res.addEventListener('keypress', event => {
    let mensagem = res.value
    let enviar = document.querySelector('.input')
    let hora = `Hoje às ${agora.getHours()}:${agora.getMinutes()}`
    
    if (mensagem == '') return

    if(event.which == 13){
        var html = '<div>';
                html = '<div class="message">';
                html += '<img src="https://cdn.discordapp.com/embed/avatars/4.png" alt="">';
                    html += '<div>';
                        html += `<h2>User2021 <span>${hora}</span></h2>`;
                        html += `<p>${mensagem}</p>`;
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        enviar.innerHTML += html;

        res.value = ''
    }
})

res1.addEventListener('keypress', event => {
    let mensagem = res1.value
    let enviar = document.querySelector('.input')
    let hora = `Hoje às ${agora.getHours()}:${agora.getMinutes()}`
    
    if (mensagem == '') return

    if(event.which == 13){
        var html = '<div>';
                html = '<div class="message">';
                html += '<img src="https://cdn.discordapp.com/embed/avatars/4.png" alt="">';
                    html += '<div>';
                        html += `<h2>User2021 <span>${hora}</span></h2>`;
                        html += `<p>${mensagem}</p>`;
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        enviar.innerHTML += html;

        res1.value = ''
    }
})