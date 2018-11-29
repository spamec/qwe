import {Injectable, Input} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {DataLayers} from './models/dataLayers';

import * as fake from './test';

@Injectable({
  providedIn: 'root'
})
export class DataLayersService {

  constructor() {
    this.loadData();

  }

  loadData() {
    // api
    setTimeout(() => {
      console.log(200);
      this.dataLayers = fake.temp;
    }, 200);
  }

  get dataLayers() {
    return this._dataLayers;
  }

  @Input('dataLayers') set dataLayers(data: any) {

    this._dataLayers = data;
    this._dataLayersSubject.next(this._dataLayers);
  }

  private _dataLayers: any;
  private _dataLayersSubject = new Subject<any>();

  get observableDataLayers() {
    return this._dataLayersSubject.asObservable();
  }

}
