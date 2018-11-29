import {DataLayers} from './models/dataLayers';

export const temp: DataLayers = {
  'type': 'layertree',
  'root': {
    'group': {
      'name': 'Мозаики высокого разрешения',
      'order': 1,
      'group': {
        'name': 'Вторая группа данных',
        'order': 1,
        'group': {},
        'layers': []
      },
      'layers': [
        {
          'name': ' Мозаика в естественных цветах (2017г)',
          'type': 'tms',
          'order': 1,
          'id': 'highres_mosaics_RGB_2017',
          'url': 'http://94.159.64.34:8001/geoserver/gwc/service/tms/1.0.0/baikal:highres_mosaics_RGB_2017@EPSG:3857@png/{z}/{x}/{y}.png'
        },
        {
          'name': ' Мозаика в естественных цветах (2016г)',
          'type': 'tms',
          'order': 2,
          'id': 'highres_mosaics_RGB_2016',
          'url': 'http://94.159.64.34:8001/geoserver/gwc/service/tms/1.0.0/baikal:highres_mosaics_RGB_2016@EPSG:3857@png/{z}/{x}/{y}.png'
        },
        {
          'name': ' Мозаика в естественных цветах (2015г)',
          'type': 'tms',
          'order': 3,
          'id': 'highres_mosaics_RGB_2015',
          'url': 'http://94.159.64.34:8001/geoserver/gwc/service/tms/1.0.0/baikal:highres_mosaics_RGB_2015@EPSG:3857@png/{z}/{x}/{y}.png'
        }]
    }
  }
};
