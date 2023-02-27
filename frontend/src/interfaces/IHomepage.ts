import IOrganizers from "./IOrganizers";
import ISchedules from "./ISchedules";

interface Attributes {
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

export default interface IHomepage {
  data: Data;
  meta: Meta;
}
