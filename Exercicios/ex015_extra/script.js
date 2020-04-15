function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') // outra forma de fazer a mesma coisa da linha acima.
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 11) {
                //criança
                img.setAttribute('src', 'childboy.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'youngboy.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'man.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'oldman.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 11) {
                //criança
                img.setAttribute('src', 'childgirl.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'younggirl.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'woman.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'oldwoman.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
                        
    }
}