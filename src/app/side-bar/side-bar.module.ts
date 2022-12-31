import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideWidComponent } from './side-wid/side-wid.component';



@NgModule({
  declarations: [
    SideWidComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideWidComponent
  ]
})
export class SideBarModule { }
