function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - (fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10 ) {
            //crinaça
            img.setAttribute('src' , 'imagens/obb.jpg')
        } else if (idade < 17) {
            //jovem
            img.setAttribute('src' , 'imagens/ojovem.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src' , 'imagens/adulto.jpg')
        } else {
            //velho
            img.setAttribute('src' , 'imagens/idoso.jpg')
        }
        
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10 ) {
            //criança
            img.setAttribute('src' , 'imagens/abb.jpg')
        } else if (idade <17) {
            //jovem
            img.setAttribute('src' , 'imagens/ajovem.jpg')
        } else if (idade <50) {
            //adulto
            img.setAttribute('src' , 'imagens/adulta.jpg')
        } else {
            //velho
            img.setAttribute('src' , 'imagens/idosa.jpg')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img) 
    }
}