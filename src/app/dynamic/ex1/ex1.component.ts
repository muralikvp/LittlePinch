import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ex1-dy',
  template: '<h1>Ex1 Component {{name}}</h1>',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component {
@Input() name:string; 
}


@Component({
  selector: 'app-ex3-dy',
  template: '<h1>Ex3 Component {{name}}</h1>',
  styleUrls: ['./ex1.component.css']
})
export class Ex3Component {
  @Input() name:string; 

}
