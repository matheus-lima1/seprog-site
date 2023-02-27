interface Attributes {
  dia: string;
  organizador: string;
  assunto: string;
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

export default interface ISchedules {
  data: Datum[];
  meta: Meta;
}
