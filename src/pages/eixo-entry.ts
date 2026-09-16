import { setupPage } from '../main';
import { EIXOS } from '../data/eixos';

const TOPIC_SVG_ICONS: Record<string, string> = {
    'mapeamento-agroindustrial': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>`,
    'profissoes-em-alta': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    'cesta-basica': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    'poder-de-compra': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    'primeiro-emprego': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    'mulheres-agro-ti': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    'agro-40-profissional-hibrido': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
    'matematica-aplicada': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"></path></svg>`,
    'guia-campus-ingressos': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    'trajetoria-egressos': `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
};

/**
 * Entry-point unificado para páginas de seleção de eixo.
 * Lê o atributo data-eixo do <body> para identificar qual eixo renderizar.
 */
document.addEventListener('DOMContentLoaded', () => {
    setupPage();

    const eixoId = document.body.dataset['eixo'];
    if (!eixoId) {
        console.error('Atributo data-eixo ausente no <body>.');
        return;
    }

    const eixo = EIXOS.find(e => e.id === eixoId);
    if (!eixo) {
        console.error(`Eixo "${eixoId}" não encontrado em EIXOS.`);
        return;
    }

    const container = document.getElementById('topicos-grid');
    if (!container) return;

    const fragment = document.createDocumentFragment();

    eixo.topicos.forEach(topico => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `${eixo.id}-${topico.id}.html`;
        });

        const thumb = document.createElement('div');
        thumb.className = 'card-thumb';
        thumb.style.display = 'flex';
        thumb.style.alignItems = 'center';
        thumb.style.justifyContent = 'center';
        thumb.style.backgroundColor = 'var(--gray-200)';
        thumb.style.color = 'var(--color-primary)';
        thumb.innerHTML = TOPIC_SVG_ICONS[topico.id] || `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`;

        const badge = document.createElement('span');
        badge.className = 'card-categoria';
        badge.textContent = `Tópico`;
        thumb.appendChild(badge);

        const body = document.createElement('div');
        body.className = 'card-body';

        const dataEl = document.createElement('div');
        dataEl.className = 'card-data';
        dataEl.textContent = `${topico.posts.length} publicaç${topico.posts.length === 1 ? 'ão' : 'ões'}`;

        const titulo = document.createElement('h3');
        titulo.className = 'card-titulo';
        titulo.textContent = topico.titulo;

        const resumo = document.createElement('p');
        resumo.className = 'card-resumo';
        resumo.textContent = topico.descricao;

        const btn = document.createElement('span');
        btn.className = 'card-link-btn';
        btn.textContent = 'EXPLORAR TÓPICO →';

        body.appendChild(dataEl);
        body.appendChild(titulo);
        body.appendChild(resumo);
        body.appendChild(btn);

        card.appendChild(thumb);
        card.appendChild(body);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
});
