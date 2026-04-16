/* ==========================================================
   AULA 07: DOM AVANÇADO - TECHFOOD
   ========================================================== */

// 01. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 02. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// 03. DELEGAÇÃO DE EVENTOS (DOM Avançado - Aula 7)
const main = document.querySelector("main")

main.addEventListener("click", (event) => { // TODOS os eventos de clique dentro da main
    const clicado = event.target

    // 3.1. DIFERENCIANDO os eventos de clique - QUANTIDADE DE ITENS
    if (clicado.classList.contains("btn-menos")) {
        const box = clicado.parentElement // qualquer botão de menos da página vai executar, INDEPENDENTE de quem for o pai
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)

        spanQtd.textContent = Math.max(1, valorAtual - 1) // MÍNIMO 1, diminuir a contagem do valor atual
        atualizarPrecoCard(box)
        return

    }

    if (clicado.classList.contains("btn-mais")) {
        const box = clicado.parentElement // qualquer botão de menos da página vai executar, INDEPENDENTE de quem for o pai
        const spanQtd = box.querySelector(".qtd-valor")
        spanQtd.textContent = Number(spanQtd.textContent) + 1 // aumentar a contagem -> NÃO precisa de validação
        atualizarPrecoCard(box)
        return

    }

    // 3.2. AÇÃO DO BOTÃO DE PEDIDO
    if (clicado.classList.contains("btn-pedido")) {
        event.preventDefault();

        const card = clicado.parentElement;
        const nomePrato = card.querySelector("h3").textContent;
        const quantidade = card.querySelector(".qtd-valor").textContent;
        const precoExibido = card.querySelector(".preco").textContent;

        // Efeito visual quando clicado "Pedir Agora"
        clicado.textContent = "✔️ Adicionado!"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true

        // Voltar para as configurações originais do CSS depois de um tempo pré-definido.
        setTimeout(() => {
            clicado.textContent = "Pedir Agora"
            clicado.style.backgroundColor = ""
            clicado.disable = false

        }, 1500) // 1 segundo e meio!!!

        if (!card.querySelector(".badge-adicionado")) {
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'>✔️ No resumo</span>"
            )
        }

        adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
    }
}) // acabou o main ouvinte de clique.

// 04. FUNÇÕES DE ATUALIZAR PREÇO E INSERIR PRODUTO NO RESUMO
function atualizarPrecoCard(box) {
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)

    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function adicionarItemAoResumo(nome, quantidade, preco, cardOrigem) {
    const secaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")

    if (!secaoResumo || !listaResumo) return

    // exibindo a seção "resumo"
    secaoResumo.style.display = "block"

    // criando um item na lista
    const itemLiista = document.createElement("li")
    itemLiista.classList.add("item-resumo")

    // informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = quantidade + "x " + nome + " — " + preco

    // criando botão para REMOVER prato
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "✕"
    btnRemover.classList.add("btn-remover")

}
