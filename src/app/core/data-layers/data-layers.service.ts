import {Injectable, Input} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {DataLayers} from './models/data-layers';

import * as fake from './test';

@Injectable({
  providedIn: 'root'
})
export class DataLayersService {

  constructor() {
    this.init();
  }

  get dataLayers(): DataLayers {
    return this._dataLayers;
  }

  @Input('dataLayers') set dataLayers(data: DataLayers) {

    this._dataLayers = data;
    this._dataLayersSubject.next(this._dataLayers);
  }

  get observableDataLayers(): Observable<DataLayers> {
    return this._dataLayersSubject.asObservable();
  }

  private _dataLayers: DataLayers;
  private _dataLayersSubject = new Subject<DataLayers>();


  private init() {
    this.loadData().then((data: DataLayers) => {
      this.dataLayers = data;
    });
  }

  /**
   * обращение к апи
   */
  loadData(t?) {
    return new Promise((resolve, reject) => {
      resolve(fake.temp);
    });
  }

}
