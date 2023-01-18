import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';
import { AsyncExComponent } from './async-ex/async-ex.component';
import { LowerPipe } from './lower.pipe';



@NgModule({
  declarations: [
    PipeComponent,
    UpperPipe,
    AsyncExComponent,
    LowerPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[PipeComponent,AsyncExComponent]
})
export class PipesModule { }
