import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepEx1Component } from './dep-ex1/dep-ex1.component';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';
import { DepEx2Component } from './dep-ex2/dep-ex2.component';



@NgModule({
  declarations: [
    DepEx1Component,
    ParentDirective,
    ChildDirective,
    DepEx2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentDirective,ChildDirective
  ]
})
export class DependencyInjectionModule { }
