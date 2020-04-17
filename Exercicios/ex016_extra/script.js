function contar() {
    var i = document.getElementById('txtini')
    var f = document.getElementById('txtfim')
    var p = document.getElementById('txtpas')
    var cont = document.querySelector('div#cont')
    
    var i = Number(i.value)
    var f = Number(f.value)
    var p = Number(p.value)
    do {
        cont.innerHTML = i
        
        i = i + p
    } while(i <= f)
    
}
