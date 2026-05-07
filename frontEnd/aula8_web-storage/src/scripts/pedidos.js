document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  // continua...
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (!lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedido") || "[]");
  if (pedidos.length === 0) {
    lista.innerHTML =
      "<li class='pedido-vazio'>Nenhum pedido ainda. Acesse o " +
      "<a href='index.html'>Cardápio</a> para adicionar! 😋</li>";

    if (spanTotal) spanTotal.textContent = "R$ 0,00";
    if (spanResumo) spanResumo.textContent = "R$ 0,00";
    if (spanContador) spanContador.textContent = "0 itens";
  }

  lista.innerHTML = "";
  let total = 0;

  pedidos.forEach(function (pedido, indice) {
    const li = document.createElement("li");
    li.classList.add("item-pedido");

    // informações - TEXTO
    const textoSpan = document.createElement("span");
    textoSpan.innerHTML =
      "<strong>" +
      pedido.nome +
      "</strong>" +
      " - " +
      pedido.qtd +
      " x " +
      " R$ " +
      pedido.preco.tofixed(2).replace(".", ",") +
      " = <span class='subtotal-item'> R$ " +
      pedido.subtotal.tofixed(2).replace(".", ",") +
      "</span>";

    // criando botão para REMOVER prato
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "✕";
    btnRemover.classList.add("btn-remover");

    btnRemover.addEventListener("click", () => {
      const lista = JSON.parse(
        localStorage.getItem("techfood_pedidos") || "[]",
      );

      lista.splice(indice, 1);
      localStorage.setItem("techfood_pedidos");
    }); // FIM btn-remover

    li.appendChild(textoSpan);
    li.appendChild(btnRemover);
    lista.appendChild(li);
    total += pedido.subtotal

    // mais um trecho
    const totalFmt = " R$ " + total.tofixed(2).replace(".", ",")

  }); // FIM pedidos.forEach
}

function configurarLimparPedidos(){
  const btn = document.querySelector("#btn-limpar-pedidos")

  if(!btn) return // INATIVO se não houver nenhum pedido

  btn.addEventListener("click", function(){
    localStorage.removeItem("techfood_pedidos")
    renderizarPedidos();
  })
}