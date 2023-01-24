import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ex1-dy',
  template: '<h1>First Component {{name}}</h1>',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component {
@Input() name:string; 
}


@Component({
  selector: 'app-ex3-dy',
  template: '<h1>Second Component {{name}}</h1>',
  styleUrls: ['./ex1.component.css']
})
export class Ex3Component {
  @Input() name:string; 

}
