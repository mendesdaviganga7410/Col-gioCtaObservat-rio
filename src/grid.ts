import { Post } from './types/post';

/**
 * Converte "AAAA-MM-DD" em "DD mmm. AAAA" (ex: "01 mar. 2026").
 * Retorna vazio se a string for inválida.
 */
export function formatarData(str: string): string {
    if (!str) return '';
    const parts = str.split('-');
    if (parts.length !== 3) return '';
    const [ano, mes, dia] = parts;
    if (!ano || !mes || !dia) return '';
    const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const mesIndex = parseInt(mes, 10) - 1;
    if (mesIndex < 0 || mesIndex > 11) return '';
    return `${dia} ${meses[mesIndex]}. ${ano}`;
}

/** SVG de interrogação usado como placeholder de imagem ausente. */
function criarPlaceholderSVG(): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '48');
    svg.setAttribute('height', '48');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    circle.setAttribute('stroke', '#8fa3bf');
    circle.setAttribute('stroke-width', '1.5');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4');
    path.setAttribute('stroke', '#8fa3bf');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', '12');
    dot.setAttribute('cy', '17');
    dot.setAttribute('r', '0.5');
    dot.setAttribute('fill', '#8fa3bf');
    dot.setAttribute('stroke', '#8fa3bf');
    dot.setAttribute('stroke-width', '1');

    svg.appendChild(circle);
    svg.appendChild(path);
    svg.appendChild(dot);
    return svg;
}

/** Cria o elemento <article> de um card de post via DOM API (sem strings de HTML). */
function criarCard(post: Post): HTMLElement {
    const emBreve = !post.link || post.link === '#';

    // --- Thumb ---
    const thumb = document.createElement('div');
    thumb.className = 'card-thumb';

    if (post.thumbnail) {
        const img = document.createElement('img');
        img.className = 'thumb-img';
        img.src = post.thumbnail;
        img.alt = post.titulo;
        img.loading = 'lazy';
        // Ao falhar o carregamento da imagem, substitui pelo placeholder
        img.addEventListener('error', () => {
            const placeholder = document.createElement('div');
            placeholder.className = 'thumb-placeholder';
            placeholder.appendChild(criarPlaceholderSVG());
            const label = document.createElement('span');
            label.textContent = 'Imagem pendente';
            placeholder.appendChild(label);
            img.replaceWith(placeholder);
        });
        thumb.appendChild(img);
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'thumb-placeholder';
        placeholder.appendChild(criarPlaceholderSVG());
        const label = document.createElement('span');
        label.textContent = 'Imagem pendente';
        placeholder.appendChild(label);
        thumb.appendChild(placeholder);
    }

    const badge = document.createElement('span');
    badge.className = 'card-categoria';
    badge.textContent = post.categoria || 'Geral';
    thumb.appendChild(badge);

    // --- Body ---
    const body = document.createElement('div');
    body.className = 'card-body';

    const dataEl = document.createElement('div');
    dataEl.className = 'card-data';
    dataEl.textContent = formatarData(post.data);
    body.appendChild(dataEl);

    const titulo = document.createElement('div');
    titulo.className = 'card-titulo';
    titulo.textContent = post.titulo;
    body.appendChild(titulo);

    if (post.resumo) {
        const resumo = document.createElement('div');
        resumo.className = 'card-resumo';
        resumo.textContent = post.resumo;
        body.appendChild(resumo);
    }

    if (emBreve) {
        const btn = document.createElement('span');
        btn.className = 'card-link-btn card-link-btn--disabled';
        btn.textContent = 'Em breve';
        btn.setAttribute('aria-disabled', 'true');
        body.appendChild(btn);
    } else {
        const btn = document.createElement('a');
        btn.className = 'card-link-btn';
        btn.href = post.link!;
        btn.textContent = 'Leia mais →';
        // Evita que o clique no botão dispare também o listener do card
        btn.addEventListener('click', (e) => e.stopPropagation());
        body.appendChild(btn);
    }

    // --- Article ---
    const article = document.createElement('article');
    article.className = 'news-card';

    if (!emBreve) {
        // Torna o card inteiro clicável e acessível via teclado
        article.setAttribute('tabindex', '0');
        article.setAttribute('role', 'link');
        article.setAttribute('aria-label', `Leia mais sobre: ${post.titulo}`);

        const navegarParaPost = () => { window.location.href = post.link!; };
        article.addEventListener('click', navegarParaPost);
        article.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navegarParaPost();
            }
        });
    }

    article.appendChild(thumb);
    article.appendChild(body);
    return article;
}

/**
 * Renderiza todos os cards no elemento #news-grid.
 * Ordena os posts do mais recente para o mais antigo.
 * Exibe placeholder SVG quando a thumbnail não foi fornecida.
 */
export function renderizarGrid(posts: Post[], grid: HTMLElement, totalEl: HTMLElement): void {
    // Ordena por data decrescente (mais novo primeiro)
    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );

    // Exibe o contador de publicações
    totalEl.textContent = sortedPosts.length
        ? `${sortedPosts.length} publicaç${sortedPosts.length === 1 ? 'ão' : 'ões'}`
        : '';

    // Limpa o grid antes de renderizar
    grid.innerHTML = '';

    // Estado vazio: nenhum post cadastrado
    if (!sortedPosts.length) {
        const empty = document.createElement('div');
        empty.className = 'grid-empty';
        const msg = document.createElement('p');
        msg.innerHTML = 'Nenhuma publicação ainda.<br>Adicione entradas no array <strong>POSTS</strong> dentro deste arquivo.';
        empty.appendChild(msg);
        grid.appendChild(empty);
        return;
    }

    // Adiciona os cards ao DOM
    const fragment = document.createDocumentFragment();
    sortedPosts.forEach(post => fragment.appendChild(criarCard(post)));
    grid.appendChild(fragment);
}
