import { Component } from '@angular/core';
import { from, interval,fromEvent  } from 'rxjs';
import { ajax } from 'rxjs/ajax'; // ajax function


@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component {


  data = from(fetch('/api/endpoint')); //Created from Promise

  // el = document.getElementById('obs1');
  // mouseMoves = fromEvent(this.el, 'mousemove');
  // subscription = this.mouseMoves.subscribe((e: MouseEvent) => {
  //   console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
  //   });
    
// data.subscribe({
//  next(response) { console.log(response); },
//  error(err) { console.error('Error: ' + err); },
//  complete() { console.log('Completed'); }
// });

}
