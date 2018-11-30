import {Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mapOptions = {
    zoom: 5,
    center: L.latLng(55.751244, 37.618423)
  };
}
