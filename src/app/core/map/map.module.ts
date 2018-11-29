import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {ViewerComponent} from './components/viewer/viewer.component';
import {MapService} from './map.service';

@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    LeafletModule
  ],
  exports: [
    ViewerComponent
  ],
})
export class MapModule {
  static forRoot() {
    return {
      ngModule: MapModule,
      providers: [MapService]
    };
  }
}
