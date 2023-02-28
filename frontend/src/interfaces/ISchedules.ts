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

  interface Data {
      id: number;
      attributes: Attributes2;
  }

  interface Imagem {
      data: Data;
  }

  interface Attributes3 {
      horarios: string;
      conteudo: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
  }

  interface Datum2 {
      id: number;
      attributes: Attributes3;
  }

  interface Eventos {
      data: Datum2[];
  }

  interface Attributes {
      dia: string;
      organizador: string;
      assunto: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      imagem: Imagem;
      eventos: Eventos;
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


