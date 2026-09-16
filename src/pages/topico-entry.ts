import { setupPage } from '../main';
import { renderizarGrid } from '../grid';
import { EIXOS } from '../data/eixos';

/**
 * Entry-point unificado para páginas de tópico.
 * Lê os atributos data-eixo e data-topico do <body>
 * para identificar qual conjunto de posts renderizar e atualizar cabeçalhos.
 */
document.addEventListener('DOMContentLoaded', () => {
    setupPage();

    const eixoId = document.body.dataset['eixo'];
    const topicoId = document.body.dataset['topico'];

    if (!eixoId || !topicoId) {
        console.error('Atributos data-eixo e/ou data-topico ausentes no <body>.');
        return;
    }

    const eixo = EIXOS.find(e => e.id === eixoId);
    if (!eixo) {
        console.error(`Eixo "${eixoId}" não encontrado.`);
        return;
    }

    const topico = eixo.topicos.find(t => t.id === topicoId);
    if (!topico) {
        console.error(`Tópico "${topicoId}" não encontrado no eixo "${eixoId}".`);
        return;
    }

    // Preenchimento dinâmico do cabeçalho e breadcrumb
    const topicoTitulo = document.getElementById('topico-titulo');
    if (topicoTitulo) topicoTitulo.textContent = topico.titulo;

    const topicoDescricao = document.getElementById('topico-descricao');
    if (topicoDescricao) topicoDescricao.textContent = topico.descricao;

    const eixoLink = document.getElementById('breadcrumb-eixo-link') as HTMLAnchorElement | null;
    if (eixoLink) {
        eixoLink.href = `${eixo.id}.html`;
        eixoLink.textContent = eixo.titulo;
    }

    const topicoBreadcrumb = document.getElementById('breadcrumb-topico');
    if (topicoBreadcrumb) topicoBreadcrumb.textContent = topico.titulo;

    const grid = document.getElementById('news-grid');
    const totalEl = document.getElementById('total-posts');
    if (grid && totalEl) {
        renderizarGrid(topico.posts, grid, totalEl);
    }
});
