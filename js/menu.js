/**
 * menu.js — Módulo de navegação off-canvas
 * Responsável por abrir e fechar o modal lateral de navegação.
 * Usado em: index.html e todas as Abas.
 * Carregado com `defer` para garantir que o DOM já existe.
 */

const navigationModal = document.getElementById('navigationModal');
const mainNavTrigger   = document.getElementById('mainNavTrigger');
const closeNavModal    = document.getElementById('closeNavModal');

// Abre o modal ao clicar no ícone de hambúrguer
mainNavTrigger.addEventListener('click', () => navigationModal.showModal());

// Fecha o modal ao clicar no botão ×
closeNavModal.addEventListener('click', () => navigationModal.close());

// Fecha o modal ao clicar fora da área do painel (no backdrop)
navigationModal.addEventListener('click', e => {
    if (e.target === navigationModal) navigationModal.close();
});
