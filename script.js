// ============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ============================

// Evento de rolagem para adicionar classe 'visible' às seções quando aparecem na tela
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Distância do topo da seção em relação à tela
        const windowHeight = window.innerHeight; // Altura da janela visível
        if (sectionTop < windowHeight - 100) { // Se a seção está 100px antes do fim da tela
            section.classList.add('visible'); // Adiciona a classe para animação
        }
    });
});

// ============================
// SLIDER DE PROJETOS
// ============================

let currentProject = 0; // Índice do projeto atualmente visível
const projects = document.querySelectorAll('.project'); // Seleciona todos os projetos

/**
 * Exibe o projeto correspondente ao índice fornecido.
 * @param {number} index - Índice do projeto a ser exibido
 */
function showProject(index) {
    projects.forEach((project, i) => {
        project.classList.toggle('active', i === index); // Adiciona a classe 'active' apenas ao projeto atual
    });
}

// ============================
// EVENTOS DOS BOTÕES DO SLIDER
// ============================

// Botão "Próximo" - Avança para o próximo projeto no carrossel
document.querySelector('#next').addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length; // Garante looping circular
    showProject(currentProject);
});

// Botão "Anterior" - Retorna ao projeto anterior no carrossel
document.querySelector('#prev').addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length; // Garante looping circular
    showProject(currentProject);
});

// Exibe o primeiro projeto ao carregar a página
showProject(currentProject);
