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
        const card = document.createElement('a');
        card.className = 'topico-card';
        card.href = `${eixo.id}-${topico.id}.html`;
        card.style.setProperty('--eixo-cor', eixo.cor);

        const icone = document.createElement('div');
        icone.className = 'topico-card-icone';
        icone.textContent = topico.icone;

        const body = document.createElement('div');
        body.className = 'topico-card-body';

        const titulo = document.createElement('h3');
        titulo.className = 'topico-card-titulo';
        titulo.textContent = topico.titulo;

        const descricao = document.createElement('p');
        descricao.className = 'topico-card-descricao';
        descricao.textContent = topico.descricao;

        const count = document.createElement('span');
        count.className = 'topico-card-count';
        count.textContent = `${topico.posts.length} publicaç${topico.posts.length === 1 ? 'ão' : 'ões'}`;

        const btn = document.createElement('span');
        btn.className = 'topico-card-btn';
        btn.textContent = 'Explorar →';

        body.appendChild(titulo);
        body.appendChild(descricao);
        body.appendChild(count);
        body.appendChild(btn);

        card.appendChild(icone);
        card.appendChild(body);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
});
