
    interface Attributes {
        horarios: string;
        conteudo: string;
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

    export default interface IEvents {
        data: Datum[];
        meta: Meta;
    }


