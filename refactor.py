"""
refactor_abas.py
Remove os blocos de JS inline (formatarData, renderizarGrid e modal)
de cada Aba e substitui por imports externos de ../js/menu.js e ../js/grid.js.
O array POSTS permanece inline em cada HTML — é o único dado que varia por aba.
"""

import re
import os

BASE = "/home/davi/Downloads/Col-gioCtaObservat-rio-main/Páginas"

# Head: adiciona os imports dos módulos JS
HEAD_OLD = (
    '    <link href="https://fonts.googleapis.com/css2?family=Montserrat:'
    'wght@300;400;500;600;700;900&display=swap"\n        rel="stylesheet">\n</head>'
)
HEAD_NEW = (
    '    <link href="https://fonts.googleapis.com/css2?family=Montserrat:'
    'wght@300;400;500;600;700;900&display=swap"\n        rel="stylesheet">\n'
    '    <!-- menu.js: controla o modal de navegação off-canvas -->\n'
    '    <script src="../js/menu.js" defer></script>\n'
    '    <!-- grid.js: lê POSTS (declarado abaixo) e renderiza os cards -->\n'
    '    <script src="../js/grid.js" defer></script>\n</head>'
)

# Regex: captura apenas o bloco POSTS (que queremos manter)
POSTS_PATTERN = re.compile(
    r'/\*\s*={64}.*?BANCO DE POSTAGENS.*?={64}\s*\*/\s*'  # comentário guia
    r'(const POSTS\s*=\s*\[.*?\];)',                        # o array em si
    re.DOTALL
)

# Regex: remove o restante do script (funções + modal)
FUNCTIONS_PATTERN = re.compile(
    r'/\*\s*={64}.*?A PARTIR DAQUI.*?={64}\s*\*/.*?</script>',
    re.DOTALL
)

for i in range(1, 8):
    path = os.path.join(BASE, f"Aba{i}.html")
    if not os.path.exists(path):
        print(f"  [SKIP] {path} não encontrado")
        continue

    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Adiciona imports no <head>
    html = html.replace(HEAD_OLD, HEAD_NEW)

    # 2. Extrai o bloco POSTS
    posts_match = POSTS_PATTERN.search(html)
    posts_block = posts_match.group(1).strip() if posts_match else "const POSTS = [];"

    # 3. Monta o guia de edição compacto que substituirá o <script> inteiro
    GUIA = (
        "/* ================================================================\n"
        "   BANCO DE POSTAGENS  ✏️  EDITE APENAS ESTE BLOCO\n"
        "   Campos: id, titulo, categoria, data, thumbnail, link, resumo\n"
        "   Deixe thumbnail=\"\" para ícone de interrogação.\n"
        "   Deixe link=\"#\" para botão \"Em breve\".\n"
        "   ================================================================ */\n"
    )

    NEW_SCRIPT = f"\n    <script>\n        {GUIA}\n        {posts_block}\n        /* grid.js (importado no <head>) lê POSTS e renderiza os cards. */\n    </script>"

    # 4. Remove todo o <script> antigo e coloca o novo enxuto
    html = re.sub(r'\s*<script>.*?</script>', NEW_SCRIPT, html, count=1, flags=re.DOTALL)

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"  [OK] Aba{i}.html refatorado")

print("\nRefatoração concluída!")
