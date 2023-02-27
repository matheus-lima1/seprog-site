interface Attributes2 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Logo {
  data: Data;
}

export interface Attributes {
  titulo: string;
  subtitulo: string;
  conteudo: string;
  instagram: string;
  nomeInstagram: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  logo: Logo;
}

export interface Datum {
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
