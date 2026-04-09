// MISSÃO 1 - Recepção do Espectador (Manipulação Estática e Date)
let saudacao = document.querySelector("#saudacao-cinema");

const tempoAgora = new Date();
const hora = tempoAgora.getHours();

if (hora >= 0 && hora < 12) {
    saudacao.textContent = "Bom dia! Bem-vindo à Sessão Matinê!"
}
else if (hora >= 12 && hora <= 18) {
    saudacao.textContent = "Boa tarde! Sessão da Tarde liberada!"
}
else {
    saudacao.textContent = "Boa noite! Prepare-se para a Sessão Coruja!"
};


// Missão 2: Sala VIP (Eventos de Mouse e ClassList)
const bannervip = document.querySelector("#banner-vip");

bannervip.addEventListener('mouseenter', () => {
    bannervip.classList.add("modo-vip");
});

bannervip.addEventListener('mouseleave', () => {
    bannervip.classList.remove("modo-vip");
});


// Missão 3: Bilheteria Express (Evento Input e Value)
let qtdIngressos = document.querySelector("#qtd-ingressos");
let totalPagar = document.querySelector("#total-pagar");

qtdIngressos.addEventListener('input', () => {
    const valor = Number(qtdIngressos.value) * 35.00;

    totalPagar.textContent = `${valor.toFixed(2)}`;
});


// Missão 4: Mural de Críticas (Click, Value, Concatenação e innerHTML) ***
const btnPublicar = document.querySelector("#btn-publicar");
const campoFilme = document.querySelector("#nome-filme");
const muralCriticas = document.querySelector("#mural-criticas");

campoFilme.addEventListener('input', () => {
    const filmeDigitado = campoFilme.value;
    const filmeFormatado = filmeDigitado.concat()
    
});

btnPublicar.addEventListener("click", () => {
        muralCriticas.innerHTML += '<article class="card-critica"><h3>🎬 Filme:' + filmeFormatado + '⭐</h3></article>';
    });


// Missão 5: Apagar o Quadro (Esvaziar com innerHTML e Focus) ***
const btnApagar = document.querySelector("#btn-apagar");

btnApagar.addEventListener("click", () => {
    muralCriticas.innerHTML = " "
    campoFilme.focus()
});