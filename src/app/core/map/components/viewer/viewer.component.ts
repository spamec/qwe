import {
  Component, OnInit, OnDestroy, OnChanges,
  Input
} from '@angular/core';
import * as L from 'leaflet';
import {ViewerService} from './viewer.service';

@Component({
  selector: 'app-core-map-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy, OnChanges {
  layers: any;
  @Input() options: any;
  private readonly _options: any;

  private _map: L.Map; // leaflet map

  private _layersSubscribe: any;

  constructor(private viewerService: ViewerService) {
    this._options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
      ],
      zoom: 10,
      center: L.latLng(55.751244, 37.618423)
    };
    this.layers = [];
  }

  ngOnInit() {
    this.options = Object.assign({}, this._options, this.options);
    // console.log(this.options);
  }

  ngOnChanges(changes) {
    this.options = Object.assign({}, changes['options'].previousValue, changes['options'].currentValue);
    // this._options = this.options;
  }

  ngOnDestroy() {
  }

  onMapReady(map: L.Map) {
    console.log('MapReady');
    this._map = map;


    this._layersSubscribe = this.viewerService.observableLeafletLayers.subscribe((layers) => {
      this.layers = [];
      for (const layerId in layers) {
        if (layers.hasOwnProperty(layerId)) {
          this.layers.push(layers[layerId]);
        }
      }
      console.log(this.layers);
    });
  }


}
