import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { SubjectExComponent } from './subject-ex/subject-ex.component';



@NgModule({
  declarations: [
    ObservableExComponent,
    SubjectExComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ObservableExComponent,SubjectExComponent
  ]
})
export class ObservableModule { }
