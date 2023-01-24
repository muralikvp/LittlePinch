import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex1Component_Rxjs } from './ex1/ex1.component';
import { RxEx2Component } from './rx-ex2/rx-ex2.component';
import { HotColdObserComponent } from './hot-cold-obser/hot-cold-obser.component';



@NgModule({
  declarations: [
    Ex1Component_Rxjs,
    RxEx2Component,
    HotColdObserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsModule { }
