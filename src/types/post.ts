export type Categoria = "Pesquisa" | "Notícia" | "Evento" | "Destaque" | string;

export interface Post {
  id: string;
  titulo: string;
  categoria: Categoria;
  data: string;
  thumbnail?: string;
  link?: string;
  resumo?: string;
}

export interface Topico {
  id: string;
  titulo: string;
  descricao: string;
  icone: string; // emoji ou SVG inline
  posts: Post[];
}

export interface Eixo {
  id: string;
  numero: number;
  titulo: string;
  diretriz: string;
  cor: string; // cor accent do eixo
  topicos: Topico[];
}
