import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { MultislotComponent } from './multislot/multislot.component';



@NgModule({
  declarations: [
    BasicComponent,
    MultislotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicComponent,
    MultislotComponent
  ]
})
export class ContentProjectionModule { }
