// SELEÇÃO DE ELEMENTOS DO DOM
let contador = document.querySelector("#contador");
let btnCurtir = document.querySelector("#btn-curtir");
const campoTexto = document.querySelector("#campo-texto");
const previewTexto = document.querySelector("#preview-texto");
const caixaCor = document.querySelector("#caixa-cor");
let btnReset = document.querySelector("#btn-reset")


// 1. INTERAÇÃO (CLIQUE)
let totalCurtidas = 0

btnCurtir.addEventListener("click", () => {
    totalCurtidas = totalCurtidas + 1 // altera o valor da variável
    contador.textContent = totalCurtidas // atualiza o valor na tela
})


// 2. MONITORAMENTO (INPUT)
campoTexto.addEventListener("input", () => {
    const textoDigitado = campoTexto.value //valor atual digitado
    previewTexto.textContent = "Digitando: " + textoDigitado // atualiza o texto do preview
})


// 3. SENSORES (MOUSE)
caixaCor.addEventListener("mouseenter", () => { // quando o mouse entrar na caixa
    caixaCor.style.backgroundColor = "blue" //altera a cor de fundo
})


caixaCor.addEventListener("mouseleave", () => { // quando o mouse sai da caixa
    caixaCor.style.backgroundColor = "" // remove a cor
})


// 4. BOTÃO DE RESET
btnReset.addEventListener("click", () => {
    totalCurtidas = 0 // zera o número de curtidas
    contador.textContent = totalCurtidas // atualiza o contador na tela
    campoTexto.value = " " // limpa o campo de texto
    previewTexto.textContent = " " // reseta o texto do preview
})