import { initNavigationMenu } from './menu';

/**
 * Calcula o prefixo de caminho relativo para os assets/partials
 * baseado na profundidade da página atual na árvore de URLs.
 *
 * - index.html (raiz) → "assets/partials/"
 * - pages/aba*.html  → "../assets/partials/"
 */
function resolverBasePath(): string {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    // Em dev (Vite) paths como /pages/aba1.html têm depth=2; raiz tem depth=0 ou 1
    // Usamos a presença do segmento "pages" como sinal mais robusto
    const emSubpasta = window.location.pathname.includes('/pages/');
    return emSubpasta ? '../assets/partials/' : 'assets/partials/';
}

/**
 * Carrega e injeta os partials de header e footer, depois inicializa o menu.
 * Não precisa mais de parâmetros externos — resolve o caminho automaticamente.
 */
export async function setupPage(): Promise<void> {
    const basePath = resolverBasePath();

    try {
        const [headerRes, footerRes] = await Promise.all([
            fetch(basePath + 'header.html'),
            fetch(basePath + 'footer.html'),
        ]);

        if (headerRes.ok) {
            const html = await headerRes.text();
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = html;
                // initNavigationMenu é chamado após o HTML do header estar no DOM
                initNavigationMenu();
            }
        } else {
            console.error(`Falha ao carregar header: ${headerRes.status}`);
        }

        if (footerRes.ok) {
            const html = await footerRes.text();
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = html;
            }
        } else {
            console.error(`Falha ao carregar footer: ${footerRes.status}`);
        }
    } catch (e) {
        console.error('Falha ao carregar os partials de layout:', e);
    }
}
