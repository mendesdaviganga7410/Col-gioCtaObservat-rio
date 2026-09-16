# Observatório CTA

**Portal informativo do Colégio Técnico Agrícola "José Bonifácio" — UNESP Jaboticabal**

Plataforma web estática que funciona como um observatório institucional e regional, publicando e categorizando conteúdos em **5 Eixos Temáticos** estruturados com navegação em 2 níveis (Eixos e Tópicos) voltados à juventude, mercado de trabalho, agricultura de precisão, tecnologia e ensino superior.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura dos 5 Eixos Temáticos](#estrutura-dos-5-eixos-temáticos)
- [Tecnologias](#tecnologias)
- [Arquitetura e Navegação em 2 Níveis](#arquitetura-e-navegação-em-2-níveis)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Executar](#como-executar)
- [Como Construir (Build)](#como-construir-build)
- [Testes](#testes)
- [Deploy no GitHub Pages](#deploy-no-github-pages)

---

## Sobre o Projeto

O Observatório CTA é um portal de extensão e pesquisa voltado à comunidade do Colégio Técnico Agrícola "José Bonifácio" da UNESP — Campus de Jaboticabal e à região do interior paulista.

A plataforma organiza todas as suas publicações, relatórios e simuladores em **5 Eixos Temáticos**, cada um subdividido em tópicos de interesse prático para estudantes e jovens profissionais técnicos.

---

## Estrutura dos 5 Eixos Temáticos

| Eixo | Título do Eixo | Tópicos | Diretriz |
|:---:|---|---|---|
| **Eixo 1** | **Mercado de Trabalho e Oportunidades Regionais** | • Mapeamento Agroindustrial<br>• Profissões do Agro e da TI em Alta | *“Onde posso trabalhar na minha região e qual é a expectativa salarial?”* |
| **Eixo 2** | **Empreendedorismo, Custo de Vida e Economia Pessoal** | • Monitor da Cesta Básica<br>• Índice de Poder de Compra | *“Como a economia afeta o meu bolso e como posso criar meu próprio negócio?”* |
| **Eixo 3** | **Inclusão, Gênero e Diversidade no Mercado** | • Incentivo ao Primeiro Emprego<br>• Mulheres no Agro e na Tecnologia | *“Qual é a realidade social do trabalho e como promover a equidade?”* |
| **Eixo 4** | **Tecnologia e Inovação nas Profissões** | • Agro 4.0 e o Profissional Híbrido<br>• Matemática Aplicada na Prática | *“Como as ferramentas digitais e a matemática estão transformando o trabalho?”* |
| **Eixo 5** | **Vestibular, Cursos Superiores e Continuidade** | • Guia dos Câmpus e Ingressos<br>• Trajetória de Egressos | *“Qual universidade escolher e como me preparar para o ensino superior público?”* |

---

## Tecnologias

| Tecnologia | Função |
|---|---|
| **TypeScript** | Linguagem principal — tipagem estática e segurança de código |
| **Vite** | Bundler, servidor de desenvolvimento e otimizador de build MPA |
| **Vitest** | Framework de testes unitários rápidos |
| **jsdom** | Ambiente simulado de DOM para testes unitários em Node |
| **CSS3 (Vanilla)** | Design system completo com variáveis CSS, responsividade e componentes modernos |
| **HTML5 `<dialog>`** | Modal nativo para o menu de navegação off-canvas |

---

## Arquitetura e Navegação em 2 Níveis

O site adota a arquitetura **Multi-Page Application (MPA)** otimizada pelo Vite, com navegação estruturada em dois níveis:

```
Página Inicial (index.html)
  └── Cards dos 5 Eixos Temáticos
        │
        ├── Tela de Seleção do Eixo (pages/eixoN.html)
        │     └── Cards Visuais dos Tópicos do Eixo
        │           │
        │           └── Grid de Conteúdo do Tópico (pages/eixoN-topicoM.html)
        │                 └── Feed de Cards de Publicações
```

### Otimizações Implementadas
- **Entry-points unificados**: Em vez de arquivos duplicados por página, o projeto utiliza `src/pages/eixo-entry.ts` para telas de seleção e `src/pages/topico-entry.ts` para grids de conteúdo, lendo dados via atributos `data-eixo` e `data-topico` no `<body>`.
- **Fonte de dados centralizada**: Todos os eixos, tópicos e postagens estão definidos em `src/data/eixos.ts`.
- **Compatibilidade total de caminhos (Vite + GitHub Pages)**: Base configurada em `./` no `vite.config.ts`, permitindo execução em qualquer subdiretório do GitHub Pages.

---

## Estrutura de Arquivos

```
.
├── assets/
│   ├── css/
│   │   └── style.css            # CSS principal com design system e estilos dos eixos
│   └── partials/
│       ├── header.html          # Cabeçalho global com menu off-canvas
│       └── footer.html          # Rodapé institucional
├── pages/
│   ├── eixo1.html ... eixo5.html                      # 5 telas de seleção de eixo
│   ├── eixo1-mapeamento-agroindustrial.html ...       # 10 páginas de tópicos
│   └── ...
├── public/
│   └── assets/partials/         # Cópia estática dos partials para dev e build
├── src/
│   ├── data/
│   │   └── eixos.ts             # Dados centralizados dos 5 Eixos, Tópicos e Posts
│   ├── pages/
│   │   ├── eixo-entry.ts        # Entry-point unificado das telas de seleção
│   │   └── topico-entry.ts      # Entry-point unificado dos feeds de tópico
│   ├── types/
│   │   └── post.ts              # Interfaces Post, Topico e Eixo
│   ├── grid.ts                  # Componente e renderizador do grid de posts
│   ├── grid.test.ts             # Testes unitários do grid
│   ├── main.ts                  # Carregador dinamico de header/footer e setup
│   ├── menu.ts                  # Lógica do menu modal off-canvas
│   └── index-entry.ts           # Entry-point da página inicial
├── index.html                   # Página inicial do Observatório
├── package.json
├── tsconfig.json
├── vite.config.ts               # Configuração do Vite MPA e Vitest
└── README.md
```

---

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm

### Passos
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o navegador no endereço exibido (geralmente `http://localhost:5173/`).

---

## Como Construir (Build)

Para gerar a versão de produção otimizada:
```bash
npm run build
```
Os arquivos gerados serão salvos na pasta `dist/`.

Para testar a versão de produção localmente:
```bash
npm run preview
```

---

## Testes

Executar a suíte de testes com Vitest:
```bash
npm run test
```

Executar a verificação de tipos TypeScript:
```bash
npm run typecheck
```

---

## Deploy no GitHub Pages

Para publicar as alterações no GitHub:
1. Garanta que o projeto passa no build e testes:
   ```bash
   npm run typecheck && npm run test && npm run build
   ```
2. Adicione e comite as alterações no Git:
   ```bash
   git add -A
   git commit -m "feat: reestruturação completa dos 5 eixos temáticos e navegação em 2 níveis"
   git push origin main
   ```
