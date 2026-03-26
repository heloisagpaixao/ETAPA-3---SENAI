const inputQtd = document.querySelector('#qtd-lasanha')
const precoTexto = document.querySelector('#preco-lasanha')

// CÁLCULO DE PREÇO
if(inputQtd && precoTexto){
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0
        const total = Number((inputQtd.value) * precoUnitario)
        precoTexto.textContent = `R$ ${total.toFixed(2)}`
        precoTexto.stylecolor = total > 150 ? "#c0392b" : "#e67e22"
    })
}

// 2. EVENTOS DE CLIQUES PARA CLASS - EVENT.TARGET
document.addEventListener('click', (event) => {
    const clicado = event.target
    // fazer a ação/mudança/aplicação que você quiser, mediante ao que foi clicado.
})

const massas = document.querySelector('#secao-massas')
massas.addEventListener('click', (event) =>{
    const clicado = event.target
    
    if(clicado.classList.contains('btn-pedido')){
        console.log('Você clicou em um botão de MASSAS!!')
    }
})