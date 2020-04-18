function gerar() {
    var  n = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (n.value.length == 0) {
        window.alert('[ERRO] Falta o lançamento do dado!')
    } else {
        var n = Number(n.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //usando em PHP - não faz diferença no JS
            tab.appendChild(item)
        }
    }
} 
