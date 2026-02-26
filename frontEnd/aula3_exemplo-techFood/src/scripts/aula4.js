class Prato {
    constructor(nome, preco) {
        this.nome = nome,
            this.preco = preco
    }

    exibirEmReais(total){
        return "R$ " + total.toFixed(2)

    }

}

const lasanha = new Prato("Lasana Bolonhesa", 45.00)

// alert("Seja bem-vindo ao restaurante Sabor e Saber!")
// console.log("Teste")

const cliente = prompt("Bem-vindo, cliente! Para um atendimento personalizado, digite o seu nome:")

// const horaAgora = new Date()

// const hora = horaAgora.getHours()
// if (hora < 11) {
//     alert(`Bom dia, ${nomeFormatado}! Aproveite as delícias de o café da manhã!`)
//     console.log(`Antes das 11h00.`) 
//     } else {
//         alert(`Boa tarde, ${nomeFormatado}! Aproveite os nossos pratos para almoço e jantar!`)
//         console.log(`Depois das 11h00.`)
//     }

const querPrato = confirm(`Olá, ${nomeFormatado}! Quer um prato?`)
if (querPrato) {
    let quantidade = prompt(`Hoje temos Lasanha Bolonhesa, quantas você quer?`)
    let total = lasanha.preco * quantidade
    // alert(total)
    alert(`Bacana! O seu total de ${lasanha.nome} é de R$ ${lasanha.exibirEmReais(total)}.`)
} else {
    alert(`Ok! Obrigado pela visita e volte sempre!!`)
}