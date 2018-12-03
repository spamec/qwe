import {DataLayersLayer} from './data-layers-layer';

export class DataLayersGroup {
  order: number;
  name: string;
  group?: DataLayersGroup[];
  layers?: DataLayersLayer[];
}
