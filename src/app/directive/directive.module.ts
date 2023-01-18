import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex1Component } from './ex1/ex1.component';
import { HighDirective } from './high.directive';



@NgModule({
  declarations: [
    Ex1Component,
    HighDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[HighDirective]
})
export class DirectiveModule { }
