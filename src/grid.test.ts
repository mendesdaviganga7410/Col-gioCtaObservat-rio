import { describe, it, expect, beforeEach } from 'vitest';
import { formatarData, renderizarGrid } from './grid';
import { Post } from './types/post';

describe('formatarData', () => {
    it('formata datas válidas', () => {
        expect(formatarData('2026-03-01')).toBe('01 mar. 2026');
        expect(formatarData('2026-12-31')).toBe('31 dez. 2026');
    });

    it('retorna vazio para strings inválidas', () => {
        expect(formatarData('')).toBe('');
        expect(formatarData('2026-13')).toBe('');
    });
});

describe('renderizarGrid', () => {
    let grid: HTMLElement;
    let totalEl: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="news-grid"></div>
            <div id="total-posts"></div>
        `;
        grid = document.getElementById('news-grid') as HTMLElement;
        totalEl = document.getElementById('total-posts') as HTMLElement;
    });

    it('renderiza o estado vazio', () => {
        renderizarGrid([], grid, totalEl);
        expect(grid.innerHTML).toContain('Nenhuma publicação ainda');
        expect(totalEl.textContent).toBe('');
    });

    it('ordena os posts corretamente por data e formata o total', () => {
        const posts: Post[] = [
            { id: '1', titulo: 'A', categoria: 'Notícia', data: '2026-01-01', thumbnail: '', link: '#', resumo: '' },
            { id: '2', titulo: 'B', categoria: 'Notícia', data: '2026-03-01', thumbnail: '', link: '#', resumo: '' },
        ];
        
        renderizarGrid(posts, grid, totalEl);
        
        // Verifica se B (mais recente) veio antes de A na ordem do DOM
        const titulos = Array.from(grid.querySelectorAll('.card-titulo')).map(el => el.textContent);
        expect(titulos).toEqual(['B', 'A']);
        expect(totalEl.textContent).toBe('2 publicações');
    });

    it('renderiza placeholder para thumbnail vazia', () => {
        const posts: Post[] = [
            { id: '1', titulo: 'A', categoria: 'Notícia', data: '2026-01-01', thumbnail: '', link: '#', resumo: '' },
        ];
        
        renderizarGrid(posts, grid, totalEl);
        expect(grid.querySelector('.thumb-placeholder')).not.toBeNull();
        expect(grid.querySelector('.thumb-img')).toBeNull();
    });

    it('apresenta botão "Em breve" ou "Leia mais"', () => {
        const posts: Post[] = [
            { id: '1', titulo: 'Sem link', categoria: 'Notícia', data: '2026-01-01', thumbnail: '', link: '#', resumo: '' },
            { id: '2', titulo: 'Com link', categoria: 'Notícia', data: '2026-01-02', thumbnail: '', link: 'page.html', resumo: '' },
        ];
        
        renderizarGrid(posts, grid, totalEl);
        
        const botoes = Array.from(grid.querySelectorAll('.card-link-btn')).map(el => el.textContent);
        // post 2 is newer, so it appears first
        expect(botoes).toEqual(['Leia mais →', 'Em breve']);
    });
});
