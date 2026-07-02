export function initNavigationMenu(): void {
    const navigationModal = document.getElementById('navigationModal') as HTMLDialogElement | null;
    const mainNavTrigger = document.getElementById('mainNavTrigger') as HTMLButtonElement | null;
    const closeNavModal = document.getElementById('closeNavModal') as HTMLButtonElement | null;
    
    if (!navigationModal || !mainNavTrigger || !closeNavModal) return;

    // Abre o modal ao clicar no ícone de hambúrguer
    mainNavTrigger.addEventListener('click', () => navigationModal.showModal());

    // Fecha o modal ao clicar no botão ×
    closeNavModal.addEventListener('click', () => navigationModal.close());

    // Fecha o modal ao clicar fora da área do painel (no backdrop)
    navigationModal.addEventListener('click', (e: MouseEvent) => {
        if (e.target === navigationModal) navigationModal.close();
    });
}
