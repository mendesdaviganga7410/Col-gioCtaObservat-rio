# MIGRATION: Vanilla JS para TypeScript + Vite

Este documento detalha as decisões técnicas adotadas durante a migração do projeto "Observatório CTA" para um ecossistema moderno.

## 1. Tipagem (Decisão sobre `Categoria`)
Em vez de usar uma simples `string` ou engessar o sistema com um `Union Type` estrito (o que exigiria alteração no código fonte e build a cada nova categoria criada), adotou-se o padrão híbrido:
```typescript
export type Categoria = "Pesquisa" | "Notícia" | "Evento" | "Destaque" | (string & {});
```
**Trade-off**: Isso garante autocompletar na IDE e segurança para os tipos conhecidos, mas mantém a flexibilidade para strings genéricas, preservando a natureza de um "banco de dados" não rígido.

## 2. Eliminação de Variáveis Globais Implícitas
Todo o projeto operava sob a premissa de que os scripts `<script defer>` carregavam arquivos na ordem correta, lançando variáveis como `POSTS` no escopo global (`window.POSTS`). 
**Migração**:
- `assets/js/data/dados-abaX.js` viraram `src/data/dados-abaX.ts`, cada um contendo `export const POSTS: Post[] = [...]`.
- A engine `grid.js` virou `src/grid.ts` com métodos purificados (`formatarData`) e injetados de dependências (`renderizarGrid(posts, grid, total)`), que agora não precisam "adivinhar" elementos globais.

## 3. Múltiplos Entry Points (MPA no Vite)
Por padrão o Vite foca em Single Page Apps (SPA). O projeto possui 8 arquivos HTML (1 index e 7 abas).
Para preservá-los, o `vite.config.ts` foi configurado com um objeto `input` no `rollupOptions`, garantindo que todas as páginas HTML passem pelo funil de processamento e minificação.
- Foi criado o `src/index-entry.ts` para a raiz e `src/pages/abaX-entry.ts` para as categorias. 

## 4. Testes DOM (Vitest + JSDOM)
Para cobrir lógicas visuais puras de HTML Vanilla (sem React), o `vitest` foi combinado ao ambiente `jsdom`. 
A suíte `src/grid.test.ts` verifica a consistência do DOM gerado pelo template string (presença/ausência de botões, link vazio gerando span com `em breve`, e substituição de imagem quebrada por placeholder SVG). O arquivo original da Engine do Grid continua inalterado na sua essência.
