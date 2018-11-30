import {DataLayersLayer} from './dataLayersLayer';

export class DataLayersGroup {
  order: number;
  name: string;
  group?: DataLayersGroup[];
  layers?: DataLayersLayer[];
}
