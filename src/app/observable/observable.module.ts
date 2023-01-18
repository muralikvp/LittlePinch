import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { SubjectExComponent } from './subject-ex/subject-ex.component';
import { Obs1Component } from './obs1/obs1.component';



@NgModule({
  declarations: [
    ObservableExComponent,
    SubjectExComponent,
    Obs1Component
  ],
  imports: [
    CommonModule
  ],exports:[
    ObservableExComponent,SubjectExComponent,Obs1Component
  ]
})
export class ObservableModule { }
