import {Injectable} from '@angular/core';
import {MapService} from '../../map.service';
import {DataLayers} from '../../../data-layers/models/data-layers';
import {DataLayersLayer} from '../../../data-layers/models/data-layers-layer';
import {Observable, Subject} from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private mapService: MapService) {
    this.leafletLayers = {};
    this._extraLayersSubscribe = mapService.observableDataLayers.subscribe((extraLayers: DataLayersLayer[]) => {
      this.extraLayers = extraLayers;
      // console.log('viewer.service', this.extraLayers);
      const leafletLayers = {};
      console.log(extraLayers);
      extraLayers.forEach((layer) => {
        if (this.leafletLayers[layer.id]) {
          leafletLayers[layer.id] = this.leafletLayers[layer.id];
        } else {
          leafletLayers[layer.id] = new L.TileLayer(layer.url, {tms: true});
        }

        // if(!)
      });
      this.leafletLayers = leafletLayers;
      this._leafletLayersSubject.next(this.leafletLayers);
    });
  }

  extraLayers: DataLayersLayer[];
  leafletLayers: any;
  private _leafletLayersSubject = new Subject<any>();

  private _extraLayersSubscribe: any;

  get observableLeafletLayers(): Observable<any> {
    return this._leafletLayersSubject.asObservable();
  }

}
