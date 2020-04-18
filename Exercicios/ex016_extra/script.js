function contar() {
    var i = document.getElementById('txtini') //variavel pode ser tanto "var" ou "let"
    var f = document.getElementById('txtfim')
    var p = document.getElementById('txtpas')
    var res = document.getElementById('res')
  
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!!!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(i.value)
        var f = Number(f.value) 
        var p = Number(p.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerado Passo 1')
            p = 1
        }

        if (i < f) { //contagem crescente
            while (i <= f) {
                res.innerHTML += `${i} \u{1F91C} `
                i += p
            } 
        } else { //contagem regressiva
            while (i >= f) {
                res.innerHTML += `${i} \u{1F91C} `
                i -= p 
            }
        } res.innerHTML += `\u{1F3C1}`
    }
      
     
}


