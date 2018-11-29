import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './components/viewer/viewer.component';

@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ViewerComponent
  ],
})
export class MapModule { }
