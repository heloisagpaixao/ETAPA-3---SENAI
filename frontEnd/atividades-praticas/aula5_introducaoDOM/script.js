// SELEÇÃO DE ELEMENTOS DO DOM
const nomeUsuario = document.querySelector("#nome-usuario")
const fotoPerfil = document.querySelector("#foto-perfil")
const containerPerfil = document.querySelector("#container-perfil")
const badgeStatus = document.querySelector("#badge-status")
const listaSkills = document.querySelectorAll(".skill")


// 1. IDENTIDADE
// Altera o texto do nome do usuário e substitui pelo seu nome completo
nomeUsuario.textContent = "Heloísa Gabrielly Paixão"


// 2. AVATAR (!!!!!!!!!!!!!)
// Modifica o atributo "src" da imagem de perfil
fotoPerfil.src = "foto-perfil_dom.png"


// 3. PERSONALIZAÇÃO
// Altera a cor de fundo do perfil
containerPerfil.style.backgroundColor = "#dac6ff"


// 4. STATUS REAL
// Adiciona "online" ao status e aplica o estilo definido no CSS (.online)
badgeStatus.classList.add("online");

// Modifica o texto do status para "Status: Ativo"
badgeStatus.textContent = "Status: Ativo"


// 5. AUDITORIA (!!!!!!!!!!!!!)
// Conta quantos elementos existem na lista
const totalSkills = listaSkills.length

// Mostra o total de skills no console
console.log(`Total de skills: ${totalSkills}!`)