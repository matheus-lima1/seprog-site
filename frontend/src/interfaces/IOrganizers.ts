interface Attributes {
  titulo: string;
  subtitulo: string;
  conteudo: string;
  instagram: string;
  nomeInstagram: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

export default interface IOrganizers {
  data: Datum[];
  meta: Meta;
}
