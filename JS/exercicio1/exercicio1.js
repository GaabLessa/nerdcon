function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML= `Agora São ${hora} horas, ${min} minutos e ${seg} segundos`
    if (hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#72AAF5'
    } else if (hora >= 12 & hora <= 18) {
        //botarde
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#D4AA2F'
    } else {
        //moanoite
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#1C1E20'
    }
}