/* ============================================================
   SCRIPT.JS — Lista de Jogos
   ⚠ ESTE ARQUIVO TEM 2 BUGS QUE VOCÊ PRECISA ENCONTRAR E
   CORRIGIR. Veja a prova para detalhes.
   ============================================================ */

const CHAVE_STORAGE = "meus_jogos";

/* ============================================================
   1) INICIALIZAÇÃO
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  configurarFormulario();
  renderizarJogos();
  configurarLimparLista();
});

/* ============================================================
   2) CONFIGURAR SUBMIT DO FORMULÁRIO
   ============================================================ */
function configurarFormulario() {
  const form = document.querySelector("#form-jogo");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const jogo = {
      titulo: document.querySelector("#input-titulo").value,
      produtora: document.querySelector("#input-produtora").value,
      plataforma: document.querySelector("#input-plataforma").value,
      nota: Number(document.querySelector("#input-nota").value),
      comentario: document.querySelector("#input-comentario").value,
    };

    salvarJogo(jogo);
    form.reset();
    renderizarJogos();
  });
}

/* ============================================================
   3) SALVAR JOGO NO LOCALSTORAGE
   ============================================================ */
function salvarJogo(jogo) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
  lista.push(jogo);
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
  renderizarJogos();
}

/* ============================================================
   4) MOSTRAR OS JOGOS NA TELA
   ============================================================ */
function renderizarJogos() {
  const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
  const ul = document.querySelector("#lista-jogos");
  const msgVazio = document.querySelector("#msg-vazio");
  const contador = document.querySelector("#contador");

  ul.innerHTML = "";

  if (lista.length === 0) {
    msgVazio.style.display = "block";
    if (contador) contador.textContent = "0 jogos.";
    return;
  }
  msgVazio.style.display = "none";

  lista.forEach(function (jogo, indice) {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${jogo.titulo}</strong>
      <div class="meta">Produtora: ${jogo.produtora} • Plataforma: ${jogo.plataforma} • Nota: ${jogo.nota}/5</div>
      <div class="comentario">"${jogo.comentario}"</div>
      <button class="btn-excluir" data-index="${indice}">Excluir</button>
    `;
    ul.appendChild(li);
  });

  const totalJogos = lista.reduce(function (contador, p) {
    return contador + p.lista;
  }, 0);
  if (contador) {
    contador.textContent = `${totalJogos} ${totalJogos === 1 ? "jogo." : "jogos."}`;
  }
}

/* ============================================================
   5) DELEGAÇÃO DE EVENTOS — BOTÃO EXCLUIR
   ============================================================ */
document
  .querySelector("#lista-jogos")
  .addEventListener("click", function (event) {
    // 🐛 ATENÇÃO: tem um bug aqui. O botão Excluir não funciona.
    //    Olhe com atenção como o botão é criado no innerHTML acima (função 4).
    if (event.target.id === "btn-excluir") {
      const indice = event.target.getAttribute("data-index");
      excluirJogo(indice);
      renderizarJogos()
    }
  });

/* ============================================================
   6) EXCLUIR JOGO
   ============================================================ */
function excluirJogo(indice) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
  lista.splice(indice, 1);
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
  renderizarJogos();
}

/* ============================================================
   7) LIMPAR LISTA
   ============================================================ */

function configurarLimparLista() {
  const btn = document.querySelector("#btn-limpar");
  if (!btn) return;

  btn.addEventListener("click", function () {
    confirm();
    localStorage.removeItem(CHAVE_STORAGE);
    renderizarJogos();
  });
}
