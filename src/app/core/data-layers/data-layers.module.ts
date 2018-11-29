import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeModule} from 'angular-tree-component';
import {DataLayersService} from './data-layers.service';
import {TreeComponent} from './components/tree/tree.component';

import {DataLayers} from './models/dataLayers';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    TreeModule.forRoot()
  ],
  exports: [
    TreeComponent
  ],
  providers: [DataLayers]
})
export class DataLayersModule {
  static forRoot() {
    return {
      ngModule: DataLayersModule,
      providers: [DataLayersService]
    };
  }
}
