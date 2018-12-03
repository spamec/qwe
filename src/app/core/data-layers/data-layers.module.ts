import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeModule} from 'angular-tree-component';
import {DataLayersService} from './data-layers.service';
import {TreeComponent} from './components/tree/tree.component';

import {DataLayers} from './models/data-layers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from '../../material-imports';
import { MatTreeComponent } from './components/mat-tree/mat-tree.component';

@NgModule({
  declarations: [TreeComponent, MatTreeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TreeModule.forRoot()
  ],
  exports: [
    TreeComponent,
    MatTreeComponent
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
