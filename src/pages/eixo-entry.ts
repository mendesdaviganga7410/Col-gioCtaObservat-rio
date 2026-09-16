import { setupPage } from '../main';
import { EIXOS } from '../data/eixos';

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
        thumb.style.fontSize = '42px';
        thumb.style.display = 'flex';
        thumb.style.alignItems = 'center';
        thumb.style.justifyContent = 'center';
        thumb.style.backgroundColor = 'var(--gray-200)';
        thumb.textContent = topico.icone;

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
