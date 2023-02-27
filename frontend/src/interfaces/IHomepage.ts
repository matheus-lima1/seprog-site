import IOrganizers from "./IOrganizers";
import ISchedules from "./ISchedules";

export interface Attributes {
  primeiroTitulo: string;
  heroDescription: string;
  tituloSobre: string;
  sobreDescricao: string;
  createdAt: Date;
  updatedAt: Date;
  organizers: IOrganizers[];
  schedules: ISchedules[];
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Meta {}

export interface IHomepage {
  data: Data;
  meta: Meta;
}
