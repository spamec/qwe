import {
  Component, OnInit, OnDestroy, OnChanges,
  Input
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-core-map-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() options: any;
  private _options: any;

  constructor() {
    this._options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
      ],
      zoom: 10,
      center: L.latLng(55.751244, 37.618423)
    };
  }

  ngOnInit() {
    this.options = Object.assign({}, this._options, this.options);
    console.log(this.options);
  }

  ngOnChanges(changes) {
    // this.options = Object.assign({}, changes.options, changes.options);
    // this._options = this.options;
  }

  ngOnDestroy() {
  }



}
