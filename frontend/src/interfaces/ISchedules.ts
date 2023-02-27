import IEvents from "./IEvents";

interface Attributes {
  dia: string;
  organizador: string;
  assunto: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imagem: Imagem;
  events: IEvents[];
}

export interface Attributes2 {
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

export interface Imagem {
    id: number;
    attributes: Attributes2;
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

export default interface ISchedules {
  data: Datum[];
  meta: Meta;
}
