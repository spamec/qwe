import {Injectable} from '@angular/core';
import {DataLayersService} from '../../data-layers.service';
import {DataLayers} from '../../models/dataLayers';


@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private dataLayersService: DataLayersService) {
    console.log('TreeService');
    this.dataLayersSubscribe = dataLayersService.observableDataLayers.subscribe(data => {

      this.dataLayers = data;
      console.log(this.dataLayers);
      // this.hwListService.updateHwId(options);
    }, error => {
      console.log(error);
    });


  }

  gridData: any;
  dataLayers: DataLayers;
  dataLayersSubscribe: any;

}
