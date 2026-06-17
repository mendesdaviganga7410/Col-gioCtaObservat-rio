/**
 * dados-aba1.js — Banco de postagens da Categoria 1
 *
 * ================================================================
 *  BANCO DE POSTAGENS  ✏️  EDITE APENAS ESTE BLOCO
 *  Campos:
 *    id        → identificador único (não repita)
 *    titulo    → título que aparece no card
 *    categoria → Pesquisa | Notícia | Evento | Destaque
 *    data      → formato AAAA-MM-DD  (ex: "2025-08-20")
 *    thumbnail → caminho da imagem   (ex: "imagens/foto.jpg")
 *                deixe ""  para exibir o ícone de interrogação
 *    link      → página da postagem  (ex: "postagens/post.html")
 *                deixe "#" para o botão aparecer como "Em breve"
 *    resumo    → texto curto exibido no card (opcional)
 * ================================================================
 */
const POSTS = [

    {
        id: "post-001",
        titulo: "Impacto da IA na Rotação de Culturas de Lúpulo",
        categoria: "Pesquisa",
        data: "2026-02-12",
        thumbnail: "",
        link: "posts/impacto-ia.html",
        resumo: "Um estudo detalhado sobre como algoritmos de aprendizado de máquina estão prevendo pragas em plantações de lúpulo no interior de Minas Gerais."
    },

    {
        id: "post-002",
        titulo: "Descoberta de nova espécie de orquídea no Cerrado",
        categoria: "Notícia",
        data: "2026-01-28",
        thumbnail: "",
        link: "posts/impacto-ia.html",
        resumo: "Botânicos da região identificaram uma variação rara da Cattleya nobiliar que floresce apenas sob condições climáticas extremas."
    },

    {
        id: "post-003",
        titulo: "Drone autônomo para mapeamento de solo calcário",
        categoria: "Pesquisa",
        data: "2026-03-01",
        thumbnail: "",
        link: "posts/impacto-ia.html",
        resumo: "Protótipo desenvolvido por estudantes alcança 98% de precisão na análise de pH do solo sem a necessidade de coleta física manual."
    }

];
