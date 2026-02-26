// // EXERCÍCIO 1
// const usuarioNome = prompt(`Olá, usuário! Para um atendimento personalizado, digite o seu primeiro nome:`)
// const usuarioSobrenome = prompt(`Obrigada, ${usuarioNome}! Agora, por favor, informe seu sobrenome:`)

// let nomeFormatado = usuarioNome.concat(usuarioSobrenome).toLowerCase()

// alert(`Obrigada, ${nomeFormatado}!`)
// alert(`Seu nome tem ${nomeFormatado.length} caracteres. :)`)



// // EXERCÍCIO 2
// const conta = prompt(`Olá, usuário! Digite aqui o valor total da conta:`)
// const qtdDePessoas = prompt(`Agora, digite aqui quantas pessoas estão nessa mesa:`)

// let valorPorPessoa = (conta / qtdDePessoas).toFixed(2)

// alert(`Cada amigo deve pagar R$ ${valorPorPessoa}.`)



// // EXERCÍCIO 3
// const compra = prompt(`Olá, usuário! Digite aqui o valor total da sua compra:`)
// const cupom = confirm(`Obrigada! Para ganhar um frete, você tem um cupom?`)

// if (compra > 150 || cupom){
//     console.log(`Frete grátis liberado!`)
// } else {
//     console.log(`Frete pago.`)
// }



// // EXERCÍCIO 4
// const numeroDoUsuario = prompt(`Olá, usuário! Escolha um número de 1 a 10 para participar do sorteio!`)
// let numeroSistema = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

// if (numeroDoUsuario <= 0 && numeroDoUsuario >= 11){
//     alert(`Número inválido para participar do sorteio.`)

// } else if (numeroDoUsuario == numeroSistema){
//     alert(`Parabéns, você ganhou um brinde!`)

// } else {
//     alert(`Que pena, o número sorteado foi ${numeroSistema}.`)
// }

// EXERCÍCIO 5

