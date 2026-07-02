import { setupPage } from "../main";
import { renderizarGrid } from "../grid";
import { POSTS } from "../data/dados-aba2";

document.addEventListener("DOMContentLoaded", () => {
    setupPage(false);
    
    const grid = document.getElementById("news-grid");
    const totalEl = document.getElementById("total-posts");
    if (grid && totalEl) {
        renderizarGrid(POSTS, grid, totalEl);
    }
});
