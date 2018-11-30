import {Injectable} from '@angular/core';
import {DataLayersService} from '../../data-layers.service';
import {DataLayers} from '../../models/dataLayers';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private dataLayersService: DataLayersService) {
    console.log('TreeService');


    this._dataLayersSubscribe = dataLayersService.observableDataLayers.subscribe(data => {
      this._dataLayers = data;
      console.log('this.dataLayers', this._dataLayers);
      this.dataLayersToGridData(this._dataLayers);
      // this.hwListService.updateHwId(options);
    }, error => {
      console.log(error);
    });
  }


  private _treeData: any;
  private _treeDataSubject = new Subject<any>();

  private _dataLayers: DataLayers;
  private _dataLayersSubscribe: any;

  get observableTreeData(): Observable<any> {
    return this._treeDataSubject.asObservable();
  }

  private __item(item) {
    const temp = {
      name: item.name || 'root',
      children: []
    };
    if ('layers' in item) {
      item.layers.forEach((layer) => {
        // console.log(layer);
        temp.children.push(layer);
      });
    }
    item.group.forEach((subItem) => {
      temp.children.unshift(this.__item(subItem));
    });

    return temp;
  }

  dataLayersToGridData(dataLayers: DataLayers) {
    return new Promise((resolve, reject) => {
      if (dataLayers.type !== 'layertree') {
        throw new Error('type \'layertree\' expected');
      }
      this._treeData = this.__item(dataLayers.root);
      this._treeDataSubject.next(this._treeData);
    });

  }

}
