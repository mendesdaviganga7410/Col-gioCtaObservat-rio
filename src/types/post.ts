export type Categoria = "Pesquisa" | "Notícia" | "Evento" | "Destaque" | (string & {});

export interface Post {
  id: string;
  titulo: string;
  categoria: Categoria;
  data: string;
  thumbnail: string;
  link: string;
  resumo: string;
}
