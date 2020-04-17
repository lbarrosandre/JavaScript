function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = "imagem/manha.jpg"
        document.body.style.background = '#6c63ff'
    } else if (hora < 18) {
        img.src = "imagem/tarde.jpg"
        document.body.style.background = '#f87114'
    }else {
        img.src = "imagem/noite.jpg"
        document.body.style.background = '#353535'
    }
}
