import {Injectable} from '@angular/core';
import {DataLayersService} from '../../data-layers.service';
import {DataLayers} from '../../models/dataLayers';


@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private dataLayersService: DataLayersService) {
    console.log('TreeService');
    this.dataLayersSubscribe = dataLayersService.dataLayers.subscribe((data: DataLayers) => {

        this.dataLayers = data;
        console.log(this.dataLayers);
        // this.hwListService.updateHwId(options);
    });


  }

  gridData: any;
  dataLayers: DataLayers;
  dataLayersSubscribe: any;

}
