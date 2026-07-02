#!/usr/bin/env bash
#
# deploy-github.sh — Empurra o projeto para o GitHub de forma segura e idempotente.
#
# Uso: chmod +x deploy-github.sh && ./deploy-github.sh
#
# Fluxo:
#   1. Verifica pré-requisitos (git, gh opcional)
#   2. Inicializa repositório git se necessário (branch = main)
#   3. Cria .gitignore padrão se não existir
#   4. Stage de todas as alterações (git add -A)
#   5. Se não houver nada a commitar, pula com aviso
#   6. Pergunta a mensagem de commit (com validação de não vazio)
#   7. Verifica/configura remote origin (cria no GitHub se necessário)
#   8. Push para a branch atual
#   9. Mensagem de sucesso
#

set -euo pipefail

# ────────────────────────────────────────────────────────────
# Cores para output padronizado
# ────────────────────────────────────────────────────────────
readonly NC='\033[0m'          # reset
readonly VERDE='\033[0;32m'
readonly AMARELO='\033[1;33m'
readonly VERMELHO='\033[0;31m'
readonly AZUL='\033[0;34m'

info()  { echo -e "${AZUL}[INFO]${NC}  $*"; }
ok()    { echo -e "${VERDE}[OK]${NC}    $*"; }
aviso() { echo -e "${AMARELO}[AVISO]${NC} $*"; }
erro()  { echo -e "${VERMELHO}[ERRO]${NC} $*"; }

# ────────────────────────────────────────────────────────────
# Utilitário: pergunta ao usuário com validação de não-vazio
# ────────────────────────────────────────────────────────────
ler_obrigatorio() {
    local prompt="$1" resposta
    while true; do
        read -r -p "$prompt" resposta
        if [[ -n "${resposta// /}" ]]; then
            echo "$resposta"
            return
        fi
        aviso "Resposta nao pode ficar vazia. Tente novamente."
    done
}

# ────────────────────────────────────────────────────────────
# Etapa 1 — Verificação de pré-requisitos
# ────────────────────────────────────────────────────────────
verificar_prerequisitos() {
    info "Verificando pre-requisitos..."

    if ! command -v git &>/dev/null; then
        erro "Git nao encontrado no PATH. Instale o Git e tente novamente."
        exit 1
    fi
    ok "Git encontrado: $(git --version)"

    if command -v gh &>/dev/null; then
        ok "GitHub CLI (gh) encontrado: $(gh --version 2>&1 | head -n1)"
        GH_DISPONIVEL=true
    else
        aviso "GitHub CLI (gh) nao instalado. Se for necessario criar um repositorio"
        aviso "remoto, o script falhara e voce devera usar gh manualmente ou"
        aviso "configurar o remote com: git remote add origin <URL>"
        GH_DISPONIVEL=false
    fi
}

# ────────────────────────────────────────────────────────────
# Etapa 2 — Inicialização do repositório git
# ────────────────────────────────────────────────────────────
inicializar_git() {
    if [[ -d .git ]]; then
        info "Repositorio git ja existe. Pulando init."
        return
    fi

    info "Inicializando repositorio git..."
    git init
    git checkout -b main
    ok "Repositorio inicializado na branch 'main'."
}

# ────────────────────────────────────────────────────────────
# Etapa 3 — Criação do .gitignore padrão (apenas se não existir)
# ────────────────────────────────────────────────────────────
garantir_gitignore() {
    if [[ -f .gitignore ]]; then
        aviso ".gitignore ja existe. Nao foi sobrescrito."
        return
    fi

    info "Criando .gitignore padrao..."

    cat > .gitignore <<-'EOF'
# Dependências
node_modules/

# Build
dist/
dist-ssr/

# Ambiente
.env
.env.local
.env.*.local

# Testes e cobertura
coverage/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor / SO
.vscode/*
!.vscode/extensions.json
.idea/
*.swp
*.swo
*~
.DS_Store
Thumbs.db
EOF

    ok ".gitignore criado com entradas padrao para projeto Node/Vite."
}

# ────────────────────────────────────────────────────────────
# Etapa 4 — Stage das alterações
# ────────────────────────────────────────────────────────────
fazer_stage() {
    info "Preparando alteracoes para commit (git add -A)..."
    git add -A
    ok "Stage concluido."
}

# ────────────────────────────────────────────────────────────
# Etapa 5 — Verifica se há algo para commitar
# ────────────────────────────────────────────────────────────
verificar_stage_vazio() {
    if git diff --cached --quiet; then
        aviso "Nenhuma alteracao no stage. Nada para commitar."
        aviso "Pulando etapa de commit."
        return 1
    fi
    return 0
}

# ────────────────────────────────────────────────────────────
# Etapa 6 — Commit interativo
# ────────────────────────────────────────────────────────────
fazer_commit() {
    local mensagem
    echo ""
    mensagem=$(ler_obrigatorio "Digite a mensagem do commit: ")
    echo ""

    git commit -m "$mensagem"
    ok "Commit realizado com sucesso."
}

# ────────────────────────────────────────────────────────────
# Etapa 7 — Verificação/configuração do remote origin
# ────────────────────────────────────────────────────────────
configurar_remote() {
    local origem atual
    origem=$(git remote get-url origin 2>/dev/null || true)

    if [[ -n "$origem" ]]; then
        info "Remote 'origin' ja configurado: $origem"
        return
    fi

    # ── Remote não existe — precisa criar no GitHub ──
    if [[ "$GH_DISPONIVEL" != true ]]; then
        erro "Nao foi possivel criar o repositorio: gh (GitHub CLI) nao esta instalado."
        erro "Execute manualmente os comandos abaixo:"
        erro "  1. Crie um repositorio vazio no GitHub"
        erro "  2. git remote add origin <URL>"
        erro "  3. git push -u origin <branch>"
        exit 1
    fi

    echo ""
    info "Nenhum remote 'origin' encontrado. Vamos criar um repositorio no GitHub."

    local nome_repo visibilidade
    nome_repo=$(ler_obrigatorio "Nome do repositorio no GitHub: ")

    while true; do
        read -r -p "Visibilidade (public/private): " visibilidade
        case "$visibilidade" in
            public|private) break ;;
            *) aviso "Opcao invalida. Digite 'public' ou 'private'." ;;
        esac
    done

    echo ""
    info "Criando repositorio '$nome_repo' como $visibilidade no GitHub..."
    gh repo create "$nome_repo" "--$visibilidade" --source=. --remote=origin
    ok "Repositorio criado e remote 'origin' configurado."
}

# ────────────────────────────────────────────────────────────
# Etapa 8 — Push para o GitHub
# ────────────────────────────────────────────────────────────
enviar_para_github() {
    local branch_atual
    branch_atual=$(git branch --show-current)

    if [[ -z "$branch_atual" ]]; then
        erro "Nao foi possivel identificar a branch atual."
        exit 1
    fi

    info "Enviando alteracoes para origin/$branch_atual..."
    git push -u origin "$branch_atual"
    ok "Push realizado com sucesso para origin/$branch_atual."
}

# ────────────────────────────────────────────────────────────
# Main — executa as etapas em ordem
# ────────────────────────────────────────────────────────────
main() {
    echo ""
    echo -e "${AZUL}============================================${NC}"
    echo -e "${AZUL}  Deploy para GitHub - Observatorio CTA${NC}"
    echo -e "${AZUL}============================================${NC}"
    echo ""

    verificar_prerequisitos
    echo ""
    inicializar_git
    echo ""
    garantir_gitignore
    echo ""
    fazer_stage
    echo ""

    # Só pergunta a mensagem e commita se houver mudanças no stage
    if verificar_stage_vazio; then
        fazer_commit
        echo ""
    fi

    configurar_remote
    echo ""

    # Só faz push se houver commits para enviar
    local ahead
    ahead=$(git rev-list --count "@{upstream}"...HEAD 2>/dev/null || echo "0")
    if [[ "$ahead" -gt 0 ]] || ! git rev-parse "@{upstream}" &>/dev/null 2>&1; then
        enviar_para_github
    else
        aviso "Nenhum commit novo para enviar. Push pulado."
    fi

    echo ""
    echo -e "${VERDE}============================================${NC}"
    echo -e "${VERDE}  Deploy concluido com sucesso!${NC}"
    echo -e "${VERDE}============================================${NC}"
    echo ""
}

main "$@"
