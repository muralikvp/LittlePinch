import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,SubHomeComponent
  ]
})
export class LifeCycleHookModule { }
