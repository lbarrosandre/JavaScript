let amigo = {nome: 'José', sexo: 'M', peso: 89.3, engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)