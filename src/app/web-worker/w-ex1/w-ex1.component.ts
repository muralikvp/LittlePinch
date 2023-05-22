import { Component } from '@angular/core';

@Component({
  selector: 'app-w-ex1',
  templateUrl: './w-ex1.component.html',
  styleUrls: ['./w-ex1.component.css']
})
export class WEx1Component {
  result:any;

constructor(){

}
LoadHeavyComp()
{

  if (typeof Worker !== 'undefined') {

    //Intialise the Web Worker
    const worker = new Worker(new URL('app.worker', import.meta.url));

    //Call Web Worker and POst Message
    worker.postMessage(10000);

    // Get Response from Web Worker
    worker.onmessage = ({ data }) => {
      this.result = data.prime;
    };

  } else {
    // Web workers are not supported in this environment.
    // You should add a fallback so that your program still executes correctly.
  }
}
}
