class DataLayersLayer {
  name: string;
  type: string;
  order: number;
  id: string;
  url: string;
}

class DataLayersGroup {
  order: number;
  name: string;
  group?: DataLayersGroup|{};
  layers?: DataLayersLayer[];
}

export class DataLayers {
  type: string;
  root: {
    group: DataLayersGroup;
  };
}
