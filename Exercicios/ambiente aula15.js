let valores = [23, 12, 19, 90, 14, 55]
console.log(valores)

for (let c in valores) {
    console.log(`A posicão ${c} tem o valor ${valores[c]}.`)
}

let pos = valores.indexOf(90) //o indexOf a letre "O" é maiúscula.
console.log(`O valor 90 está na posição ${pos}.`) // quando o valor retornar -1 quer dizer no JS que este valor não existe na matriz.



/*
let valores = [23, 12, 19, 90, 14, 55]
console.log(valores)
valores.sort()
for (let c = 0; c < valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}.`)
}    

__________________________________________________________________


let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Nosso valor é ${num}`)
num[5]= 6
console.log(num)
num.push(1)
console.log(num)
console.log(num.length)
console.log(num.sort())

for (let p = 0 ; p < num.length ; p++) {
    console.log(num[p])
}
*/