/**
 * grid.js — Engine de renderização do grid de postagens
 * Lê o array `POSTS` declarado em cada Aba e monta os cards no DOM.
 * Carregado com `defer` APÓS o script inline de dados (que declara POSTS).
 *
 * Dependência: cada HTML deve declarar `const POSTS = [...]`
 * antes de importar este arquivo via <script defer>.
 */

/**
 * Converte "AAAA-MM-DD" em "DD mmm. AAAA" (ex: "01 mar. 2026").
 * Retorna vazio se a string for inválida.
 */
function formatarData(str) {
    if (!str) return '';
    const [ano, mes, dia] = str.split('-');
    const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
    return `${dia} ${meses[parseInt(mes, 10) - 1]}. ${ano}`;
}

/**
 * Renderiza todos os cards no elemento #news-grid.
 * Ordena os posts do mais recente para o mais antigo.
 * Exibe placeholder SVG quando a thumbnail não foi fornecida.
 */
function renderizarGrid() {
    const grid    = document.getElementById('news-grid');
    const totalEl = document.getElementById('total-posts');

    // Ordena por data decrescente (mais novo primeiro)
    const posts = [...POSTS].sort((a, b) => new Date(b.data) - new Date(a.data));

    // Exibe o contador de publicações
    totalEl.textContent = posts.length
        ? `${posts.length} publicaç${posts.length === 1 ? 'ão' : 'ões'}`
        : '';

    // Estado vazio: nenhum post cadastrado
    if (!posts.length) {
        grid.innerHTML = `
        <div class="grid-empty">
            <p>Nenhuma publicação ainda.<br>
            Adicione entradas no array <strong>POSTS</strong> dentro deste arquivo.</p>
        </div>`;
        return;
    }

    // Gera o HTML de cada card e injeta no grid
    grid.innerHTML = posts.map(post => {
        // Thumbnail: imagem real ou ícone de interrogação SVG
        const thumbHTML = post.thumbnail
            ? `<img class="thumb-img" src="${post.thumbnail}" alt="${post.titulo}" loading="lazy"
               onerror="this.outerHTML='<div class=thumb-placeholder><svg width=48 height=48 viewBox=\'0 0 24 24\' fill=none><circle cx=12 cy=12 r=10 stroke=#8fa3bf stroke-width=1.5/><path d=\'M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4\' stroke=#8fa3bf stroke-width=1.5 stroke-linecap=round/><circle cx=12 cy=17 r=.5 fill=#8fa3bf stroke=#8fa3bf stroke-width=1/></svg><span>Imagem pendente</span></div>'">`
            : `<div class="thumb-placeholder">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                   <circle cx="12" cy="12" r="10" stroke="#8fa3bf" stroke-width="1.5"/>
                   <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4"
                         stroke="#8fa3bf" stroke-width="1.5" stroke-linecap="round"/>
                   <circle cx="12" cy="17" r="0.5" fill="#8fa3bf" stroke="#8fa3bf" stroke-width="1"/>
               </svg>
               <span>Imagem pendente</span>
           </div>`;

        // Botão: "Em breve" (cinza, não clicável) ou "Leia mais →" (link ativo)
        const emBreve = !post.link || post.link === '#';
        const btnHTML = emBreve
            ? `<span class="card-link-btn" style="background:#aaa;cursor:default;">Em breve</span>`
            : `<a href="${post.link}" class="card-link-btn" onclick="event.stopPropagation()">Leia mais →</a>`;

        return `
        <article class="news-card"
            onclick="${emBreve ? '' : `window.location.href='${post.link}'`}">
            <div class="card-thumb">
                ${thumbHTML}
                <span class="card-categoria">${post.categoria || 'Geral'}</span>
            </div>
            <div class="card-body">
                <div class="card-data">${formatarData(post.data)}</div>
                <div class="card-titulo">${post.titulo}</div>
                ${post.resumo ? `<div class="card-resumo">${post.resumo}</div>` : ''}
                ${btnHTML}
            </div>
        </article>`;
    }).join('');
}

// Dispara a renderização assim que o script é carregado
renderizarGrid();
