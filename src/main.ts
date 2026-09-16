import { initNavigationMenu } from './menu';

/**
 * Calcula o prefixo de caminho relativo para os assets/partials
 * baseado na profundidade da página atual na árvore de URLs.
 */
function resolverBasePath(): string {
    const emSubpasta = window.location.pathname.includes('/pages/');
    return emSubpasta ? '../assets/partials/' : 'assets/partials/';
}

/**
 * Ajusta os links da barra horizontal nav.main-menu e destaca a aba ativa.
 */
function configureMainMenu(): void {
    const emSubpasta = window.location.pathname.includes('/pages/');
    const pagePrefix = emSubpasta ? '' : 'pages/';
    const homePrefix = emSubpasta ? '../index.html' : 'index.html';

    const homeLink = document.getElementById('nav-link-home') as HTMLAnchorElement | null;
    if (homeLink) homeLink.href = homePrefix;

    for (let i = 1; i <= 5; i++) {
        const link = document.getElementById(`nav-link-eixo${i}`) as HTMLAnchorElement | null;
        if (link) {
            link.href = `${pagePrefix}eixo${i}.html`;
        }
    }

    const activeEixo = document.body.dataset['eixo'];
    const activePage = document.body.dataset['page'];

    const items = document.querySelectorAll('#main-eixos-menu ul li');
    items.forEach(item => {
        item.classList.remove('active');
        const eixo = item.getAttribute('data-eixo');
        if (activeEixo && eixo === activeEixo) {
            item.classList.add('active');
        } else if (activePage === 'home' && eixo === 'home') {
            item.classList.add('active');
        }
    });
}

/**
 * Carrega e injeta os partials de header e footer, depois inicializa os menus.
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
                configureMainMenu();
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
