import {Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mapOptions = {
    zoom: 7,
    center: L.latLng(53.1736, 107.6625)
  };
}
