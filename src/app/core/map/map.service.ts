import {Injectable} from '@angular/core';
import {DataLayersLayer} from '../data-layers/models/data-layers-layer';
import {Observable, Subject} from 'rxjs';
import {DataLayers} from '../data-layers/models/data-layers';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _extraLayers: DataLayersLayer[];
  private _extraLayersSubject = new Subject<DataLayersLayer[]>();

  constructor() {
    this._extraLayers = [];
  }

  toggleLayers(layer: DataLayersLayer) {
    if (this._extraLayers.map((el) => el.id).indexOf(layer.id) === -1) {
      this._extraLayers.push(layer);
    } else {
      this._extraLayers = this._extraLayers.filter((el) => el.id !== layer.id);
    }
    this._extraLayersSubject.next(this._extraLayers);
  }

  get observableDataLayers(): Observable<DataLayersLayer[]> {
    return this._extraLayersSubject.asObservable();
  }
}
