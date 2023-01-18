import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex1Component, Ex3Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { HostDirective } from './host.directive';



@NgModule({
  declarations: [
    Ex1Component,
    Ex2Component,
    Ex3Component,
    HostDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[Ex1Component],
  entryComponents:[Ex1Component,Ex2Component,Ex3Component]
})
export class DynamicModule { }
