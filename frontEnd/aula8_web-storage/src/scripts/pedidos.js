document.addEventListener("DOMContentLoaded", function(){
    renderizarPedidos()
    // continua...
})

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos")
  const spanTotal = document.querySelector("#valor-total")
  const spanResumo = document.querySelector("#valor-total-resumo")
  const spanContador = document.querySelector("#contador-itens")

  if (!lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedido") || "[]")
  if(pedidos.length === 0){
    lista.innerHTML = "<li class='pedido-vazio'>Nenhum pedido ainda. Acesse o " +
      "<a href='index.html'>Cardápio</a> para adicionar! 😋</li>";

      if (spanTotal) spanTotal.textContent = "R$ 0,00"
      if (spanResumo) spanResumo.textContent = "R$ 0,00"
      if (spanContador) spanContador.textContent = "0 itens"
  }

  lista.innerHTML = ""
  let total = 0

  // informações - TEXTO
  const textoSpan = document.createElement("span");
  textoSpan.innerHTML = ""
  
  // CONTINUA.....

  // criando botão para REMOVER prato
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕";
  btnRemover.classList.add("btn-remover");

  btnRemover.addEventListener("click", () => {
    itemLista.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");

    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  // INSERIR NA PÁGINA A PARTE VISUAL DA LISTA
  itemLista.appendChild(textoSpan);
  itemLista.appendChild(btnRemover);
  listaResumo.appendChild(itemLista);

  const btnLimpar = document.querySelector("#btn-limpar");
  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      const listaResumo = document.querySelector("#lista-resumo");
      const secaoResumo = document.querySelector("#secao-resumo");

      // Remove todos os badges dos cards
      document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove());

      // Remove filhos da lista um a um com firstElementChild
      while (listaResumo.firstElementChild) {
        listaResumo.firstElementChild.remove();
      }

      secaoResumo.style.display = "none";
    });
  }
}
