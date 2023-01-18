import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEx1Component } from './w-ex1/w-ex1.component';



@NgModule({
  declarations: [
    WEx1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[WEx1Component],
})
export class WebWorkerModule { }
