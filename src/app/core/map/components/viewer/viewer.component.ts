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

  @Input() options: any = {};

  constructor() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
      ],
      zoom: 4,
      center: L.latLng(53.879966, 36.726909)
    };
  }

  ngOnInit() {
    console.log('ngOnInit', this.options);
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges', changes.options.currentValue, changes.options.previousValue);
  }

  ngOnDestroy() {
  }

}
